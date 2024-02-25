<template>
  <div class="content">
    <img
      v-for="img in allImages"
      :key="img"
      :src="img"
      alt="tweet image"
      width="100%"
      @click="extendImg(img)"
    />
    <div v-if="isImageExtended" class="overlay" @click="closeExtendedImg">
      <img :src="extendedImgSrc" alt="extended tweet image" class="extended-img" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import user from '../assets/js/user.js'

const allImages = ref([])
const isImageExtended = ref(false)
const extendedImgSrc = ref('')

user.value.tweets.forEach((tweet) => {
  if (tweet.img) {
    allImages.value.push(tweet.img)
  }
})

const extendImg = (imgSrc) => {
  isImageExtended.value = true
  extendedImgSrc.value = imgSrc
}

const closeExtendedImg = () => {
  isImageExtended.value = false
}
</script>

<style scoped>
.content {
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

img {
  width: 194px;
  height: 194px;
  object-fit: cover;
  cursor: zoom-in;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.extended-img {
  width: 80%; 
  height: 80%; 
  cursor: zoom-out;
}
</style>
