<template lang="html">
<div class="content">
  <h1>这里是Home页面</h1>
  <p>
    欢迎大家来到首页
  </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home'
    }
  },
  computed: {},
  mounted () {},
  attached () {},
  methods: {},
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      console.log(`我是组件实例vm: `, vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  components: {}
}
</script>

<style lang="css">
</style>
