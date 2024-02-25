<template>
  <NavigationView />
  <RouterView />
  <TrendsView />
</template>

<script setup>
import NavigationView from './views/NavigationView.vue'
import TrendsView from './views/TrendsView.vue'
</script>

<style scoped>
nav {
  position: fixed;
}

main {
  margin-left: 275px;
  width: 600px;
}

main {
  border-left: 1px solid #353535;
  border-right: 1px solid #353535;
}

aside {
  margin-left: 620px;
  width: 350px;
}
</style>
