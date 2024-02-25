<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">
      <font-awesome-icon :icon="['fab', 'x-twitter']" id="x-home-icon" />
    </RouterLink>
    <div class="navigation">
      <NavigationComp route="home">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'home-user']"
            class="nav-icon"
            v-if="$route.name === 'home'"
          />
          <font-awesome-icon :icon="['fas', 'home-user']" class="nav-icon" v-else />
        </template>
        <template #name> Startseite </template>
      </NavigationComp>
      <NavigationComp route="explore">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="nav-icon"
            v-if="$route.name === 'explore'"
          />
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="nav-icon" v-else />
        </template>
        <template #name> Entdecken </template>
      </NavigationComp>
      <NavigationComp route="notifications">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'bell']"
            class="nav-icon"
            v-if="$route.name === 'notifications'"
          />
          <font-awesome-icon :icon="['far', 'bell']" class="nav-icon" v-else />
        </template>
        <template #name> Mitteilungen </template>
      </NavigationComp>
      <NavigationComp route="messages">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'message']"
            class="nav-icon"
            v-if="$route.name === 'messages'"
          />
          <font-awesome-icon :icon="['far', 'message']" class="nav-icon" v-else />
        </template>
        <template #name> Nachrichten </template>
      </NavigationComp>
      <NavigationComp route="lists">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'list']"
            class="nav-icon"
            v-if="$route.name === 'lists'"
          />
          <font-awesome-icon :icon="['fas', 'list']" class="nav-icon" v-else />
        </template>
        <template #name> Listen </template>
      </NavigationComp>
      <NavigationComp route="bookmarks">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'bookmark']"
            class="nav-icon"
            v-if="$route.name === 'bookmarks'"
          />
          <font-awesome-icon :icon="['far', 'bookmark']" class="nav-icon" v-else />
        </template>
        <template #name> Lesezeichen </template>
      </NavigationComp>
      <NavigationComp route="communities">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'user-group']"
            class="nav-icon"
            v-if="$route.name === 'communities'"
          />
          <font-awesome-icon :icon="['fas', 'user-group']" class="nav-icon" v-else />
        </template>
        <template #name> Communities </template>
      </NavigationComp>
      <NavigationPremiumComp />
      <NavigationComp route="profile">
        <template #icon>
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="nav-icon"
            v-if="$route.name === 'profile'"
          />
          <font-awesome-icon :icon="['far', 'user']" class="nav-icon" v-else />
        </template>
        <template #name> Profil </template>
      </NavigationComp>
      <NavigationMoreComp />
      <AddTweetComp />
    </div>
  </nav>
</template>

<script setup>
import NavigationComp from '../components/NavigationComp.vue'
import NavigationPremiumComp from '@/components/NavigationPremiumComp.vue'
import NavigationMoreComp from '@/components/NavigationMoreComp.vue'
import AddTweetComp from '@/components/AddTweetComp.vue'
</script>

<style scoped>
* {
  color: #ffffff;
  text-decoration: none;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#x-home-icon {
  width: 50px;
  height: 30px;
  padding: 10px 0px 10px 0px;
}

.nav-icon {
  width: 26px;
  height: 26px;
}

#x-home-icon:hover {
  background-color: #181818;
  border-radius: 50%;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
