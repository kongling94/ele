<template>
  <div class="goods">
    <H4>商品的</H4>
    <ul>
        <li v-for="item in data" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        data: {}
      }
    },
    created() {
      axios.get('/api/goods').then((res) => {
        if(res.data.errno===0){
          this.data=res.data.data
        }
      }, (error) => {
        console.log(error)
      })
    }
  }

</script>

<style scoped>


</style>
