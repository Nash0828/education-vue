<template>
  <div class="type">
    <template v-if="data.type === 1">
      <type1 v-model="val" ref="questionType" :data="data" :key="index"></type1>
    </template>
    <!-- 文字多选题 -->
    <template v-else-if="data.type === 2">
      <type2 v-model="val" ref="questionType" :data="data" :key="index"></type2>
    </template>
    <!-- 填空题 -->
    <template v-else-if="data.type === 3">
      <type3 v-model="val" ref="questionType" :data="data" :key="index"></type3>
    </template>
    <!-- 配对题 -->
    <template v-else-if="data.type === 5">
      <type5 v-model="val" ref="questionType" :data="data" :key="index" @changeHeight="handleChangeHeight"></type5>
    </template>
    <!-- 图片单选题 -->
    <template v-else-if="data.type === 6">
      <type6 v-model="val" ref="questionType" :data="data" :key="index"></type6>
    </template>
  </div>
</template>

<script>
// 文字单选题
import Type1 from './type1'
// 文字多选题
import Type2 from './type2'
// 填空题
import Type3 from './type3'
// 配对题
import Type5 from './type5'
// 图片单选题
import Type6 from './type6'
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    data: {
      type: Object
    },
    index: Number
  },
  data() {
    return {
      val: null
    }
  },
  created() {
  },
  methods: {
    check() {
      return this.$refs.questionType.check()
    },
    handleChangeHeight(val) {
      this.$emit('changeHeight', val)
    }
  },
  components: {
    Type1,
    Type2,
    Type3,
    Type5,
    Type6
  },
  watch: {
    val(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
  .type {
    position: relative;
    width: 100%;
  }
</style>