import { ref } from 'vue'

const user = ref({
  name: 'Bernd das Brot',
  username: '@bernd_das_brot',
  email: 'bernd.dasBrot@online.de',
  bio: 'I am a bread and i am real!',
  birthdate: '1990-01-01',
  createdAt: '2021-10-01',
  location: 'Erfurt, Germany',
  website: 'https://www.bernd-brot.de/',
  bgImage: '/images/BerndDasBrot-bg.jpg',
  profileImage: '/images/BerndDasBrot.jpg',
  premium: false,
  followers: 4,
  following: 23,
  tweets: [
    {
      id: 1,
      date: '2021-10-01',
      content:
        'I am a bread. I am new on Twitter. I want to share my thoughts with you. Tweets are my own. Dont @ me! #bread #brot #bernd #brotzeit #brotkasten @elonmusk',
      img: '/images/bernd-das-brot-wieder-da.jpeg',
      likes: 3,
      retweets: 9,
      comments: 3,
      views: 100
    },
    {
      id: 2,
      date: '2021-10-02',
      content: 'I am a big bread',
      img: '',
      likes: 10,
      retweets: 2,
      comments: 65,
      views: 42
    },
    {
      id: 3,
      date: '2021-12-18',
      content: 'I am a huge bread',
      img: '',
      likes: 366,
      retweets: 2,
      comments: 2,
      views: 64
    },
    {
      id: 4,
      date: '2022-01-22',
      content:
        'I am a giga bread. I live in Erfurt and i am working on my new book. #bread #brot #bernd #newbook #erfurt',
      img: '',
      likes: 55,
      retweets: 22,
      comments: 11,
      views: 422
    },
    {
      id: 5,
      date: '2023-07-23',
      content: 'Me on r/place! #bread #brot #bernd #rplace',
      img: '/images/pixel-bernd.png',
      likes: 5643,
      retweets: 239,
      comments: 292,
      views: 9222
    },
    {
      id: 6,
      date: '2024-01-23',
      content: 'Ziemlich kalt hier oben! #bread #brot #bernd #weltraum #kalt',
      img: '/images/Bernd-Das-Brot-Im-Weltraum.jpg',
      likes: 5643,
      retweets: 239,
      comments: 292,
      views: 9222
    },
    {
      id: 7,
      date: '2024-02-04',
      content: 'Mein neues Logo!!! #bread #brot #bernd #logo #neu',
      img: '/images/bernd-das-brot-logo.jpg',
      likes: 545,
      retweets: 23,
      comments: 11,
      views: 865
    }
  ]
})

export default user
