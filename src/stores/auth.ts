import { defineStore } from "pinia"
import { useRoute, useRouter } from "vue-router"
import { useStorage } from "@vueuse/core"
import { watch } from "vue"

export const useAuth = defineStore('auth', () => {
  const isAuth = useStorage('my::auth', true)
  const route = useRoute()
  const router = useRouter()

  watch(isAuth, (isAuth) => {
    if (route.meta.requiresAuth && !isAuth) {
      router.push('/')
    }
  })
  
  return {
    isAuth
  }
})