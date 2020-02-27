<template>
  <div class="filter">
    <v-header></v-header>
    <div class="group">
      <div class="group-item" v-for="(item, index) in data" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="list">
          <div class="item">
            <span v-for="(item2, index2) in item.list" :key="index2" :class="item2.active?'active': ''" @click="handleClick(index, index2)">{{item2.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="action-bar">
      <router-link tag="a" to="/home">选好了</router-link>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'

export default {
  data () {
    return {
      data: [
        {
          title: '销售技巧',
          list: [
            {
              name: '基础课程'
            },
            {
              name: '初级课程',
              active: true
            },
            {
              name: '中级课程'
            },
            {
              name: '高级课程'
            },
            {
              name: '资深课程'
            }
          ]
        },
        {
          title: '服务课程',
          list: [
            {
              name: '基础课程'
            },
            {
              name: '初级课程'
            },
            {
              name: '中级课程'
            },
            {
              name: '高级课程'
            }
          ]
        },
        {
          title: '项目管理',
          list: [
            {
              name: '初级课程'
            },
            {
              name: '中级课程'
            },
            {
              name: '资深课程'
            }
          ]
        }
      ],
      active: null
    }
  },
  created() {
    for (let i in this.data) {
      for (let j in this.data[i].list) {
        let item = this.data[i].list[j]
        if (item.active) {
          this.active = [i, j]
          return
        }
      }
    }
  },
  methods: {
    handleClick(index1, index2) {
      this.data[this.active[0]].list[this.active[1]].active = false
      this.data[index1].list[index2].active = true
      this.active = [index1, index2]
      this.$forceUpdate()
    }
  },
  components: {
    vHeader: Header
  }
}
</script>

<style scoped lang="scss">
  @import "css/def";
  .filter {
    min-height: 100vh;
    background-color: #fff;
    padding-top: size(90);
    .group {
      padding: size(40) size(40) size(120);
      .group-item {
        margin-bottom: size(30);
        .title {
          color: #080808;
          font-size: size(38);
          font-weight: 800;
          line-height: 1;
        }
        .list {
          margin-top: size(30);
          width: 100%;
          .item {
            width: 100%;
            @include flex();
            justify-content: flex-start;
            flex-wrap: wrap;
            span {
              height: size(60);
              line-height: size(60);
              border-radius: size(30);
              border: 1px solid #BEBEBE;
              color: #040404;
              font-size: size(30);
              margin-right: size(20);
              margin-bottom: size(20);
              display: inline-block;
              padding: 0 size(16);
              &.active {
                color: #1FB7F5;
                border-color: #1FB7F5;
              }
            }
          }
        }
      }
    }
    .action-bar {
      position: fixed;
      bottom: size(40);
      left: size(40);
      right: size(40);
      a {
        display: block;
        height: size(80);
        width: 100%;
        line-height: size(80);
        border-radius: size(40);
        color: #fff;
        text-align: center;
        background-color: #1CBCFD;
        &:active {
          opacity: .5;
        }
      }
    }
  }
</style>