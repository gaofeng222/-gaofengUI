/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 09:56:42
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 10:00:39
 * @FilePath: \@gaofengUI\example\src\env.d.ts
 * @Description: 
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_API: string;
    readonly VITE_APP_NAME: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}