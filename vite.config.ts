import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from 'vite-plugin-md'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include:[/\.vue$/, /\.md$/],
  }),Markdown()],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },

    lib: {
      name: "kurodream-ui",
      entry: "./packages/index.ts",
    },
  },
  resolve: {
      alias: {
        '@':resolve(__dirname ,'src')
      }
    },
    css:{
      preprocessorOptions: {
        scss: {
          additionalData:'@use "./src/assets/styles/style.scss" as *;'
      }
    }
  }
});
