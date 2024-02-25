<template>
  <div class="content">
    <span class="header">Premium abonnieren</span>
    <span class="text">
      Hol dir ein Abonnement, wenn du an neuen Funktionen interessiert bist und, falls du dafür in
      Frage kommst, einen Anteil der Werbeeinnahmen erhalten möchtest.
    </span>
    <button class="abo" @click="openModal">Abbonnieren</button>
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
  background-color: #16181c;
  gap: 10px;
  border-radius: 16px;
  padding: 12px 16px 12px 16px;
}

.header {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

.text {
  font-size: 15px;
  color: #ffffff;
}

.abo {
  max-width: fit-content;
  padding: 10px 20px 10px 20px;
  border-radius: 30px;
  color: #ffffff;
  background-color: #1da1f2;
  border: none;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.abo:hover {
  background-color: #1a8cd8;
}
</style>
