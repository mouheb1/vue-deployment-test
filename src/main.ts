import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'

import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Galleria from 'primevue/galleria'
import Ripple from 'primevue/ripple'
import ToastService from 'primevue/toastservice'

import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import type { UserModule } from './types'

import 'uno.css'
import './styles/main.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
// import 'primevue/resources/primevue.min.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    ctx.app
      .use(PrimeVue)
      .use(ToastService)
      .component('Button', Button)
      .component('Menubar', Menubar)
      .component('Galleria', Galleria)
      .directive('ripple', Ripple)

    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
