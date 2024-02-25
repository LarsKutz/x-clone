<template>
  <div class="content">
    <span>Highlight in deinem Profil</span>
    <span
      >Wenn du Beiträge als Highlights in deinem Profil anzeigen möchtest, musst du Premium
      abonniert haben.</span
    >
    <button @click="openModal">Premium abonnieren</button>
    <PremiumModalComp ref="modalRef" />
  </div>
</template>

<script setup>
import PremiumModalComp from '@/components/PremiumModalComp.vue'
import { ref } from 'vue'

const modalRef = ref(null)

const openModal = () => {
  modalRef.value.$refs.dialog.showModal()
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 32px 99px 32px 99px;
  padding: 0px 32px 0px 32px;
}

.content span:first-child {
  font-size: 31px;
  font-weight: 800;
  color: #ffffff;
}

.content span:nth-child(2) {
  font-size: 15px;
  color: #71767b;
}

button {
  font-size: 15px;
  font-weight: 700;
  color: black;
  padding: 15px 20px 15px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
}

button:hover {
  background-color: #d7dbdc;
}
</style>
