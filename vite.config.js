import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config({
  path:'../../.env'
})

const api = process.env.GEMINI_API_KEY

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
