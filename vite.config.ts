import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // ⬇️ Add your build configuration here
  build: {
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },

  server: {
    host: "0.0.0.0", // allow external devices
    port: 5173,
  },

  base: "/creative-design/",
});
