<script setup>
import Header from './components/Header.vue'
import LeftBar from './components/left-side.vue'
import content from './components/cotent.vue'
</script>

<template>
  <div class="index">
    <Header></Header>
    <div class="wrapper">
      <LeftBar></LeftBar>
      <content></content>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/src/style';
.index {
  background-color: var(--theme-bg-color);
  // max-width: 1450px;
  max-height: 860px;
  width: 96vw;
  height: 95vh;
  // width: 95vh;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  position: relative;

  border-radius: 14px;
  // backdrop-filter: blur(20px);
  // -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
</style>
