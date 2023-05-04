import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      aliases,
    },
    sets: {
      mdi,
    },
  },
  components,
  directives,
})