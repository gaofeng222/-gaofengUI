/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 11:10:46
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 11:30:50
 * @FilePath: \@gaofengUI\docs\.vitepress\config.ts
 * @Description: 
 */
import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'

const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/foo' }
]

const sidebar: DefaultTheme.Sidebar = {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '组件库介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/quickstart' },
            ],

        },
        {
            text: '组件', link: '/components/foo'
        }
    ],
    '/components': [{
        items: [
            ...components
        ]
    }]
}

export default defineConfig({
    title: '@gaofeng-ui',
    description: 'GAOFENG Vue3企业级中后台组件库',
    lang: 'cn-ZH',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        siteTitle: '@gaofeng-ui',
        outline: 3,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        nav,
        sidebar
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
        },
        lineNumbers: true,
        config(md) {
            md.use(componentPreview)
            md.use(containerPreview)
        }
    }
})

