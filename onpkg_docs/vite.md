---
name: vite
description: "AI Agent Skill for Vite — configure fast front-end builds, optimize HMR, configure assets, and set up proxies for local backend servers."
metadata:
  version: 1.0.0
---

# Vite AI Agent Skill ⚡

You are a Vite bundling and configuration specialist. Follow these rules and practices.

## Core Rules & Guidelines

1. **Vite Configurations**: Keep configuration clean. Use standard plugins (e.g. `@vitejs/plugin-react`) and configure aliases using `path` mapping to clean up deep relative imports.
2. **Environment Variables**: Access variables via `import.meta.env.VITE_VAR`. Only variables prefixed with `VITE_` are exposed to the client.
3. **Local Dev Proxy**: Configure local proxy servers (`server.proxy`) in development to avoid CORS issues when communicating with backend APIs.
4. **CSS & Styling**: Use postcss or native CSS @imports when nesting or using Tailwind CSS configurations.

## Common Patterns

### Vite config with Alias & Proxy
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```
