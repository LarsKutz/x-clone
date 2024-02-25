<template>
  <TweetComp
    v-for="post in user.tweets.slice().reverse()"
    :key="post.id"
    :id="post.id"
    :img="user.profileImage"
    :name="user.name"
    :username="user.username"
    :date="post.date"
    :content="post.content"
    :img_tweet="post.img"
    :likes="post.likes"
    :retweets="post.retweets"
    :comments="post.comments"
    :views="post.views"
  />
</template>

<script setup>
import TweetComp from './TweetComp.vue'
import user from '../assets/js/user.js'
</script>

<style scoped></style>
