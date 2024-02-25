<template>
  <dialog ref="dialog">
    <button @click="closeModal" class="btn-close" title="Schließen">
      <font-awesome-icon :icon="['fas', 'x']" class="btn-icon" />
    </button>
    <div class="content">
      <span>Wer bist du?</span>
      <span>Wähle das richtige Abonnement für dich:</span>
      <div class="radio-group">
        <div class="r-pers">
          <input type="radio" id="pers" name="abo" value="pers" checked />
          <label for="pers" class="pers">
            <span>Premium</span>
            <span>Ich bin eine Person</span>
            <span>Für Personen und Gestalter*innen</span>
          </label>
        </div>
        <div class="r-org">
          <input type="radio" id="org" name="abo" value="org" />
          <label for="org" class="org">
            <span>Verifizierte Organisation</span>
            <span>Ich bin eine Organisation</span>
            <span>Für Unternehmen, Behörden und gemeinnützige Organisationen</span>
          </label>
        </div>
      </div>
      <button class="abo">Abonnieren</button>
      <div class="more-info">
        <span>Merh erfahren über </span>
        <a>Premium </a>
        <span>und </span>
        <a>Verifizierte Organisationen</a>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(null)

const closeModal = () => {
  dialog.value.close()
}
</script>

<style scoped>
dialog {
  width: 600px;
  height: 600px;
  background-color: #000000;
  border-radius: 16px;
  border-color: #000000;
}

dialog::backdrop {
  background-color: #242d34a8;
}

.btn-close {
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
  padding: 48px 72px 72px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

span {
  color: #ffffff;
}

.content > span:first-child {
  font-size: 31px;
  font-weight: 800;
}

.content > span:nth-child(2) {
  font-size: 15px;
}

.abo {
  width: 100%;
  padding: 16px 32px 16px 32px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  color: #000000;
}

.abo:hover {
  background-color: #d7dbdc;
  border-radius: 30px;
  border: none;
}

.more-info {
  font-size: 15px;
}

a {
  color: #1da1f2;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.radio-group {
  display: flex;
  gap: 20px;
}

input[type='radio'] {
  display: none;
}

label {
  color: #71767b;
  font-size: 15px;
  background-color: #0f1419;
  height: 148px;
  width: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 15px;
  box-shadow:
    rgba(255, 255, 255, 0.2) 0px 0px 15px,
    rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;
}

#pers:checked:checked ~ .pers,
#org:checked:checked ~ .org {
  border: 2px solid #1da1f2;
  background-color: #16181c;
}

label span:nth-child(2n + 1) {
  font-size: 14px;
  color: #71767b;
}

label span:nth-child(2n + 2) {
  font-size: 17px;
  color: #ffffff;
  font-weight: 700;
}
</style>
