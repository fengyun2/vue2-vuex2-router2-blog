<template lang="html">
  <div class="content">
    <h1>这里是专题首页</h1>
    <p>
      <button type="button" name="button" @click="getTopics">获取话题列表</button>
    </p>

    <ul class="list">
      <li v-for="topic in topics">
        <h3 v-text="topic.title"></h3>
        <p v-html="topic.content"></p>
        <p v-text="topic.author"></p>
        <p v-text="topic.created_at"></p>
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
    topics () {
      return this.$store.getters.getTopics
    }
  },
  mounted () {},
  attached () {},
  methods: {
    getTopics () {
      this.$store.dispatch('fetchTopoicList')
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
