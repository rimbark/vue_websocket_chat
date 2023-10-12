<script lang="ts" setup>
import ChannelsList from "./components/ChannelsList.vue"
import LoginButton from "./components/LoginButton.vue"
import SendingMessage from "./components/SendingMessage.vue"
</script>

<template>
  <div class="main-container">
    <div class="channelContainer">
      <ChannelsList />
      <LoginButton />
    </div>
    <div class="messageContainer">
      <router-view />
      <SendingMessage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";

.main-container {
  @include displayRow;

  width: 1000px;
  height: 500px;

  padding: 10px;

  border: 2px solid #12154e;
  background-color: #213547;
}

.channelContainer {
  @include displayColumn;
  justify-content: flex-end;

  padding: 5px;

  align-items: flex-start;
  width: 30%;

  background-color: #294762;
}

.messageContainer {
  @include displayColumn;
  @include alignEnd;
  gap: 15px;
  flex-grow: 1;

  padding: 5px;

  background-color: #265a56;
}
</style>
