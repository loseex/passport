import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/v1/": {
        target: process.env.VITE_API_URL ?? "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        timeout: 10000,
      },
    },
  },
});
