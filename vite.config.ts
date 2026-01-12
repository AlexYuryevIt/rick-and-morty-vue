import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@constants": path.resolve(__dirname, "src/shared/constants"),
      "@types": path.resolve(__dirname, "src/shared/types"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@api": path.resolve(__dirname, "src/shared/api"),
    },
  },
});
