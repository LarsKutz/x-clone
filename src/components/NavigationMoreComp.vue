<template>
  <div class="nav-premium">
    <font-awesome-icon :icon="['fas', 'circle-info']" class="nav-icon" />
    <button @click="openDialog" class="btn-premium">More</button>
    <MoreDialogComp ref="modalRef" />
  </div>
</template>

<script setup>
import MoreDialogComp from '@/components/MoreDialogComp.vue'
import { ref } from 'vue'

const modalRef = ref(null)

const openDialog = () => {
  modalRef.value.$refs.dialog.show()
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
