import { defineConfig } from 'vite';
import { swcReact } from 'vite-plugin-swc';

export default defineConfig({
  plugins: [swcReact()],
  build: {
    outDir: 'dist',
  },
  base: "/newCatalog"
});