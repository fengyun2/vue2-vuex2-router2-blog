<template lang="html">
  <ul class="btn-group">
    <li>
      <a href="javascript:void(0)">热门</a>
    </li>
    <li>
      <a href="javascript:void(0)">新上榜</a>
    </li>
    <li>
      <a href="javascript:void(0)">日报</a>
    </li>
    <li>
      <a href="javascript:void(0)">七日热门</a>
    </li>
    <li>
      <a href="javascript:void(0)">三十日热门</a>
    </li>
    <li>
      <a href="javascript:void(0)">有奖活动</a>
    </li>
    <li>
      <a href="javascript:void(0)">时事热文</a>
    </li>
    <li>
      <a href="javascript:void(0)">专题精选</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.btn-group {
  margin-left: 15px;
  margin-bottom: 20px;
}
.btn-group li {
  margin: 5px 5px;
}
.btn-group .active {
  background-color: #de533a;
}
.btn-group .active a {
  color: #fff;
}
.btn-group li {
  margin: 0 5px;
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}
</style>
