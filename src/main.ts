import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/main.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'

const vuetify = createVuetify({
  components,
  directives,
})

const locale = {
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || 'en',
}

const i18n = createI18n({
  ...locale,
  legacy: false,
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount('#app')
