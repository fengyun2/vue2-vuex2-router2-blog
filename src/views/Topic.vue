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
import {
  getTopics
} from '../vuex/getters'

import {
  fetchTopoicList
} from '../vuex/actions'

export default {
  data () {
    return {}
  },
  vuex: {
    getters: {
      topics: getTopics
    },
    actions: {
      getTopics: fetchTopoicList
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
