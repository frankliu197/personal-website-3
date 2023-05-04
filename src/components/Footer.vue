<template lang="pug">
.footer
  v-footer(v-if="route.name === 'Home'" padless)
    v-container(fluid)
      .horizontal-aligner
        v-btn(x-large @click="toggleContact") {{ t("contact-me") }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import eventBus from "@/services/event-bus"
import { useI18n } from 'vue-i18n'

const { t } = useI18n() 
const route = useRoute()
const toggleContact = () => {
  eventBus.emit('toggleContact');
}
</script> 


<style lang="scss">
.v-card {
  width: 100%;
  text-align: center;
}
.footer{
  .theme--dark{
    .horizontal-aligner {
      .v-btn{
        background-color: rgba(89, 165, 218);
      }
    }
  }
}
</style>

<i18n>
{
  "en": {
    "contact-me": "Contact Me"
  },
  "es" : {
    "contact-me": "Contáctame"
  },
  "ja" : {
    "contact-me": "連絡"
  },
  "zh" : {
    "contact-me": "联系我"
  }
}
</i18n>