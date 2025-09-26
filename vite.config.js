import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json";
// https://vite.dev/config/
export default defineConfig({
  base: `/streamkar/${pkg.name}/`,
  plugins: [react(), tailwindcss()],
});
