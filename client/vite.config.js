import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'jsx',  // Apply JSX loader globally for .js and .jsx files
  },
});
