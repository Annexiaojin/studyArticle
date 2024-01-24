import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 设置解决跨域问题
  server:{
    proxy:{
      '/api':{//获取路径中包含了/api的请求
        changeOrigin:true,//修改源
        target:'http://localhost:8089',//后台服务所在的源
        rewrite:(path)=>path.replace(/^\/api/,'')///api替换为''
      }
    }
  }
})
