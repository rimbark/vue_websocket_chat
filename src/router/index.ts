import { createRouter, createWebHistory } from "vue-router"
import { useAuth } from "../stores/auth.ts"
import MessageList from "../components/MessageList.vue"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: {
        render() {
        }
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: MessageList,
      meta: {
        chatParamId: 'id',
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to) => {
  const auth = useAuth()
  if (to.meta.requiresAuth && !auth.isAuth) {
    return '/'
  }
})
