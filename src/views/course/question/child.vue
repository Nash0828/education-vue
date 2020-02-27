<template>
  <div class="child">
    <label for="r1">
      男
      <input type="radio" v-model="checkedItems" value="1" id="r1" @change="onChange">
    </label>
    <label for="r2">
      女
      <input type="radio" v-model="checkedItems" value="2" id="r2" @change="onChange">
    </label>
  </div>
</template>

<script>
export default {
  model: {
    props: 'checked',
    event: 'change'
  },
  props: ['value', 'checked'],
  data() {
    return {
      checkedItems: null
    }
  },
  created() {
    this.checkedItems = this.value
  },
  methods: {
    onChange(e) {
      let value = e.target.value
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  input {
    display: inline-block;
    width: size(20);
    height: size(20);
    -webkit-appearance: radio;
  }
</style>