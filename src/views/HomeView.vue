<template lang="pug">
.home-view(v-resize="onResize")
  HeaderHome(:menuItems="menuItems")
  Footer(:ref="(el) => { componentRefs.set('about', el) }")
  Footer(:ref="(el) => { componentRefs.set('portfolio', el) }")
  //About(ref="about")
  //Portfolio(ref="portfolio" @onTabChange="onResize")
  Footer
</template>


<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import HeaderHome from '@/components/HeaderHome.vue'
//import About from '@/components/About.vue'
//import Portfolio from "@/components/Portfolio.vue"
import Footer from "@/components/Footer.vue"
import type { MenuItem } from '@/components/HeaderHome.vue'

const MENU_ITEMS = ["about", "portfolio"]

const menuItems: Ref<MenuItem[]> = ref(MENU_ITEMS.map((title) => ({ title, height: 0, top: 0 })))

// does this even need to be reactive?
const componentRefs: Ref<Map<string, any>> = ref(new Map())

const onResize = () => {
  for (const [k, v] of MENU_ITEMS.entries()) {
    menuItems.value[k].height = componentRefs.value.get(v)?.$el.offsetHeight ?? 0
    menuItems.value[k].top = componentRefs.value.get(v)?.$el.offsetTop ?? 0
  }
}

onMounted(() => {
  onResize()
})
</script>
