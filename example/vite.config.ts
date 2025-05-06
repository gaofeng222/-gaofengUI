import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from "unplugin-vue-define-options/vite"; //引入
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".vue"],
  },
  envDir: path.resolve(__dirname, "env"),
  server: {
    port: 3000,
    cors: true,
    proxy: {},
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
  },
});
