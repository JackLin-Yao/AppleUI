<script setup>
import wrapperHeader from './wrapper-header.vue'
import { reactive, ref } from 'vue'
const data = reactive([
  '我的桌面',
  '我的收藏',
  '我的记录',
  '我的日常',
  '快捷导航栏',
])
const currentindex = ref(0)
const showactive = (e) => {
  currentindex.value = e
}
</script>

<template>
  <div class="main-container">
    <div class="main-header">
      <a class="menu-link-main" href="#">首页</a>
      <div class="header-menu">
        <a
          class="main-header-link"
          href="#"
          v-for="(item, index) in data"
          :key="index"
          @click="showactive(index)"
          :class="{ isactive: currentindex === index }"
          >{{ item }}</a
        >
      </div>
    </div>
    <wrapperHeader></wrapperHeader>
  </div>
</template>

<style scoped lang="scss">
@import '/src/style';
.main-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  height: 58px;
  flex-shrink: 0;
  .header-menu {
    margin-left: 150px;
    @media screen and (max-width: 1055px) {
      margin: auto;
    }
    a {
      padding: 20px 30px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      &.isactive,
      &:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
        z-index: 1001;
      }
    }
  }
}

.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.menu-link-main {
  text-decoration: none;
  color: var(--theme-color);
  padding: 0 30px;
  @media screen and (max-width: 1055px) {
    display: none;
  }
}
</style>
