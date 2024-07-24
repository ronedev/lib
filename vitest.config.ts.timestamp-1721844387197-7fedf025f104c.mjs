// vitest.config.ts
import path from "path";
import { defineConfig as defineConfig2, mergeConfig } from "file:///C:/Users/agustin.vera/OneDrive%20-%20Possumus/Documentos/Proyectos/Practicas/lvlup-validateit/node_modules/vitest/dist/config.js";

// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/agustin.vera/OneDrive%20-%20Possumus/Documentos/Proyectos/Practicas/lvlup-validateit/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/agustin.vera/OneDrive%20-%20Possumus/Documentos/Proyectos/Practicas/lvlup-validateit/node_modules/vite-plugin-dts/dist/index.mjs";
import viteTsConfigPaths from "file:///C:/Users/agustin.vera/OneDrive%20-%20Possumus/Documentos/Proyectos/Practicas/lvlup-validateit/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\agustin.vera\\OneDrive - Possumus\\Documentos\\Proyectos\\Practicas\\lvlup-validateit";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "validateit"
    },
    sourcemap: true,
    target: "es6",
    minify: false
  },
  resolve: {
    alias: {
      "@src": resolve(__vite_injected_original_dirname, "/src")
    }
  },
  plugins: [dts({ outDir: "dist", exclude: ["**/*.test.ts", "tests/", "vitest.config.*"] }), viteTsConfigPaths()]
});

// vitest.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\agustin.vera\\OneDrive - Possumus\\Documentos\\Proyectos\\Practicas\\lvlup-validateit";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      globals: true,
      setupFiles: "./tests/helpers",
      // environment: 'jsdom' // emular tiempos
      alias: {
        "@src": path.resolve(__vite_injected_original_dirname2, "/src")
      },
      coverage: {
        thresholds: {
          lines: 50,
          functions: 50,
          branches: 50,
          statements: 50
        }
      }
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFndXN0aW4udmVyYVxcXFxPbmVEcml2ZSAtIFBvc3N1bXVzXFxcXERvY3VtZW50b3NcXFxcUHJveWVjdG9zXFxcXFByYWN0aWNhc1xcXFxsdmx1cC12YWxpZGF0ZWl0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZ3VzdGluLnZlcmFcXFxcT25lRHJpdmUgLSBQb3NzdW11c1xcXFxEb2N1bWVudG9zXFxcXFByb3llY3Rvc1xcXFxQcmFjdGljYXNcXFxcbHZsdXAtdmFsaWRhdGVpdFxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hZ3VzdGluLnZlcmEvT25lRHJpdmUlMjAtJTIwUG9zc3VtdXMvRG9jdW1lbnRvcy9Qcm95ZWN0b3MvUHJhY3RpY2FzL2x2bHVwLXZhbGlkYXRlaXQvdml0ZXN0LmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xyXG5cclxuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxyXG4gIHZpdGVDb25maWcsXHJcbiAgZGVmaW5lQ29uZmlnKHtcclxuICAgIHRlc3Q6IHtcclxuICAgICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgICAgc2V0dXBGaWxlczogJy4vdGVzdHMvaGVscGVycycsXHJcbiAgICAgIC8vIGVudmlyb25tZW50OiAnanNkb20nIC8vIGVtdWxhciB0aWVtcG9zXHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0BzcmMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnL3NyYycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgICAgdGhyZXNob2xkczoge1xyXG4gICAgICAgICAgbGluZXM6IDUwLFxyXG4gICAgICAgICAgZnVuY3Rpb25zOiA1MCxcclxuICAgICAgICAgIGJyYW5jaGVzOiA1MCxcclxuICAgICAgICAgIHN0YXRlbWVudHM6IDUwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuKVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFndXN0aW4udmVyYVxcXFxPbmVEcml2ZSAtIFBvc3N1bXVzXFxcXERvY3VtZW50b3NcXFxcUHJveWVjdG9zXFxcXFByYWN0aWNhc1xcXFxsdmx1cC12YWxpZGF0ZWl0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZ3VzdGluLnZlcmFcXFxcT25lRHJpdmUgLSBQb3NzdW11c1xcXFxEb2N1bWVudG9zXFxcXFByb3llY3Rvc1xcXFxQcmFjdGljYXNcXFxcbHZsdXAtdmFsaWRhdGVpdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWd1c3Rpbi52ZXJhL09uZURyaXZlJTIwLSUyMFBvc3N1bXVzL0RvY3VtZW50b3MvUHJveWVjdG9zL1ByYWN0aWNhcy9sdmx1cC12YWxpZGF0ZWl0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgdml0ZVRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ3ZhbGlkYXRlaXQnXHJcbiAgICB9LFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgdGFyZ2V0OiAnZXM2JyxcclxuICAgIG1pbmlmeTogZmFsc2VcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcvc3JjJylcclxuICAgIH1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFtkdHMoeyBvdXREaXI6ICdkaXN0JywgZXhjbHVkZTogWycqKi8qLnRlc3QudHMnLCAndGVzdHMvJywgJ3ZpdGVzdC5jb25maWcuKiddIH0pLCB2aXRlVHNDb25maWdQYXRocygpXVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFkLE9BQU8sVUFBVTtBQUN0ZSxTQUFTLGdCQUFBQSxlQUFjLG1CQUFtQjs7O0FDRHVhLFNBQVMsZUFBZTtBQUN6ZSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyx1QkFBdUI7QUFIOUIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsUUFBUSxrQ0FBVyxNQUFNO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsUUFBUSxTQUFTLENBQUMsZ0JBQWdCLFVBQVUsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0FBQ2hILENBQUM7OztBRHJCRCxJQUFNQyxvQ0FBbUM7QUFLekMsSUFBTyx3QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBQyxjQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUE7QUFBQSxNQUVaLE9BQU87QUFBQSxRQUNMLFFBQVEsS0FBSyxRQUFRQyxtQ0FBVyxNQUFNO0FBQUEsTUFDeEM7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFlBQVk7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLFdBQVc7QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUNWLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgImRlZmluZUNvbmZpZyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K