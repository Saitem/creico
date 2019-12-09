<template>
  <div class="panel">
    
    <img src="https://cdn2.iconfinder.com/data/icons/office-38/24/office-46-256.png" @click="clear" alt="image-clear-rubber" />
    <div class="w-100"></div>
    <img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519672-178_Download-256.png" @click="download" alt="image-download" />
    
    
  </div>
</template>

<script>
import { bus } from '@/bus/bus'
  export default {
    data: () => ({
        isBtn: false,
    }),
    
    methods: {
        clear(){
          this.isBtn = true
          bus.$emit('clear', this.isBtn)  
        },
        
        download() {
          this.isBtn = true
          bus.$emit('download', this.isBtn)
        }
    }
  }
</script>

<style lang="scss" scoped>
   .panel{
       background-color: blue;
   }
  img{
    width: 30px;
  }
  
</style>