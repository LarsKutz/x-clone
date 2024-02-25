<template>
  <div class="content">
    <span class="header">Wem folgen?</span>
    <a
      v-for="(user, index) in displayedUsers"
      :key="index"
      href="#"
      :class="{ item: true, 'last-item': index === displayedUsers.length - 1 }"
      @mouseover="addBorderRadius"
      @mouseleave="removeBorderRadius"
    >
      <div class="user">
        <img :src="user.image" @error="showDefaultImg" v-if="user.image" />
        <img src="/images/default-profile.png" v-else />
        <div class="user-names">
          <span>{{ user.name }}</span>
          <span>{{ user.username }}</span>
        </div>
      </div>
      <a href="#" class="follow">Folgen</a>
    </a>
    <button v-if="displayedUsers.length < maxUsers" @click="showMore" class="show-more">
      Mehr Anzeigen
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import users from '../assets/js/users.js' 

const minUser = 3
const maxUsers = 10
const displayedUsers = ref(users.value.slice(0, minUser)) 

const showDefaultImg = (event) => {
  event.target.src = '/images/default-profile.png'
}

const showMore = () => {
  displayedUsers.value = users.value.slice(0, maxUsers)
}

const addBorderRadius = (event) => {
  event.target.classList.add('hovered')
}

const removeBorderRadius = (event) => {
  event.target.classList.remove('hovered')
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #16181c;
  border-radius: 16px;
}
.header {
  font-size: 20px;
  font-weight: 800;
}

.header,
.item {
  padding: 12px 16px 12px 16px;
}

.item {
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.last-item.hovered {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.item:hover,
.show-more:hover {
  background-color: #202327;
}

.user {
  display: flex;
  align-items: center;
  gap: 10px;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-names {
  display: flex;
  flex-direction: column;
}

.user-names span:nth-child(1) {
  font-size: 15px;
  font-weight: 700;
}

.user-names span:nth-child(2) {
  font-size: 15px;
  color: #71767b;
}

.follow {
  color: black;
  font-size: 14px;
  font-weight: 700;
  background-color: #ffffff;
  text-decoration: none;
  padding: 7px 16px 7px 16px;
  border-radius: 20px;
}

.follow:hover {
  background-color: #d7dbdc;
}

.show-more {
  background-color: #16181c;
  color: #1da1f2;
  text-align: left;
  font-size: 15px;
  cursor: pointer;
  padding: 16px;
  border: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
