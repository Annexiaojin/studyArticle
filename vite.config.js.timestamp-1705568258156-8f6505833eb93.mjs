// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/workSpace/WEB/stydy-article/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/workSpace/WEB/stydy-article/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/workSpace/WEB/stydy-article/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  // 设置解决跨域问题
  server: {
    proxy: {
      "/api": {
        //获取路径中包含了/api的请求
        changeOrigin: true,
        //修改源
        target: "http://localhost:8089",
        //后台服务所在的源
        rewrite: (path) => path.replace(/^\/api/, "")
        ///api替换为''
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcV0VCXFxcXHN0eWR5LWFydGljbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtTcGFjZVxcXFxXRUJcXFxcc3R5ZHktYXJ0aWNsZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya1NwYWNlL1dFQi9zdHlkeS1hcnRpY2xlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICAvLyBcdThCQkVcdTdGNkVcdTg5RTNcdTUxQjNcdThERThcdTU3REZcdTk1RUVcdTk4OThcbiAgc2VydmVyOntcbiAgICBwcm94eTp7XG4gICAgICAnL2FwaSc6ey8vXHU4M0I3XHU1M0Q2XHU4REVGXHU1Rjg0XHU0RTJEXHU1MzA1XHU1NDJCXHU0RTg2L2FwaVx1NzY4NFx1OEJGN1x1NkM0MlxuICAgICAgICBjaGFuZ2VPcmlnaW46dHJ1ZSwvL1x1NEZFRVx1NjUzOVx1NkU5MFxuICAgICAgICB0YXJnZXQ6J2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OScsLy9cdTU0MEVcdTUzRjBcdTY3MERcdTUyQTFcdTYyNDBcdTU3MjhcdTc2ODRcdTZFOTBcbiAgICAgICAgcmV3cml0ZToocGF0aCk9PnBhdGgucmVwbGFjZSgvXlxcL2FwaS8sJycpLy8vYXBpXHU2NkZGXHU2MzYyXHU0RTNBJydcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsZUFBZSxXQUFXO0FBRXZULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUgySixJQUFNLDJDQUEyQztBQUs1TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsRUFDTjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsUUFBTztBQUFBLElBQ0wsT0FBTTtBQUFBLE1BQ0osUUFBTztBQUFBO0FBQUEsUUFDTCxjQUFhO0FBQUE7QUFBQSxRQUNiLFFBQU87QUFBQTtBQUFBLFFBQ1AsU0FBUSxDQUFDLFNBQU8sS0FBSyxRQUFRLFVBQVMsRUFBRTtBQUFBO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
