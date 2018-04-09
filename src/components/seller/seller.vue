<template>

</template>
<script>

export default{
    data () {
      return {
        seller: {}
      }
    },
    created(){
        this.$http.get("/api/seller").then((res)=>{
            res=res.body;
            if(res.errno == 0){
                this.seller = res.data; 
            }
            
        },(error)=>{
            console.log('error 404')
        })
    }
}
    
</script>
<style scoped lang="less">
    .header{
        .header-wrap{
            img{
                height: 64px;
                width: 64px;
            }
        }
    }
</style>
