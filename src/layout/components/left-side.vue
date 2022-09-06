<script setup>
import { ref, reactive } from 'vue'
const data = reactive([
  {
    title: '主页',
    children: [
      {
        name: '我的主页',
        icon: 'icon-shouji',
      },
      {
        name: '我的收藏',
        icon: 'icon-erji',
      },
    ],
  },
  {
    title: '工作日常',
    children: [
      {
        name: '我的工作',
        icon: 'icon-diannao',
      },
      {
        name: '我的计划',
        icon: 'icon-a-34-woderizhi',
      },
      {
        name: '我的日程',
        icon: 'icon-a-35-wodericheng',
      },
      {
        name: '我的进度',
        icon: 'icon-a-20-huiyiqiandao',
      },
    ],
  },
  {
    title: '发现',
    children: [
      {
        name: '有趣的事',
        icon: 'icon-erji',
      },
      {
        name: '我的相册',
        icon: 'icon-danfan',
      },
      {
        name: '我的爱好',
        icon: 'icon-iPAD',
      },
    ],
  },
  {
    title: '记录',
    children: [
      {
        name: '我的总结',
        icon: 'icon-a-36-wodezongjie',
      },
      {
        name: '我的笔记',
        icon: 'icon-a-16-zaixiankaoshi',
      },
    ],
  },
])
const currentindex = ref(0)
const sidemenu1 = ref(false)
const showList = (index) => {
  sidemenu1.value = !sidemenu1.value
  currentindex.value = index
}
</script>

<template>
  <div class="LeftBar">
    <div class="side-wrapper" v-for="(item, index) in data" :key="index">
      <div class="side-title" @click="showList(index)">{{ item.title }}</div>
      <div :class="{ sidemenu1 }" class="sidemenu">
        <a
          href="#"
          v-if="sidemenu1 && currentindex == index"
          v-for="(subitem, indey) in item.children"
          :key="indey"
        >
          <i class="iconfont" :class="subitem.icon"></i>

          {{ subitem.name }}
        </a>
      </div>
    </div>
    <!-- <div class="side-wrapper">
      <div class="side-title">Categories</div>
      <div class="side-menu">
        <a href="#"><i class="icon-chongdianqi"></i> Photography </a>
        <a href="#"><i class="icon-chongdianqi"></i> Graphic Design </a>
        <a href="#"><i class="icon-chongdianqi"></i> Video </a>
        <a href="#"><i class="icon-diannao"></i> Illustrations </a>
        <a href="#"><i class="icon-diannao"></i> UI/UX </a>
        <a href="#"><i class="icon-diannao"></i> 3D/AR </a>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-title">Fonts</div>
      <div class="side-menu">
        <a href="#"> <i class="icon-diannao"></i> Manage Fonts </a>
      </div>
    </div>
    <div class="side-wrapper">
      <div clas s="side-title">Resource Links</div>
      <div class="side-menu">
        <a href="#"> <i class="icon-bijiben"></i> Stock </a>
        <a href="#"> <i class="icon-diannao"></i> Tutorials </a>
        <a href="#"> <i class="icon-diannao"></i> Portfolio </a>
        <a href="#"> <i class="icon-diannao"></i>Behance </a>
        <a href="#"> <i class="icon-diannao"></i> Social Forum </a>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
@import '/src/style';
.LeftBar {
  flex-basis: 200px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow-y: scroll;
  flex-shrink: 0;
  @media screen and (max-width: 900px) {
    display: none;
  }
}

.side-wrapper + .side-wrapper {
  margin-top: 20px;
}

.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
  text-align: center;
}
#sidemenu1 {
  display: none;
}
.sidemenu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  a {
    text-decoration: none;
    color: var(--theme-color);
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: 0.3s;
    &:hover {
      background-color: var(--hover-menu-bg);
    }
  }
  i {
    width: 25px;
    margin-right: 8px;
    // line-height: ;
  }
}

.notification {
  position: relative;
  &-number {
    position: absolute;
    background-color: #3a6df0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    right: -6px;
    top: -6px;
  }
}
.updates {
  position: relative;
  top: 0;
  right: 0;
  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
}
</style>
