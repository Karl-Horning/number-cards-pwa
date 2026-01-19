# Number Cards (PWA)

---

## Table of Contents

- [Number Cards (PWA)](#number-cards-pwa)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Installation](#installation)
    - [Notes](#notes)
  - [Scripts \& Usage](#scripts--usage)
  - [Project Structure](#project-structure)
  - [Code Style \& Linting](#code-style--linting)
  - [Author](#author)

---

## Overview

A tiny, offline-first number-guessing game built with React, TypeScript, and Tailwind CSS.

The idea came from a Christmas cracker game (Christmas 2023) and has been recreated in code.

Pick a secret number (default range 1–63). For each "card", answer **Yes/No** to "Is your number on this card?". At the end, the app sums the values of the cards you said **Yes** to — that total is your number.

---

## Installation

```bash
git clone https://github.com/Karl-Horning/number-cards-pwa.git
cd number-cards-pwa
npm install
npm run dev
```

### Notes

- Tailwind v4 via the Vite plugin:

  ```ts
  // vite.config.ts
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  import tailwindcss from "@tailwindcss/vite";
  export default defineConfig({ plugins: [react(), tailwindcss()] });
  ```

- PWA via `vite-plugin-pwa`:

  - Ensure it’s added in `vite.config.ts`.
  - For TypeScript, include the client types:

    ```ts
    /// <reference types="vite/client" />
    /// <reference types="vite-plugin-pwa/client" />
    ```

---

## Scripts & Usage

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start local development server       |
| `npm run build`   | Build production assets              |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint checks (if configured)    |

---

## Project Structure

```bash
src/
├── components/
│   ├── AnswerButtons.tsx
│   ├── CardGrid.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HowItWorks.tsx
│   ├── InstallHint.tsx
│   └── ResultPanel.tsx
├── hooks/
│   └── useNumberTrick.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Code Style & Linting

This project uses:

- **ESLint** (TypeScript rules recommended)
- **Prettier** with the **Tailwind plugin**
- **Conventional Commits** (with extra types such as `a11y`, `ux`, etc.)

---

## Author

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)
