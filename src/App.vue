<script lang="ts" setup>
import ChannelsList from "./components/ChannelsList.vue"
import MessageList from "./components/MessageList.vue"
import SendingMessage from "./components/SendingMessage.vue"
</script>

<template>
  <div class="main-container">
    <div class="channelContainer">
      <ChannelsList />
    </div>
    <div class="messageContainer">
      <MessageList />
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
