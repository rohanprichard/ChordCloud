# ChordCloud

An early web foundation for keeping sheet music accessible from anywhere.

## Status

This repository currently contains the frontend foundation and component setup for the project. It is not yet a finished, hosted application.

## Stack

- React + TypeScript
- Vite
- Mantine
- Storybook
- Vitest and React Testing Library

## Run locally

Requires a current Node.js LTS release and Yarn 4.

```bash
corepack enable
yarn install
yarn dev
```

Open the local URL printed by Vite.

## Useful commands

```bash
yarn test             # types, formatting, lint, tests, and production build
yarn storybook         # component explorer
yarn storybook:build   # static Storybook build
```

## Repository layout

- `src/` — application components and styles
- `.storybook/` — Storybook configuration
- `test-utils/` — shared test setup

## License

MIT
