import { App } from 'vue'
import '../scss/index.scss'
import Foo from '@gaofeng/foo/index'
import GDrawer from '@gaofeng/g-drawer'

const components = [
    Foo,
    GDrawer
]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}


export default install