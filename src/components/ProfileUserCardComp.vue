<template>
  <div class="content">
    <div class="nav-bar">
      <RouterLink :to="{ name: 'home' }" class="rl-nav-icon">
        <font-awesome-icon :icon="['fas', 'arrow-left']" class="nav-icon" />
      </RouterLink>
      <div class="nav-info">
        <span>{{ user.name }}</span>
        <span>23 Posts</span>
      </div>
    </div>
    <div class="profile-card">
      <img :src="user.bgImage" class="bg-image" @error="handleImageError" />
      <div class="user">
        <div class="image-edit">
          <img :src="user.profileImage" class="p-image" @error="handleImageError" />
          <ProfileUserEditModalComp label="Profil bearbeiten" class="edit-profile" />
        </div>
        <div class="user-data">
          <div class="names">
            <span>{{ user.name }}</span>
            <span>{{ user.username }}</span>
          </div>
          <span v-if="user.bio" class="bio">{{ user.bio }}</span>
          <div class="adv-data">
            <div v-if="user.website" class="link">
              <font-awesome-icon :icon="['fas', 'link']" class="icon" />
              <a :href="user.website" target="_blank">{{ user.website }}</a>
            </div>
            <div v-if="user.createdAt" class="date">
              <font-awesome-icon :icon="['fas', 'calendar-day']" class="icon" />
              <span>Seit {{ formatDate(user.createdAt) }} bei Twitter</span>
            </div>
            <div v-if="user.location" class="location">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
              <span>{{ user.location }}</span>
            </div>
          </div>
          <div class="stats-data-follows">
            <span>{{ user.following }}</span>
            <span> Folge ich</span>
            <span>{{ user.followers }}</span>
            <span> Follower</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import user from '../assets/js/user.js'
import ProfileUserEditModalComp from '@/components/ProfileUserEditModalComp.vue'

function handleImageError(event) {
  if (event.target.classList.value === 'bg-image') {
    console.log('bg-image')
    event.target.src = '/images/default-background.png'
  } else {
    event.target.src = '/images/default-profile.png'
  }
}

function formatDate(date) {
  return new Date(date).toLocaleString('de-DE', { month: 'long', year: 'numeric' })
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.nav-bar {
  width: 598px;
  height: 53px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 0px 16px 0px 16px;
  align-items: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  position: fixed;
}

.rl-nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.nav-icon {
  color: #ffffff;
  font-size: 15px;
}

.rl-nav-icon:hover {
  background-color: #46464679;
  border-radius: 50%;
  transition: 0.3s;
}

.nav-info {
  display: flex;
  flex-direction: column;
}

.nav-info span:first-child {
  font-size: 18px;
  font-weight: 700;
}

.nav-info span:last-child {
  font-size: 13px;
  color: #71767b;
}

.profile-card {
  margin-top: 53px;
  display: flex;
  flex-direction: column;
}

.bg-image {
  width: 100%;
  height: 200px;
}

.user {
  padding: 0px 20px 0px 20px;
}

.image-edit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.p-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: -75px;
  border: 5px solid #000000;
}

.edit-profile {
  margin-top: 30px;
}

.user-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.names {
  display: flex;
  flex-direction: column;
}

.names span:first-child {
  font-size: 20px;
  font-weight: 800;
}

.names span:last-child {
  font-size: 15px;
  color: #71767b;
}

.bio {
  font-size: 15px;
}

.adv-data {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 0px;
}

.link a {
  font-size: 15px;
  color: #1da1f2;
  text-decoration: none;
}

.adv-data .link a:hover {
  text-decoration: underline;
}

.adv-data .date span,
.adv-data .location span {
  font-size: 15px;
  color: #71767b;
}

.icon {
  color: #71767b;
  margin-right: 5px;
}

.stats-data-follows > span:nth-child(2n + 2) {
  color: #6c7176;
  margin-right: 20px;
}

.stats-data-follows {
  font-size: 14px;
}
</style>
