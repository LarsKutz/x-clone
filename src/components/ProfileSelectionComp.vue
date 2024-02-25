<template>
  <div class="content">
    <RouterLink
      :to="{ name: 'profile' }"
      class="link"
      :class="{ 'link-active': isActive('profile') }"
      >Posts</RouterLink
    >
    <RouterLink
      :to="{ name: 'with_replies' }"
      class="link"
      :class="{ 'link-active': isActive('with_replies') }"
      >Antworten</RouterLink
    >
    <RouterLink
      :to="{ name: 'highlights' }"
      class="link"
      :class="{ 'link-active': isActive('highlights') }"
      >Highlights</RouterLink
    >
    <RouterLink :to="{ name: 'media' }" class="link" :class="{ 'link-active': isActive('media') }"
      >Medien</RouterLink
    >
    <RouterLink :to="{ name: 'likes' }" class="link" :class="{ 'link-active': isActive('likes') }"
      >Gefällt mir</RouterLink
    >
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

function isActive(routeName) {
  return currentRoute.name === routeName
}
</script>

<style scoped>
.content {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #353535;
}

.link {
  color: #6b7075;
  width: calc(100% / 5);
  text-align: center;
  padding: 20px;
  text-decoration: none;
}

.link:hover {
  background-color: #181818;
}

.link-active {
  color: #ffffff;
  font-weight: 500;
  border-bottom: 5px solid #1da1f2;
}
</style>
