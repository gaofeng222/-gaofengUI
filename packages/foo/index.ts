import { App } from 'vue'
import GTest from './g-test'


GTest.install = (app: App) => {
    app.component(GTest.name, GTest)
}

export default GTest