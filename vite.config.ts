import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// *** Replace 'your-repo-name' with the actual name of your GitHub repository ***
const repoName = 'res-main-web-app';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  base: `/${repoName}/`,
  build: {
    outDir: 'dist' // Default output directory
  }
});