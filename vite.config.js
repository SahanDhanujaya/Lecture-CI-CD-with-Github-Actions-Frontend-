import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["lecture-ci-cd-with-github-actions-qzvv.onrender.com"],
  },
});
