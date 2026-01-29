import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
// O alias '@' é um padrão comum para a pasta src
      '@': path.resolve(__dirname, './src'),
      // Alias específico para assets
      'assets': path.resolve(__dirname, './src/assets'),
    },
  },
})

