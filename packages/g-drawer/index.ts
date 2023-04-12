import { App } from 'vue'
import GDrawer from './g-drawer.vue'


GDrawer.install = (app: App) => {
    app.component(GDrawer.name, GDrawer)
}

export default GDrawer