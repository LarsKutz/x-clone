<template>
  <div class="content">
    <div class="header">Trends: Deutschland</div>
    <a
      v-for="(trend, index) in displayedTrends"
      :key="index"
      href="#"
      :class="{ item: true, 'last-item': index === displayedTrends.length - 1 }"
      @mouseover="addBorderRadius"
      @mouseleave="removeBorderRadius"
    >
      <span>{{ index + 1 }} · {{ trend.type }} · Trends</span>
      <span>{{ trend.name }}</span>
      <span>{{ formatPosts(trend.posts) }} posts</span>
    </a>
    <button v-if="displayedTrends.length < maxTrends" @click="showMore" class="show-more">
      Mehr Anzeigen
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import trends from '../assets/js/trends.js'

const sortedTrends = ref([])
sortedTrends.value = trends.value.slice().sort((a, b) => b.posts - a.posts)

const minTrends = 5
const maxTrends = 10
const displayedTrends = ref(sortedTrends.value.slice(0, minTrends))

const showMore = () => {
  displayedTrends.value = sortedTrends.value.slice(0, maxTrends)
}

const addBorderRadius = (event) => {
  event.target.classList.add('hovered')
}

const removeBorderRadius = (event) => {
  event.target.classList.remove('hovered')
}

const formatPosts = (posts) => {
  if (posts > 1000000) {
    return (posts / 1000000).toFixed(1) + 'M'
  } else if (posts > 1000) {
    return (posts / 1000).toFixed(1) + 'K'
  } else {
    return posts
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #16181c;
  border-radius: 16px;
  gap: 4px;
}
.header {
  font-size: 20px;
  font-weight: 800;
}

.header,
.item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 16px 12px 16px;
  text-decoration: none;
}

.item span:nth-child(2n + 1) {
  font-size: 13px;
  color: #71767b;
}

.item span:nth-child(2n + 2) {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
}

.last-item.hovered {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.item:hover,
.show-more:hover {
  background-color: #202327;
}

.show-more {
  background-color: #16181c;
  color: #1da1f2;
  text-align: left;
  font-size: 15px;
  cursor: pointer;
  padding: 16px;
  border: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
