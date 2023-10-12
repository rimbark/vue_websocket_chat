<script lang="ts" setup="">
import { ref } from "vue"
import { useAuth } from "../stores/auth.ts"
import { useChatService } from "../stores/messageService.ts"

const { channels } = useChatService()
const auth = useAuth()

const activeChannel = ref(channels[0].id)
</script>

<template>
  <div
    v-if="auth.isAuth"
    class="container"
  >
    <template
      v-for="channel in channels"
      :key="channel.id"
    >
      <RouterLink :to="{ name: 'chat', params: { id: channel.id}}">
        <div
          class="container_item"
          @click="activeChannel = channel.id"
        >
          {{ channel.title }}
        </div>
      </RouterLink>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "src/style";

.router-link-exact-active {
  background-color: #547fa5;
  color: white;
}

.container {
  @include displayColumn;
  flex-grow: 1;
  width: 100%;

  padding: 5px;
}

.container_item {
  @include displayRow;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 40px;

  padding: 5px;

  cursor: pointer;

}

.container_item:not(.active):hover {
  background-color: rgba(84, 127, 165, 0.18);
  color: white;
}

li {
  list-style: none;
}
</style>