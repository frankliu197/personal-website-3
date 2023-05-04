<template lang="pug">
v-checkbox.dark-theme-toggler.f-btn-icon-bold(v-model='$vuetify.theme.dark' :false-icon='mdiThemeLightDark' :true-icon='mdiThemeLightDark')
</template>

<script setup lang="ts">
import { mdiThemeLightDark } from '@mdi/js'
</script>

<style lang="scss">
.dark-theme-toggler {
  .v-input__control{
    height: 24px;
  }
  .v-input__control .v-input__slot {
    margin-bottom: 0px;
  }
}
</style>