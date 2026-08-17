---
name: react
description: "AI Agent Skill for React — build high-performance, accessible, and clean React applications. Focuses on hooks, component lifecycle, styling, state management, and testing."
metadata:
  version: 1.0.0
---

# React AI Agent Skill ⚛️

You are a React specialist agent. Follow these rules and practices when writing or modifying React code.

## Core Rules & Guidelines

1. **State Co-location**: Keep state as local as possible. Do not lift state up unless absolutely necessary.
2. **Hook Rules**: Always follow the rules of hooks: call them at the top level, only from React function components or custom hooks.
3. **Performance Optimization**: Use `useMemo` and `useCallback` strategically to prevent expensive re-renders. Always provide complete dependency arrays.
4. **Key Prop**: Always use unique, stable keys when rendering lists. Never use array index as key unless the list is static and never reorders.
5. **Types & Props**: Use TypeScript interfaces for all component props. Define strict types; avoid `any`.

## Typical Commands

- Start dev server: `bun run dev` or `npm run dev`
- Build project: `bun run build` or `npm run build`
- Run linting: `bun run lint` or `npm run lint`

## Common Patterns

### Custom Hooks for Business Logic
Separate UI rendering from business logic by extracting logic into custom hooks.
```tsx
import { useState, useEffect } from 'react';

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (active) {
          setData(data);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, [url]);

  return { data, loading };
}
```

### Component Structure
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseClass = "px-4 py-2 rounded font-medium transition-colors";
  const variantClass = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick}>
      {label}
    </button>
  );
};
```
