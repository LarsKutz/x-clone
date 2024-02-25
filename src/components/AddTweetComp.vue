<template>
  <div class="content">
    <button class="btn" @click="openModal">Posten</button>
    <AddTweetModalComp ref="modalRef" />
  </div>
</template>

<script setup>
import AddTweetModalComp from '@/components/AddTweetModalComp.vue'
import { ref } from 'vue'

const modalRef = ref(null)

const openModal = () => {
  modalRef.value.$refs.dialog.showModal()
}
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 17px 20px 17px 20px;
  border-radius: 30px;
  color: #ffffff;
  background-color: #1da1f2;
  border: none;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}

.btn:hover {
  background-color: #1a8cd8;
}
</style>
