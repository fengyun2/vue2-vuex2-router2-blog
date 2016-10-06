<template lang="html">
<div class="content">
  <h1>这里是电影频道主页</h1>
  <p>
    <button type="button" name="button" @click="getVideos">获取电影列表</button>
  </p>
  <ul>
    <li v-for="video in videos">
      <a href="javascript:void(0)" v-text="video.title"></a>
    </li>
  </ul>
</div>
</template>

<script>
import {
  getVideos
} from '../vuex/getters'

import {
  displayVideo
} from '../vuex/actions'

export default {
  data () {
    return {}
  },
  vuex: {
    getters: {
      videos: getVideos
    },
    actions: {
      getVideos: displayVideo
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
</style>
