# `src` Folder Structure

This document outlines the structure and purpose of each directory and file within the `src` folder of the Blog CMS project.

## Directory Overview

- `app/`
- `context/`
- `types/`
- `components/`

## Detailed Description

### `app/`

Contains the core application setup files such as:

- `favicon.ico` - The favicon for the web app.
- `globals.css` - Global CSS styles.
- `layout.tsx` - The main layout component.
- `page.module.css` - CSS module for the main page.
- `page.tsx` - The main page component.

### `context/`

Responsible for managing the global state of the application. It includes:

- `ModulesContext.tsx` - Manages the state and logic related to the CMS modules.
- `UserSettingsContext.tsx` _(Optional)_ - Manages user-specific settings or preferences.
- `utils/` - Contains utility functions specific to context management.
  - `moduleUtils.ts` - Utility functions for module manipulation.

### `types/`

This directory includes all TypeScript type definitions to ensure type safety across the application. It may contain:

- `moduleTypes.ts` - Type definitions for CMS modules.
- `commonTypes.ts` - Common type definitions used throughout the app.

### `components/`

Holds all React components used in the application. This folder is essential for organizing UI components of the Next.js app. It includes:

- `ModuleComponent.tsx` - Component for rendering CMS modules.
- `HeaderComponent.tsx` - Header component of the application.
- `FooterComponent.tsx` - Footer component of the application.

---

Each directory and file is crafted to maintain a clear and manageable structure, promoting ease of development and scalability of the Blog CMS project.
