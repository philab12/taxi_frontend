<template>
  <main>
    <router-view v-slot="{Component, route}">
      <transition name="effect" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import jQuery from "jquery"

const $ = jQuery;
window.$ = $;

export default {
  components: { 
  }
}
</script>

<style>
@import "./style.css";
</style>
