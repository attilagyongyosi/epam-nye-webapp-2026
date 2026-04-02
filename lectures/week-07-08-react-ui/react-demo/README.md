# React Demo app

Demo app used to showcase React features, routing, state management and using UI Libraries.

## Get Started
- Install dependencies: `npm install`
- Start Vite: `npm run dev`

## Using shadcn/ui with Vite React JS only template

Go to https://ui.shadcn.com/docs/installation/vite, scroll down to 'Existing Project' step-by-step guide

1. Can be ignored, since our project already exists
2. If tailwind is already set up, can be ignored, otherwise set it up
3. Instead of `tsconfig.json`, create a `jsconfig.json` on root level (next to your `vite.config.js`), and copy the following parts only:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

4. Ignore
5. You can copy/paste the contents of `vite.config.ts` here into your `vite.config.js`, and ignore the installations of `@types/node`
6. Use the init command to set up your shadcn/ui, or use https://ui.shadcn.com/create to customize, then click `Create Project`, select Vite and copy the generated command
7. Now you can start adding components as described here

## Tech Stack and Libraries
---
### Tools & Libraries
- Vite: https://vite.dev/
- React: https://react.dev/
- Redux Toolkit: https://redux-toolkit.js.org/ (for the curious minds, more on React Redux: https://react-redux.js.org/)
- RTK Query: https://redux-toolkit.js.org/rtk-query/overview
- React Router v6: https://reactrouter.com/6.30.3 (you can also check out v5 or v7 if you prefer)
- Tailwind: https://tailwindcss.com/
- shadcn/ui: https://ui.shadcn.com/ (how to use without TypeScript - see [this](#using-shadcnui-with-vite-react-js-only-template) section below)

### Showcased but not included in final version
- Bootstrap: https://getbootstrap.com/
- Thunks: https://redux.js.org/usage/writing-logic-thunks
- Redux Toolkit Thunks: https://redux-toolkit.js.org/api/createAsyncThunk

### Extras & Alternatives
- You can check out React Bootstrap to work with Components instead Classes: https://react-bootstrap.netlify.app/
- Material UI: https://mui.com/material-ui/
- Chakra UI: https://chakra-ui.com/
- Mantine: https://mantine.dev/
- shadcn/ui under the hood: 
  - Radix UI: https://www.radix-ui.com/
  - Base UI: https://base-ui.com/
