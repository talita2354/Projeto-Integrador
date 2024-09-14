// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import * as path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       }
//     }
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redireciona as chamadas feitas para /api ao backend
      '/api': {
        target: 'http://localhost:3000', // URL do backend Node.js
        changeOrigin: true,  // Muda a origem para evitar problemas de CORS
        secure: false, // Se estiver usando HTTPS no backend, coloque como true
        rewrite: (path) => path.replace(/^\/api/, '') // Remove o prefixo "/api" nas requisições
      }
    }
  }
})