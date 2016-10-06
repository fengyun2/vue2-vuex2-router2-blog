<template>
  <div class="container">
    <div class="bottombar">
      <ul class="dropdown">
        <li :class="{active: show == 'home'}">
          <a @click="show = 'home'" v-link="{name: 'home'}">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </a>
        </li>

        <li :class="{active: show == 'topic'}">
          <a @click="show = 'topic'" v-link="{name: 'topic'}">
            <i class="fa fa-th"></i>
            <span>专题</span>
          </a>
        </li>

        <li :class="{active: show == 'article'}">
          <a @click="show = 'article'" v-link="{name: 'article'}">
            <i class="fa fa-th"></i>
            <span>热文</span>
          </a>
        </li>

        <li :class="{active: show == 'video'}">
          <a @click="show = 'video'" v-link="{name: 'video'}">
            <i class="fa fa-th"></i>
            <span>获取并展示电影</span>
          </a>
        </li>
      </ul>

    </div>

    <div class="page">
      <router-view transition='display' transition-mode='out-in'></router-view>
    </div>

  </div>
</template>

<script>
import store from './vuex/store'
export default {
  /* 挂载store */
  store,
  data () {
    return {
      show: 'home'
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-size: 20px;
}
body {
  margin: 0;
}

.container {
  // display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
  height: 100%;
}

.logo {
  width: 100px;
  height: 100px
}

.display-transition {
  transition: all 0 .5s;
}

.display-leave {
  opacity: 0;
  transform: translateX(50px);
}

.display-enter {
  opacity: 1;
}

.bottombar {
  z-index: 20;
  height: 44px;
  line-height: 44px;
  top: 0;
  width: 100%;
  padding: 0;
  table-layout: fixed;
  display: block;
  margin-bottom: 20px;
  li {
    display: inline-block;
    font-size: 48px;
    &.active {
      background-color: #e78170;
      a {
        color: #fff;
      }
    }
  }
}

.page {
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
}

.home {
  width: calc(100%-80px);
  margin-right: 0;
}
</style>
