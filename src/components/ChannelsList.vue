<script lang="ts" setup="">

</script>

<template>
  <div class="container">
    <div class="container_item">
      channel 1
    </div>
    <div class="container_item">
      channel 2
    </div>
    <div class="container_item">
      channel 3
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

.container_item:hover {
  background-color: #547fa5;
}

li {
  list-style: none;
}
</style>