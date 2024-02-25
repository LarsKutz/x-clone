<template>
  <div class="tweet">
    <img :src="props.img" @error="handleImageError" />
    <div class="content">
      <div class="user-info">
        <span class="name" style="font-weight: bold">{{ props.name }}</span>
        <span class="username">{{ props.username }}</span>
        <span class="dot">·</span>
        <span class="date">{{ formatDate(props.date) }}</span>
      </div>
      <div class="tweet-content">
        <span v-html="taggedContent"></span>
        <img v-if="props.img_tweet" :src="props.img_tweet" />
      </div>
      <div class="tweet-actions">
        <div class="comment">
          <font-awesome-icon :icon="['far', 'comment']" class="icon" @click="addComment" />
          <span>{{ props.comments }}</span>
        </div>
        <div class="replies">
          <font-awesome-icon :icon="['fas', 'retweet']" class="icon" @click="addReply" />
          <span>{{ props.retweets }}</span>
        </div>
        <div class="likes">
          <font-awesome-icon :icon="['far', 'heart']" class="icon" @click="addLike" />
          <span>{{ props.likes }}</span>
        </div>
        <div class="chart">
          <font-awesome-icon :icon="['fas', 'chart-simple']" class="icon" />
          <span>{{ props.views }}</span>
        </div>
        <div class="other">
          <font-awesome-icon :icon="['far', 'bookmark']" class="icon bookmark" />
          <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" class="icon share" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import user from '../assets/js/user.js'

const props = defineProps({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img_tweet: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  retweets: {
    type: Number,
    required: true
  },
  comments: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

function handleImageError(event) {
  event.target.src = '/default-profile.png'
}

function formatDate(date) {
  // return from 2021-10.01 to 01. Okt. 2021
  const dateArray = date.split('-')
  const month = dateArray[1]
  const day = dateArray[2]
  const year = dateArray[0]
  const monthNames = [
    'Jan.',
    'Feb.',
    'März',
    'Apr.',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sep.',
    'Okt.',
    'Nov.',
    'Dez.'
  ]
  return `${day}. ${monthNames[month - 1]} ${year}`
}

function extractTagsAndMentions(content) {
  const words = content.split(' ')
  const taggedContent = words
    .map((word) => {
      if (word.startsWith('#') && word.length > 1) {
        const tag = word.slice(1)
        return `<a href="#" style="text-decoration: none; color: #1d9bf0" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">#${tag}</a>`
      } else if (word.startsWith('@') && word.length > 1) {
        const mention = word.slice(1)
        return `<a href="#" style="text-decoration: none; color: #1d9bf0" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">@${mention}</a>`
      } else {
        return word
      }
    })
    .join(' ')
  return taggedContent
}

const taggedContent = extractTagsAndMentions(props.content)

function addLike(event) {
  const tweets = user.value.tweets
  const tweet = tweets.find((tweet) => tweet.id === props.id)
  if (!event.target.classList.contains('liked')) {
    tweet.likes++
    user.value = { ...user.value, tweets: tweets }

    event.target.classList.add('liked')
    event.target.nextElementSibling.classList.add('liked')
  } else {
    tweet.likes--
    user.value = { ...user.value, tweets: tweets }
    event.target.classList.remove('liked')
    event.target.nextElementSibling.classList.remove('liked')
  }
}

function addReply() {
  const tweets = user.value.tweets
  const tweet = tweets.find((tweet) => tweet.id === props.id)

  if (!event.target.classList.contains('replied')) {
    tweet.retweets++
    user.value = { ...user.value, tweets: tweets }
    event.target.classList.add('replied')
    event.target.nextElementSibling.classList.add('replied')
  } else {
    tweet.retweets--
    user.value = { ...user.value, tweets: tweets }
    event.target.classList.remove('replied')
    event.target.nextElementSibling.classList.remove('replied')
  }
}

function addComment() {
  const tweets = user.value.tweets
  const tweet = tweets.find((tweet) => tweet.id === props.id)

  if (!event.target.classList.contains('commented')) {
    tweet.comments++
    user.value = { ...user.value, tweets: tweets }
    event.target.classList.add('commented')
    event.target.nextElementSibling.classList.add('commented')
  } else {
    tweet.comments--
    user.value = { ...user.value, tweets: tweets }
    event.target.classList.remove('commented')
    event.target.nextElementSibling.classList.remove('commented')
  }
}
</script>

<style scoped>
.tweet {
  padding: 17px 17px 2px 17px;
  border-bottom: 1px solid #353535;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.content {
  max-height: 700px;
  width: 100%;
}

.tweet > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

.user-info {
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
}

.user-info span:not(:first-child) {
  color: #71767b;
}

.tweet-content {
  margin-top: 2px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
}

.tweet-content img {
  margin-top: 10px;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* Seitenverhältnis 1:1 */
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
}

.tweet-actions {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tweet-actions div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tweet-actions span {
  font-size: 13px;
  color: #71767b;
}

.icon {
  color: #71767b;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 10px;
}

.comment:hover .icon,
.comment:hover span,
.chart:hover .icon,
.chart:hover span,
.bookmark:hover,
.share:hover {
  color: #1da1f2;
}

.comment:hover .icon,
.chart:hover .icon,
.bookmark:hover,
.share:hover {
  background-color: #1da1f215;
  border-radius: 50%;
}

.replies:hover .icon,
.replies:hover span {
  color: #17bf63;
}

.replies:hover .icon {
  background-color: #17bf6315;
  border-radius: 50%;
}

.likes:hover .icon,
.likes:hover span {
  color: #e0245e;
}

.likes:hover .icon {
  background-color: #e0245e15;
  border-radius: 50%;
}

.liked {
  color: #e0245e !important;
}

.replied {
  color: #17bf63 !important;
}

.commented {
  color: #1da1f2 !important;
}
</style>
