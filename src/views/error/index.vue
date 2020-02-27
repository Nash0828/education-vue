<template>
  <div class="container">
    <div class="msg">{{apiStatus.msg}}</div>
    <div class="home">
      <a @click="toIndex">返回首页</a><br><br>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      apiStatus: 'apiStatus'
    })
  },
  mounted() {
  },
  methods: {
    toIndex() {
      this.$router.replace('/')
    }
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .container{
    padding: size(30);
    color: #222;
    .msg{
      font-size: size(32);
      text-align: center;
      padding: size(40);
    }
    .home{
      text-align: center;
      a{
        display: inline-block;
        font-size: size(28);
        color: #222;
        padding: size(15) size(30);
        border: 1px solid #ccc;
        -webkit-border-radius: size(10);
        -moz-border-radius: size(10);
        border-radius: size(10);
      }
    }
  }
</style>
