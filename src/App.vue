<template>
  <div id="app">
    <!-- <goods></goods> -->
    
    <v-header :seller="seller"></v-header>
    <tabs></tabs>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header'
  import tabs from './components/header/header-tabs'
  //请求特征码  
  const ERR_OK=0; 
  export default {
    data(){
      return {
        seller:{}
      }
    },
    name: 'App',
    components: {
      'v-header': header,
      tabs
    },
    created(){
        this.$http.get("/api/seller").then((res)=>{
            res=res.body;  //vue1.0中使用的是res.json(); 将数据对象转换为JSON对象，但在2.0中使用的是res.body;
            if(res.errno == ERR_OK){
                this.seller = res.data; 
            }
            
        },(error)=>{
            console.log('error 404')
        })
    }
  }

</script>

<style>
@import url(./assets/icon.css);
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

</style>
