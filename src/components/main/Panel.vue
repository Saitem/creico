<template>
  <div class="panel">
    <i class="fas fa-broom" @click="clear" ></i> 
    <div class="w-100"></div>
    <i class="fas fa-download"  @click="download"></i>
    <div class="w-100"></div>
    <i class="fas fa-palette" @click='showColors = !showColors'></i>  
      <div 
        class="colors"
        v-for="color in colors"
        :key="color"
        v-show="showColors"
      >
      <div 
        class="color"
        :style="{background: color.hex}"
        @click="addColor(color.hex)"
      ></div>  
    </div>
    <div class="w-100"></div>
    <i class="fas fa-paint-brush" @click="showSizeBrush = !showSizeBrush"></i>
      <input 
        v-model="sizeBrush"
        @click="sizer"
        v-show="showSizeBrush"
        type="range" 
        min='1' 
        max='100'
      >
    <div class="w-100"></div>
    <i class="fas fa-undo-alt" @click="undo"></i>
    <div class="w-100"></div>
    <i class="fas fa-redo-alt" @click="redo"></i>
  </div>
</template>

<script>
import { bus } from '@/bus/bus'
  export default {
    data: () => ({
        isBtn: false,
        colorBrush: '',
        sizeBrush: 10,
        showSizeBrush: false,
        showColors: false,
        colors: [
          {
            hex: 'red'
          },
          {
            hex: 'blue'
          },
          {
            hex: 'yellow'
          },
          {
            hex: 'green'
          },
          {
            hex: 'grey'
          },
          {
            hex: 'black'
          },
        ],
        
    }),

    methods: {
        addColor(hex) { 
          this.colorBrush = hex
          bus.$emit('color', this.colorBrush)
        },

        sizer() {
          bus.$emit('sizer', this.sizeBrush)
        },

        clear(){
          this.isBtn = true
          bus.$emit('clear', this.isBtn)  
        },
        
        download() {
          this.isBtn = true
          bus.$emit('download', this.isBtn)
        },

        undo(){
          this.isBtn = true
          bus.$emit('undo', this.isBtn)
        },

        redo(){
          this.isBtn = true
          bus.$emit('redo', this.isBtn)
        }
    }
  }
</script>

<style lang="scss" scoped>
  .panel{
    cursor: pointer;
  }
  img{
    width: 30px;
  }
  .colors {
        background-color: rgb(224, 224, 224);
        width: 200px;
        height: 30px;
        .color{
          width: 28px;
          height: 28px;
          border-radius: 3px;
          display: inline-block;
        }
    }
  
</style>