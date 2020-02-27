<template>
  <div class="type1" ref="list">
    <div v-for="(item, index) in data" :key="index">
      <input class="radio" type="radio" v-model="picked" :value="item.value" :id="'radio_'+index" :disabled="activeItem && activeItem.index">
      <label :for="'radio_'+index" class="item" :class="{'primary': (index == activeItem.index && activeItem.type == '0'), 'danger': (index == activeItem.index && activeItem.type == '1')}">
        <div class="text">
          <span>{{item.text}}</span>
        </div>
        <i class="iconfont"></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    activeItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      picked: -1
    }
  },
  created() {
    console.log(this.data)
  },
  watch: {
    picked(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .type1 {
    width: 100%;
    .item {
      display: block;
      height: size(92);
      border: 1px solid #676D8B;
      border-radius: size(28);
      margin-bottom: size(44);
      position: relative;
      &.primary {
        border: 1px solid #1CBCFD;
        .iconfont {
          display: inline-block;
          color: #1CBCFD;
          &:before {
            content: "\E656";
          }
        }
      }
      &.danger {
        border: 1px solid #E02020;
        .iconfont {
          display: inline-block;
          color: #E02020;
          &:before {
            content: "\E61E";
          }
        }
      }
      .text {
        height: 100%;
        width: 100%;
        @include flex();
        justify-content: flex-start;
        padding: 0 size(88) 0 size(40);
        font-size: size(32);
        color: #959AAD;
      }
      .iconfont {
        position: absolute;
        top: 50%;
        right: size(28);
        font-size: size(40);
        transform: translateY(-50%);
        &:before {
          content: "\eb94";
        }
      }
    }
    .radio {
      display: none;
      &:checked + .item {
        border: 1px solid #1CBCFD;
        .iconfont {
          display: inline-block;
          color: #1CBCFD;
          &:before {
            content: "\e9a6";
          }
        }
      }
    }
  }
</style>