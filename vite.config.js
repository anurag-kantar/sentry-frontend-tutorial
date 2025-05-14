import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
    open: true, // this ensures that the browser opens upon server start
    port: 3000, // this sets a default port to 3000  
    outDir: "dist", // this sets the output directory to dist
    emptyOutDir: true, // this ensures that the output directory is emptied before each build
    rollupOptions: {
      output: {
        sourcemap: true, // Source map generation must be turned on
        entryFileNames: "[name].js", // this sets the entry file name to [name].js
        chunkFileNames: "[name].js", // this sets the chunk file name to [name].js
        assetFileNames: "[name].[ext]", // this sets the asset file name to [name].[ext]
      },
    },
  },
  plugins: [react(), // Put the Sentry vite plugin after all other plugins
  sentryVitePlugin({
    org: "blackwood-seven-e2d23a3f8",
    project: "javascript-react",
    authToken: process.env.SENTRY_AUTH_TOKEN,
  })],
});