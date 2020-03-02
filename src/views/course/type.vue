<template>
  <div class="type">
    <v-header></v-header>
    <div class="title">选择课程</div>
    <div class="list">
      <router-link tag="div" :to="'./type/' + (index + 1)" :class="'item ' + 'item' + (index + 1)" v-for="(item, index) in list" :key="index">
        <div>
          <label>
            <div>
              <div class="name">{{item.name}}</div>
              <div class="desc">{{item.desc}}</div>
<!--              <input type="radio" id="item1">-->
<!--              <i class="iconfont icon-xuanzhong"></i>-->
            </div>
          </label>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from 'components/header'
export default {
  data() {
    return {
      list: [
        {
          name: '销售技巧',
          desc: '销售技巧课程学习'
        },
        {
          name: '服务课程',
          desc: '服务课程课程学习'
        },
        {
          name: '项目管理',
          desc: '项目管理课程学习'
        }
      ]
    }
  },
  components: {
    vHeader: Header
  }
}
</script>
<style scoped lang="scss">
  @import "css/def";
  .type {
    background-color: #fff;
    line-height: 1;
    padding-top: size(90);
    >.title {
      text-align: center;
      font-size: size(40);
      color: #030303;
      margin: size(30) 0 size(60);
    }
    >.list {
      padding: 0 size(42);
      >.item {
        width: 100%;
        position: relative;
        padding-bottom: 50.6%;
        margin-bottom: size(40);
        &.item1 label{
          background-color: #ffbf98;
        }
        &.item2 label{
          background-color: #ffe393;
        }
        &.item3 label{
          background-color: #c2c1ff;
        }
        >div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          >label {
            border-radius: size(46);
            width: 100%;
            height: 100%;
            @include flex();
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding-left: size(60);
            .name {
              color: #000A10;
              font-size: size(38);
              font-weight: 800;
            }
            .desc {
              color: #4D4D4D;
              font-size: size(30);
              margin-top: size(10);
              line-height: 1.3;
            }
            i {
              position: absolute;
              font-size: size(52);
              top: size(-8);
              right: size(-8);
              color: #1CBCFD;
            }
          }
        }
      }
    }
  }
</style>