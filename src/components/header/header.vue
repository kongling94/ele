<template>
  <div class="header">
    <div class="header-wrap">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">

        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>

        <div class="desc">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>

        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>

        <div v-if="seller.supports" class="btn">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>

    </div>
    <div class="bulletin-wrap">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bgc-img">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
  </div>

</template>

<script>
  import tabs from './header-tabs'
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        data: {}
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    components: {
      tabs
    }
  }

</script>

<style scoped lang="less">
  @import url('../../../static/css/mixin.less');

  .header {
    background: rgba(7, 17, 27, 0.5);
    color: #fff;
    text-align: left;
    position: relative;
    .header-wrap {
      font-size: 0;
      padding: 24px 12px 0 24px;
      position: relative;
      padding-bottom: 8px;
      .avatar {
        height: 64px;
        width: 64px;
        display: inline-block;
        margin-right: 16px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 2px;
        }
      }
      .content {
        display: inline-block;
        font-size: 14px;
        vertical-align: top;
       

        .title {
          margin: 2px 0 8px 0;
          .brand {
            display: inline-block;
            width: 30px;
            height: 18px;
            vertical-align: top;
            .bg-img('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 3px;
          }
          .name {
            margin-left: 6px;
            font-size: 16px; // color: rgb(255, 255, 255);
            font-weight: bold;
            line-height: 18px;
          }
        }
        .desc {
          margin-bottom: 10px;
          font-size: 12px; // color: #fff;
          font-weight: 200;
          line-height: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            width: 15px;
            height: 15px;
            margin: 0 4px 2px 0;
            background-size: 15px 15px;
            background-repeat: no-repeat;
            background-position: center;
            &.decrease {
              .bg-img('decrease_1')
            }
            &.discount {
              .bg-img('discount_1')
            }
            &.guarantee {
              .bg-img('guarantee_1')
            }
            &.invoice {
              .bg-img('invoice_1')
            }
            &.special {
              .bg-img('special_1')
            }
          }
          .text {
            vertical-align: top;
            font-size: 10px; // color: #fff;
            font-weight: 200;
            line-height: 12px;
          }
        }
        .btn {
          position: absolute;
          right: 12px;
          bottom: 5px;
          padding: 7px 8px;
          height: 20px;
          line-height: 20px;
          border-radius: 14px;
          background-color: rgba(0, 0, 0, 0.2);
          span {
            // display: inline-block;
            font-size: 10px;
            margin-right: 2px;
          }
          i {
            width: 4px;
            height: 4px;
            // font-size: 14px;
            vertical-align: middle;
          }
        }
      }
    }
    .bulletin-wrap{
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      background-color: rgba(7, 17, 27, 0.2);
      .bulletin-title{
        display: inline-block;
        width: 22px;
        height: 12px;
        .bg-img('bulletin');
        background-size:22px 12px;
        background-repeat: no-repeat;
        margin-right: 4px;
      }
      .bulletin-text{
        font-size: 10px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        right: 12px;
        top:8px;
        font-size: 10px;
      }
    }
    .bgc-img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1; 
      filter: blur(10px);

    }
  }

</style>
