import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/API_BASE_URL": {
        target: "https://hotelbookingappbackend-qpsb.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/API_BASE_URL/, ""),
      },
    },
  },
});
