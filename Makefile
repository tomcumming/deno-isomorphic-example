.DEFAULT_GOAL: all
all: client run

client: src/client.ts src/shared.ts
	deno bundle -c client.tsconfig.json src/client.ts browser.mjs

.PHONY: run
run:
	deno run --allow-net --allow-read src/server.ts
