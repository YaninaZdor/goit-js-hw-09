import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
        gallery: 'src/public/1-gallery.html',
        form: 'src/public/2-form.html',
      },
    },
  },
  plugins: [FullReload(['./src/**/*.html'])],
});
