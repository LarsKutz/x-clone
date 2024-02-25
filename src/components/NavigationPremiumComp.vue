<template>
  <div class="nav-premium">
    <font-awesome-icon :icon="['fab', 'x-twitter']" class="nav-icon" />
    <button @click="openModal" class="btn-premium">Premium</button>
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
.nav-premium {
  height: 50px;
  max-width: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0px 30px 0px 11px;
  cursor: pointer;
}

.nav-premium:hover,
.nav-premium:hover > .btn-premium {
  background-color: #181818;
  border-radius: 30px;
}

.btn-premium {
  background-color: transparent;
  color: #ffffff;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.nav-icon {
  width: 26px;
  height: 26px;
}
</style>
