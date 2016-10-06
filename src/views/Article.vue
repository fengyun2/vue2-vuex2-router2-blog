<template lang="html">
  <!-- card-list -->
  <ul class="flex-card-list">
    <!-- card-list-item -->
    <li class="flex-card-listitem">

      <button type="button" name="button" @click="getArticles">获取文章列表</button>

      <!-- card-module -->
      <div class="flex-card" v-for="article in articles">
        <!-- image container -->
        <div class="flex-card-image">
          <img src="../assets/logo.png" alt="logo" />
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading" v-text="article.title">JavaScript</h3>
          <p v-text="article.content">
            JavaScript 是 Web 的编程语言。
            所有现代的 HTML 页面都使用 JavaScript。
            JavaScript 非常容易学。
          </p>
          <p v-text="article.created_at"></p>
          <a href="javascript:void(0)" class="flex-card-button">查看详情</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {
  getArticles
} from '../vuex/getters'

import {
  fetchArticleList
} from '../vuex/actions'
export default {
  data () {
    return {}
  },
  vuex: {
    getters: {
      articles: getArticles
    },
    actions: {
      getArticles: fetchArticleList
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
.flex-card-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 auto;
    .flex-card-listitem {
        display: flex;

        .flex-card {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            .flex-card-content {
                display: flex;
                flex: 1 0 auto;
                flex-direction: column;

                p {
                    flex: 1 0 auto;
                    flex-wrap: wrap;
                }
            }
        }
    }
    li {
        width: 50%;
    }
}
</style>
