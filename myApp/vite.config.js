import { defineConfig } from 'vite'
import axios from 'axios'
import * as cheerio from 'cheerio'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: true,
      credentials: true, 
      methods: "get"
    }, 
    proxy: {
      "/api": {
        target: "https://obj-zk3fxzdevq-uc.a.run.app", 
        changeOrigin: true, 
        configure: (proxy, options) => {
          proxy.on("error", (err, req, res) => {
            res.writeHead(404, {"content-type": "text/html"}); 
            return res.end("404, not found")
          })
        }
      }, 
    }
  }
})
