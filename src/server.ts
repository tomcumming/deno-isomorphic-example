import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";
import { rot13 } from "./shared.ts";
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";

const jsFilePath = "/browser.mjs";

const maybeUnsafe = /[<>\"]/g;

function page(message: string) {
  const safeMessage = message.replace(maybeUnsafe, "");
  const rot13d = rot13(safeMessage);

  return `
<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <script type="module" src="${jsFilePath}"></script>
    </head>
    <body>
        <p>Converted Text:</p>
        <form method="get" action="/" enctype="text/plain">
            <textarea id="input" name="message">${safeMessage}</textarea>
            <input type="submit">
        </form>
        <code id="output" style="display: flex">${rot13d}</code>
    </body>
</html>
`;
}

const host = "http://server";

const server = serve({ port: 1234 });
for await (const req of server) {
  const url = new URL(`${host}${req.url}`);

  if (url.pathname === jsFilePath) {
    const headers = new Headers({ "Content-Type": "text/javascript" });
    req.respond({ body: await readFileStr("browser.mjs"), headers });
  } else {
    const message = url.searchParams.get("message");
    req.respond({ body: page(message || "Enter a message here") });
  }
}
