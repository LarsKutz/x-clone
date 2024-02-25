<template>
  <dialog ref="dialog" @click="handleDialogClick" class="dialog">
    <button @click="closeDialog" class="btn-close" title="Schließen">
      <font-awesome-icon :icon="['fas', 'x']" class="btn-icon" />
    </button>
    <div class="content">
      <div class="a-link-div">
        <a class="a-link">
          <font-awesome-icon :icon="['fas', 'money-bill']" class="icon" />
          <span>Monetarisierung</span>
        </a>
        <a class="a-link">
          <font-awesome-icon :icon="['fas', 'unlock']" class="icon" />
          <span>Pro</span>
        </a>
        <a class="a-link">
          <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="icon" />
          <span>Ads</span>
        </a>
        <a class="a-link">
          <font-awesome-icon :icon="['fas', 'gear']" class="icon" />
          <span>Einstellung und Datenschutz</span>
        </a>
      </div>
      <div class="b-link-div">
        <a class="b-link">
          <span>MStV Transparenzangaben</span>
        </a>
        <a class="b-link">
          <span>Impressum</span>
        </a>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(null)

const closeDialog = () => {
  dialog.value.close()
}
</script>

<style scoped>
dialog {
  width: 380px;
  color: #ffffff;
  height: fit-content;
  background-color: #000000;
  border-radius: 16px;
  border: none;
  padding: 0px;
  box-shadow:
    rgba(255, 255, 255, 0.2) 0px 0px 15px,
    rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;
}

.btn-close {
  margin: 10px 0px 0px 10px;
  width: 34px;
  height: 34px;
  background-color: #000000;
  border: none;
  cursor: pointer;
}

.btn-close:hover {
  background-color: #181818;
  border-radius: 50%;
}

.btn-icon {
  width: 12px;
  height: 12px;
  color: #ffffff;
}

.content {
  display: flex;
  flex-direction: column;
}

.icon {
  width: 22px;
  height: 22px;
  color: #ffffff;
}

.a-link-div {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #181818;
}

.a-link,
.b-link {
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  padding: 16px;
}

.a-link {
  gap: 20px;
  font-size: 20px;
  font-weight: 700;
}

.a-link:hover,
.b-link:hover {
  background-color: #181818;
}

.b-link:last-child {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.b-link {
  font-size: 15px;
  font-weight: 700;
}

.b-link-div {
  display: flex;
  flex-direction: column;
}
</style>
