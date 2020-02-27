<template>
  <div class="certificate">
    <v-header>{{$route.meta.title}}</v-header>
    <div class="group">
      <div class="group-item" v-for="(item, index) in data" :key="index">
        <div class="title">{{item.name}}</div>
        <div class="list">
          <div class="item" v-for="(item2, index2) in item.list" :key="index2">
            <div class="img">
              <img v-lazy="item2.url">
            </div>
            <div class="name">{{item2.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
export default {
  data() {
    return {
      data: [
        {
          name: '销售技巧',
          list: [
            {
              name: '销售中级证书',
              url: ''
            },
            {
              name: '销售高级证书',
              url: ''
            }
          ]
        },
        {
          name: '项目管理',
          list: [
            {
              name: '项目管理中级证书',
              url: ''
            },
            {
              name: '项目管理高级证书',
              url: ''
            },
            {
              name: '项目管理超级高级证书',
              url: ''
            }
          ]
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
  .certificate {
    min-height: 100vh;
    background-color: #FBFBFB;
    line-height: 1;
    padding-top: size(90);
    .group {
      width: 100%;
      .group-item {
        margin-top: size(70);
        .title {
          color: #484848;
          font-size: size(42);
          padding: 0 size(40);
          font-weight: 800;
        }
        .list {
          padding: 0 size(40);
          margin-top: size(28);
          @include flex();
          flex-wrap: wrap;
          justify-content: space-between;
          .item {
            width: 46.9%;
            background-color: #fff;
            position: relative;
            z-index: 1;
            border-radius: size(4);
            overflow: hidden;
            margin-bottom: size(40);
            .img {
              position: relative;
              padding-bottom: 66.88%;
              z-index: 2;
              img {
                display: inline-block;
                position: absolute;
                z-index: 3;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
            .name {
              height: size(72);
              line-height: size(72);
              text-align: center;
              color: #474747;
              font-size: size(30);
              padding: 0 size(20);
              @include ellipsis();
            }
          }
        }
      }
    }
  }
</style>