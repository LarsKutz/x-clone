<template>
  <dialog ref="dialog">
    <button @click="closeModal" class="btn-close" title="Schließen">
      <font-awesome-icon :icon="['fas', 'x']" class="btn-icon" />
    </button>
    <div class="content">
      <div class="text">
        <img :src="user.profileImage" />
        <textarea
          placeholder="Was gibt´s Neues?!"
          rows="5"
          cols="33"
          v-model="newTweetContent"
        ></textarea>
      </div>
      <button class="btn-post" @click="postNewTweet" :disabled="!newTweetContent.trim()">
        Posten
      </button>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'
import user from '../assets/js/user.js'

const dialog = ref(null)
const newTweetContent = ref('')

const closeModal = () => {
  dialog.value.close()
}

const postNewTweet = () => {
  if (newTweetContent.value === '') {
    dialog.value.close()
    return
  }
  const tweets = user.value.tweets
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`

  const newTweet = {
    id: tweets.length + 1,
    date: formattedDate,
    content: newTweetContent.value,
    likes: 0,
    retweets: 0,
    comments: 0,
    views: 0
  }
  tweets.push(newTweet)
  user.value = { ...user.value, tweets: tweets }
  newTweetContent.value = ''
  console.log(user.value.tweets)
  dialog.value.close()
}
</script>

<style scoped>
dialog {
  width: 600px;
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

.btn-post {
  padding: 10px 20px 10px 20px;
  border-radius: 30px;
  color: #ffffff;
  background-color: #1da1f2;
  border: none;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}

.btn-post:not(:disabled):hover {
  background-color: #1a8cd8;
}

.btn-post:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.text {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border-bottom: 1px solid #1d1f23;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

textarea {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  font-family:
    TwitterChirp,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
  padding: 10px 20px 10px 20px;
  border: none;
  font-size: 20px;
  font-weight: 400;
  resize: none;
  margin-bottom: 10px;
}

textarea::placeholder {
  color: #71767b;
}

textarea:focus {
  outline: none;
}
</style>
