<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="keepalive" />
    </keep-alive>
    <router-view v-if="!keepalive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    keepalive() {
      return this.$route.meta.keepalive
    }
  },
  created() {
    this.$store.dispatch('GetUserInfo')
  },
  mounted() {
    document.body.addEventListener('touchstart', () => {})
    // document.title = this.$route.meta.title
  }
}
</script>

<style lang="scss">
  @import "css/app";
</style>
