<template lang="pug">
.home-view(v-resize="onResize")
  //HeaderHome(:menuItems="menuItems")
  p test test
  Footer
  Footer(#about)
  Footer(#portfolio @onTabChange="onResize")
  Footer
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue'
/*import About from '@/components/About.vue'
import Carousel from '@/components/Carousel.vue'
import Portfolio from "@/components/Portfolio.vue"
import HeaderHome from "@/components/HeaderHome.vue"*/
import Footer from "@/components/Footer.vue"

const MENU_ITEMS = ["about", "portfolio"]

interface MenuItem {
  title: string;
  height: number;
  top: number;
}

const menuItems: Ref<MenuItem[]> = ref(MENU_ITEMS.map((title) => ({ title, height: 0, top: 0 })))

const onResize = () => {
  for (const [k, v] of MENU_ITEMS.entries()) {
    menuItems.value[k].height = document.getElementById(v)?.offsetHeight ?? 0
    menuItems.value[k].top = document.getElementById(v)?.offsetTop ?? 0
  }
}

onMounted(() => {
  onResize()
})
</script>
