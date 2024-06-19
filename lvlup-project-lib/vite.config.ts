import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "lvlup-project-lib",
    },
    sourcemap: true,
    target: "es6",
    minify: false,
  },
  plugins: [dts({ outDir: "dist" })],
});
