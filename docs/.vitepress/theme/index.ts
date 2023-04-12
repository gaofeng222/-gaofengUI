/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 11:12:38
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 11:17:17
 * @FilePath: \@gaofengUI\docs\.vitepress\theme\index.ts
 * @Description: 
 */
import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import GaofengUI from '@gaofeng-ui/gaofeng-ui'

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        ctx.app.use(ElementPlus)
        ctx.app.use(GaofengUI)
        ctx.app.component('demo-preview', AntDesignContainer)

    }
}

