<template lang="html">

  <ul class="flex-card-list">

    <li class="flex-card-listitem">

      <button type="button" name="button" @click="getArticles">获取文章列表</button>


      <div class="flex-card" v-for="article in articles">

        <div class="flex-card-image">
          <img src="../assets/logo.png" alt="logo" />
        </div>

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
export default {
  data () {
    return {}
  },
  computed: {
    articles () {
      return this.$store.getters.getArticles
    }
  },
  mounted () {},
  attached () {},
  methods: {
    getArticles () {
      this.$store.dispatch('fetchArticleList')
    }
  },
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
