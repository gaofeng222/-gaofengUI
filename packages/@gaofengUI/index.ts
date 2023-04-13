import { App } from 'vue'
import '../scss/index.scss'
import { GTest, GDrawer } from '@gaofeng-ui/componets'

const components = [
    GTest,
    GDrawer
]

console.log(GTest, 'GTest')

const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}


export default install