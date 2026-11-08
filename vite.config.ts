import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This Windows host reserves TCP 5091-5190 (Hyper-V), which covers Vite's
  // default 5173 and makes `npm run dev` fail with EACCES.
  server: {
    port: 5199
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
