import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig({
    root: "src/",

    build: {
      outDir: "../dist",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/index.html"),
          type: resolve(__dirname, "src/type/index.html"),
          user: resolve(__dirname, "src/user/index.html"),
        },
      },
    },
});