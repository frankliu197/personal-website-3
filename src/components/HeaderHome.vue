<template lang="pug">
.header-home.header(ref='container' @resize='onResize')
  v-app-bar(:height='HEADER_HEIGHT' fixed='fixed' @scroll='onScroll' :class='navBarClass' :elevation='scrollTop == 0 ? 0 : 12')
    v-btn(text='text' @click='scrollToTop')
      v-app-bar-title Frank Liu
    v-toolbar-items
      //template(v-if='!collapseNavBar')
      template(v-for='item in menuItems')
        v-btn(text='text' :href="'#' + item.title.toLowerCase()" :class='navBtnClass(item)') {{ $t(item.title) }}
      v-btn(text='text' @click="eventBus.emit('toggleContact')") {{ $t('contact') }}
    v-spacer
    v-toolbar-items
      DarkThemeToggler
      LocaleSelector
      //template(v-if='collapseNavBar')
        v-divider(vertical='vertical')
        v-app-bar-nav-icon(@click='showNavDrawer = true')
  //for later
    v-navigation-drawer(app='app' :temporary='true' :right='true' v-model='showNavDrawer' v-bind='navDrawDimensions' @resize='() => {showNavDrawer = collapseNavBar && showNavDrawer}')
      v-list
        v-list-item
          v-list-item-title.text-h6 {{ $t('Menu') }}
      v-divider
      v-list
        template(v-for='item in menuItems')
          v-list-item
            v-btn(text='text' :href="'#' + item.title.toLowerCase()" :class='navBtnClass(item)') {{ $t(item.title) }}
        v-list-item
          v-btn(text='text' @click="emitter.emit('toggleContact')") {{ $t('Contact') }}
</template>


<script lang="ts" setup>
const MIN_NAVDRAW_WIDTH = 300
const COLLAPSE_NAV_BAR_WIDTH = 800
const HEADER_HEIGHT = 56

import { defineProps, onMounted, ref, type Ref } from 'vue'
import type { PropType } from 'vue'
import eventBus from '@/services/event-bus'
import DarkThemeToggler from '@/components/DarkThemeToggler.vue'
import LocaleSelector from "@/components/LocaleSelector.vue"

export interface MenuItem {
  title: string;
  height: number;
  top: number;
}

const props = defineProps({
  menuItems: {
    type: Array as PropType<MenuItem[]>,
    required: true
  }
})

const width = ref(0)
const showNavDrawer = ref(false)
const scrollTop = ref(0)
const container: Ref<HTMLDivElement | null> = ref(null)

function scrollToTop() {
  debugger
  window.scrollTo(0, 0);
}

function onScroll() {
  scrollTop.value = document.documentElement.scrollTop;
  debugger
}

function onResize() {
  width.value = container.value!.clientWidth;
  debugger
}

function navBtnClass(item: any): string {
  if (
    scrollTop.value >= item.top - HEADER_HEIGHT &&
    scrollTop.value < item.top + item.height - HEADER_HEIGHT
  ) {
    return "active";
  }
  return "";
}

function navBarClass(): string {
  if (scrollTop.value < props.menuItems[0].top - HEADER_HEIGHT) {
    return "transparent";
  } else {
    return "";
  }
}

const navDrawDimensions = () => {
  return {
    width: width.value / 3 > MIN_NAVDRAW_WIDTH ? width.value : MIN_NAVDRAW_WIDTH
  }
}

const collapseNavBar = () => {
  return width.value < COLLAPSE_NAV_BAR_WIDTH
}

onMounted(() => {
  onScroll()
})

</script>

<style lang="scss">
.header-home {
  .active::before {
    opacity: 0.24 !important;
  }

  .v-list-item .v-btn {
    width: 100%;
  }

  .v-list-item .v-list-item__title {
    text-align: center;
  }

  .transparent {
    color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }

  .v-toolbar__items {
    align-items: center;
  }
}

.theme--light {
  .header-home {
    
  }    
}
</style>

<i18n>
{
  "en": {
    "about": "About",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "menu": "Menu"
  },
  "es" : {
    "about": "Detalles",
    "portfolio": "Portafolio",
    "contact": "Contactar",
    "menu": "Menú"
  },
  "ja" : {
    "about": "詳細",
    "portfolio": "ポートフォリオ",
    "contact": "連絡",
    "menu": "メニュー"
  },
  "zh" : {
    "about": "详细",
    "portfolio": "作品集",
    "contact": "联系",
    "menu": "菜单"
  }
}
</i18n>