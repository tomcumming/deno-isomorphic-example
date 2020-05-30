# An isomorphic Deno web application example

This repo contains a web application with rich client-side interactivity that can also fall back to server side rendering for browsers without JavaScript enabled.

You will find clean separation of code with [server.ts](src/server.ts) launching a web-server and responding to requests, [client.ts](src/client.ts) for the in-browser behaviour and [shared.ts](src/shared.ts) for the logic that can be reused by both.

To run the example:
```bash
make
```

The default Makefile task will build the browser bundle and launch the web-server at `0.0.0.0:1234`.

## No other build tools/bundlers/transpilers required, just Deno!
