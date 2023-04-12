/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 11:20:33
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 11:20:43
 * @FilePath: \@gaofengUI\docs\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        VueJsx()
    ],
    server: {
        port: 3100
    }
})