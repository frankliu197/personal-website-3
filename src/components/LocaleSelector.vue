<template lang="pug">
v-menu.locale-selector(open-on-hover bottom offset-y)
  template(v-slot:activator='{ props }')
    v-btn(text v-bind='props') 
      country-flag.flag-margin(:country="localeList[$i18n.locale]")
      .x-spacer
      span.locale-font {{ $i18n.locale }}
  v-btn-toggle(v-for='(lang, index) in Object.keys(localeList)' :key='index' v-model="$i18n.locale" mandatory)
    v-btn(:value='lang')
      country-flag.flag-margin(:country="localeList[lang]") 
      .x-spacer
      span.locale-font {{ lang.toUpperCase() }}
</template>
<script setup lang="ts">
import localeList from "@/assets/json/lang.json" 
</script>

<style scoped>
.locale-font {
  font-size: 0.875rem;
  font-weight: 500;
}

.flag-margin {
  margin-bottom: 1px!important;
}
</style>

