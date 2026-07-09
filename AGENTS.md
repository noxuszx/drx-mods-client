# Packwiz Notes

This instance is split into two roots:

- Git repo root: the PrismLauncher instance folder
- Packwiz root: `minecraft/`

Useful commands:

- `packwiz refresh` from `minecraft/` to rebuild `minecraft/index.toml`
- Keep runtime files, local caches, mod jars, and launcher bootstrap jars out of the pack index
- Treat `minecraft/*.pw.toml`, `minecraft/pack.toml`, and shared config/data folders as source files

Current pack intent:

- PrismLauncher should stay playable from this instance
- GitHub-ready pack source lives under `minecraft/`
- This repo is the canonical source for the external installer app deployed through Cloudflare Pages
- The hosted app reads `minecraft/pack.toml` and `minecraft/index.toml` to decide what client instances should download
- Do not install or commit mod jar files into this repo; keep only Packwiz metadata such as `minecraft/mods/*.pw.toml`
- Do not index personal worlds, logs, screenshots, or local UI/history files

Hosted pack URL:

- `https://noxuszx.github.io/drx-mods-client/minecraft/pack.toml`

Cloudflare Pages notes:

- This is a static source deployment, not a Worker app
- Use build command `npm run build`
- Use build output directory `site`
- Do not use `npx wrangler deploy` for this Pages project; that command expects a Worker/static-assets configuration

Publishing/testing notes:

- Run `packwiz refresh` from `minecraft/` before committing pack changes
- After pushing to GitHub Pages, use the hosted pack URL above for packwiz-installer clients
- If the GitHub Pages layout changes, update this URL before changing wrapper/client config
