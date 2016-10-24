<template>
  <div class="container">
    <div class="bottombar">
      <ul class="dropdown">
        <li :class="{active: show == 'home'}">
          <router-link :to="{name: 'home'}">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </router-link>
        </li>

        <li :class="{active: show == 'topic'}">
          <router-link :to="{name: 'topic', params: {id: 1}}">
            <i class="fa fa-th"></i>
            <span>专题</span>
          </router-link>
        </li>

        <li :class="{active: show == 'article'}">
          <router-link :to="{name: 'article', params: {id: 2}}">
            <i class="fa fa-th"></i>
            <span>热文</span>
          </router-link>
        </li>

        <li :class="{active: show == 'video'}">
          <router-link :to="{name: 'video', params: {id: 3}}">
            <i class="fa fa-th"></i>
            <span>获取并展示电影</span>
          </router-link>
        </li>
      </ul>

    </div>

    <div class="page">
      <router-view transition='display' transition-mode='out-in' :get-app-data="getAppData"></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      show: 'home',
      transitionName: 'slide-left'
    }
  },
  // dynamically set transition based on route change
  watch: {
    '$route' (to, from) {
      this.show = to.name

      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
    getAppData () {
      console.log('我是父类App的方法, 但是我能被子类调用')
    }
  },

  components: {
  }
}
</script>

<style lang="scss">
html {
  height: 200%;
  font-size: 20px;
}
body {
  margin: 0;
  background: lightgreen;
  height: 100%;
}

.container {
  position: relative;
  height: 50%;
  vertical-align: middle;
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
  margin-top: 100px;
  width: 100%;
  padding: 0;
  table-layout: fixed;
  display: block;
  margin-bottom: 20px;
  background: #eee;
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
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
}

.home {
  width: calc(100%-80px);
  margin-right: 0;
}
</style>
