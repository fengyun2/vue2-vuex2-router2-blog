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
export default {
  data () {
    return {}
  },
  computed: {
    videos () {
      return this.$store.getters.getVideos
    }
  },
  mounted () {

  },
  attached () {},
  methods: {
    getVideos () {
      // console.log(this.$store)
      this.$store.dispatch('displayVideo')

      setTimeout(() => {
        this.computeVideos()
      }, 2000)
    },
    computeVideos () {
      console.log('getVideos: ==> ')
      console.log(this.$store)
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
