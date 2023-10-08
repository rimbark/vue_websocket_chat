<script lang="ts" setup="">
import { useChannelsService } from "../modules/channelsService.ts"

const { channels } = useChannelsService ()
const setActive = (id: number) => {
  channels.forEach (ch => {
    ch.id === id ? ch.checked = true : ch.checked = false
  })
}
</script>

<template>
  <div class="container">
    <div
      v-for="channel in channels"
      :key="channel.id"
      class="container_item"
      :class="{active: channel.checked}"
      @click="setActive(channel.id)"
    >
      {{ channel.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/style";

.container {
  @include displayColumn;

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

.active {
  background-color: #547fa5;
  color: white;
}

li {
  list-style: none;
}
</style>