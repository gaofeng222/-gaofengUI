/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 09:50:41
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 10:06:46
 * @FilePath: \@gaofengUI\example\src\main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GaofengUI from '@gaofeng-ui/gaofeng-ui'

const env = import.meta.env
console.log(env)
const app = createApp(App)

app.use(GaofengUI)
    .mount('#app')
