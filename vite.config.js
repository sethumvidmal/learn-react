import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Manual definition of __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/Components/AsyncAutocomplete/AsyncAutocomplete.jsx'), // Path to your component
      name: 'MyButtonComponent',  // Global variable name for the component
      fileName: (format) => `my-component.${format}.js`,  // Output filename
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Exclude React and ReactDOM from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
