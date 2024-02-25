<template>
  <div class="card flex justify-content-center">
    <Button :label="props.label" @click="visible = true" class="btn-open" />
    <Dialog
      v-model:visible="visible"
      modal
      :header="props.label"
      :style="{ width: '600px', height: '650px' }"
    >
      <form id="form" class="content" @submit.prevent="submitForm">
        <FloatLabel>
          <InputText id="username" v-model="user.name" placeholder=" " />
          <label for="username">Name</label>
        </FloatLabel>
        <FloatLabel>
          <Textarea id="biography" v-model="user.bio" placeholder=" " />
          <label for="biography">Biografie</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="location" v-model="user.location" placeholder=" " />
          <label for="location">Standort</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="website" v-model="user.website" placeholder=" " />
          <label for="website">Webseite</label>
        </FloatLabel>
      </form>
      <Button form="form" type="submit" label="Speichern" @click="visible = false" />
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import user from '../assets/js/user.js'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FloatLabel from 'primevue/floatlabel'

const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const visible = ref(false)
</script>

<style scoped>
.btn-open {
  background-color: transparent;
  color: #ffffff;
  border-radius: 20px;
  margin-top: -100px;
}

Button[type='submit'] {
  margin-top: 2rem;
  width: 100%;
  border: none;
}

Button[type='submit']:hover {
  background-color: #d7dbdc;
}

input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  font-size: 13px;
  top: 18px;
}

label {
  color: #71767b;
  position: absolute;
  top: 20px;
  left: 12px;
}

Floatlabel {
  position: relative;
}

input {
  height: 70px;
}

input,
textarea {
  font-size: 16px;
  width: 100%;
  padding: 25px 8px 8px 12px;
}

textarea {
  padding-top: 35px;
  resize: none;
  height: 150px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
