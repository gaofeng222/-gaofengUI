import type { App, Directive, Component } from 'vue'
import { SFCWithInstall } from './typescript'

type withType = Record<string, string>

export const withInstall = <T, E extends withType>(main: T, extra?: E) => {
    (main as SFCWithInstall<T>).install = (app: App): void => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            // @ts-ignore
            app.component((comp.name, comp))
        }
    }
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as any)[key] = comp
        }
    }

    return main as SFCWithInstall<T> & E
}

