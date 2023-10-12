<script lang="ts" setup="">
import { useAuth } from "../stores/auth.ts"

const auth = useAuth()
</script>

<template>
  <button
    class="loginButton"
    @click="auth.isAuth = !auth.isAuth"
  >
    {{ auth.isAuth ? 'Log Out' : 'Log In' }}
  </button>
</template>

<style scoped>
.loginButton {
  width: 100%;
}
</style>