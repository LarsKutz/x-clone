<template>
  <div class="search" ref="div">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input type="text" placeholder="Suchen" ref="input" @focus="handleFocus" @blur="handleBlur" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref(null)
const div = ref(null)

const handleFocus = () => {
  div.value.classList.add('focus', 'focus-border')
  input.value.classList.add('focus')
}

const handleBlur = () => {
  div.value.classList.remove('focus', 'focus-border')
  input.value.classList.remove('focus')
}
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 12px 20px 12px 20px;
  border-radius: 50px;
  color: #ffffff;
}

.search,
input {
  background-color: #202327;
}

input {
  width: 274px;
  font-size: 15px;
  border: none;
}

input:focus {
  outline: none;
}

input:focus,
input:valid {
  color: #ffffff;
}

.focus {
  background-color: #000000;
}

.focus-border {
  border: 1px solid #1da1f2;
}
</style>
