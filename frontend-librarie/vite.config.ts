import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/aureliemous.github.io/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
