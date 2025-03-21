// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api/rawg": {
//         target: "https://api.rawg.io/api/games", // Correct target URL
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api\/rawg/, ""),
//         headers: {
//           Authorization: `Bearer ${process.env.VITE_RAWG_API_KEY}`, // API key from rawg.io
//         },
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // No need for proxy for Jikan API since it doesn't require authentication
    proxy: {},
  },
});
