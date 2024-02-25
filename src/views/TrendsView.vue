<template>
  <aside>
    <SearchBarComp class="search-bar" />
    <PremiumComp class="premium" />
    <FollowMoreComp />
    <TrendsComp />
  </aside>
</template>

<script setup>
import SearchBarComp from '@/components/SearchBarComp.vue'
import PremiumComp from '@/components/PremiumComp.vue'
import FollowMoreComp from '@/components/FollowMoreComp.vue'
import TrendsComp from '@/components/TrendsComp.vue'
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #000000;
}

.search-bar {
  position: fixed;
}

.premium {
  margin-top: 63px;
}
</style>
