import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'
import BookmarkViewVue from '@/views/BookmarkView.vue'
import ExploreViewVue from '@/views/ExploreView.vue'
import NotificationViewVue from '@/views/NotificationView.vue'
import MessageViewVue from '@/views/MessageView.vue'
import ListViewVue from '@/views/ListView.vue'
import CommunityViewVue from '@/views/CommunityView.vue'
import ProfileWithRepliesViewVue from '@/views/ProfileWithRepliesView.vue'
import ProfileHighlightsViewVue from '@/views/ProfileHighlightsView.vue'
import ProfileLikeViewVue from '@/views/ProfileLikeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreViewVue
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessageViewVue
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationViewVue
    },
    {
      path: '/lists',
      name: 'lists',
      component: ListViewVue
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarkViewVue
    },
    {
      path: '/communities',
      name: 'communities',
      component: CommunityViewVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/profile/with_replies',
      name: 'with_replies',
      component: ProfileWithRepliesViewVue
    },
    {
      path: '/profile/highlights',
      name: 'highlights',
      component: ProfileHighlightsViewVue
    },
    {
      path: '/profile/media',
      name: 'media',
      component: () => import('@/views/ProfileMediaView.vue')
    },
    {
      path: '/profile/likes',
      name: 'likes',
      component: ProfileLikeViewVue
    }
  ]
})

export default router
