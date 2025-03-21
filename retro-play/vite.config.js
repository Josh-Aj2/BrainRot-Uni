import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "./api": {
        target: "https://free-to-play-games-database.p.rapidapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        headers: {
          "x-rapidapi-key": process.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      },
    },
  },
});
