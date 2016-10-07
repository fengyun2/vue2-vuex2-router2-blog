<template>
  <div class="container">
    <div class="bottombar">
      <ul class="dropdown">
        <li :class="{active: show == 'home'}">
          <router-link to="/">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </router-link>
        </li>

        <li :class="{active: show == 'topic'}">
          <router-link to="/topic">
            <i class="fa fa-th"></i>
            <span>专题</span>
          </router-link>
        </li>

        <li :class="{active: show == 'article'}">
          <router-link to="/article">
            <i class="fa fa-th"></i>
            <span>热文</span>
          </router-link>
        </li>

        <li :class="{active: show == 'video'}">
          <router-link to="/video">
            <i class="fa fa-th"></i>
            <span>获取并展示电影</span>
          </router-link>
        </li>
      </ul>

    </div>

    <div class="page">
      <router-view transition='display' transition-mode='out-in'></router-view>
    </div>

  </div>
</template>

<script>
export default {
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
