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
- Do not index personal worlds, logs, screenshots, or local UI/history files

Hosted pack URL:

- `https://noxuszx.github.io/drx-mods-client/minecraft/pack.toml`

Publishing/testing notes:

- Run `packwiz refresh` from `minecraft/` before committing pack changes
- After pushing to GitHub Pages, use the hosted pack URL above for packwiz-installer clients
- If the GitHub Pages layout changes, update this URL before changing wrapper/client config
