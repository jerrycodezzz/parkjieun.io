import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // GitHub Pages 커스텀 도메인 사용 시 "/"
  plugins: [react(), tailwindcss()],
});
