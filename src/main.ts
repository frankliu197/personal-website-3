import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import '@/assets/css/main.scss'
import { createI18n } from 'vue-i18n'
import CountryFlag from 'vue-country-flag-next'

const locale = {
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || 'en',
}

const i18n = createI18n({
  ...locale,
  legacy: false,
})

const app = createApp(App)
app.use(CountryFlag)
app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount('#app')
