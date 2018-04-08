<template>
  <div class="goods">
    <H4>商品的</H4>
    <ul>
        <li v-for='item in data.foods' :key='item.id'>
          <h3>{{item.name}}</h3>
        </li>
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
        this.data = res.data.data[0]
      }, (error) => {
        console.log(error)
      })
    }
  }

</script>

<style scoped>


</style>
