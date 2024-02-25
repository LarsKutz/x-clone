<template>
  <RouterLink :to="{ name: route }">
    <i>
      <slot name="icon"></slot>
    </i>
    <span :style="{ 'font-weight': boldName }">
      <slot name="name"></slot>
    </span>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  route: {
    type: String,
    required: true
  }
})

const currentRoute = useRoute()

const boldName = computed(() => {
  return props.route === currentRoute.name ? '700' : 'normal'
})
</script>

<style scoped>
span {
  font-size: 20px;
  padding-bottom: 2px;
}

a {
  height: 50px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 30px 0px 11px;
}

a:hover {
  background-color: #181818;
  border-radius: 30px;
}
</style>
