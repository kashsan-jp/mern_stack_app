import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
 
  ],
 
  server: {
    proxy: {
      '/api' :{
        //target: "http://localhost:4000",
        //target: import.meta.env.VITE_BACKEND_URL,
        target: "https://mern-stack-app-backend-z7ka.onrender.com",
        changeOrigin: true
      }
    }
  }
})
