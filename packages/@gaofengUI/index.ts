import { App } from 'vue'
import '../scss/index.scss'
import Foo from '@gaofeng/foo'

const components = [
    Foo
]

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}


export default install