<template>
  <div class="tabs">
    <div class="tabs-item">
      <router-link to="/seller">商家</router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tabs-item">
      <router-link to="/ratings">评论</router-link>
    </div>
  </div>
  
</template>

<script>


</script>

<style scoped lang="less">
@import url('../../../static/css/mixin.less');
  .tabs {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .border-1px( rgba(7,17,27,0.1));
  }

  .tabs-item {
    flex: 1;
    /* background: #ccc; */
    text-align: center;
    color: #fff;
    border-right: 1px solid #fff;
    text-decoration: none;
  }

  .tabs-item:nth-child(3) {
    border-right: none;
  }

  .tabs-item > a{
      color: #fff;
      display: block;
      font-size: 14px;
      color: rgb(77,85,93);
  }
  .tabs-item > a.router-link-active{
      color: rgb(240, 20, 20);
  } 
</style>
