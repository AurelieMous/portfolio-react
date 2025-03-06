import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/aureliemous.github.io/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  }
});
