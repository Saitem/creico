<template>
    <div class="main container w-100 p-3 z-depth-1">
        <canvas 
        ref="canv"
        @mousemove="mousemove"
        @mousedown="mousedown"
        @mouseup="mouseup"
        />
        <!-- <button @click='clear'>clear</button> -->
        <!-- <button @click="download">Download</button> -->
    </div>
</template>

<script>
import { getCoords } from '@/utils/getCoords'
import { clear } from '@/utils/clear'
import { download } from '@/utils/load'
import { bus } from '@/bus/bus.js'

export default {
    data:() => ({ 
        canv: null,
        ctx: null,
        isDraw: false,
        startX: 0,
        startY: 0,
        isBtn: null
    }),

    mounted(){
        this.canv = this.$refs.canv
        this.ctx = this.canv.getContext('2d')
        this.canv.width = this.canv.offsetWidth
        this.canv.height = this.canv.offsetHeight
    },

    created() {
        bus.$on('clear', data => {
            this.isBtn = data
            if (this.isBtn) clear(this.ctx, this.canv.width, this.canv.height)
        })

        bus.$on('download', data => {
            this.isBtn = data
            if (this.isBtn) download(this.canv)
        })
    },

    methods: {
        mousemove(e) {
            let [x, y] = getCoords(e, this.canv)
            if(this.isDraw == true) {
                this.ctx.beginPath()
                this.ctx.moveTo(this.startX, this.startY)
                this.ctx.lineTo(x, y)
                this.ctx.lineWidth = 10
                this.ctx.lineCap = 'round'
                this.ctx.lineJoin = 'round'
                this.ctx.strokeStyle = 'black'
                this.ctx.stroke()

                this.startX = x
                this.startY = y
            }
        },

        mousedown(e) {
            let [x, y] = getCoords(e, this.canv)

            this.isDraw = true

            this.startX = x
            this.startY = y
        },

        mouseup(e){
            let [x, y] = getCoords(e, this.canv)
            x = 0
            y = 0
            if(this.isDraw){
                this.startX = x
                this.startY = y
                this.isDraw = false
            }
        },

    //    download(){
    //        download(this.canv)
    //    },
    },
   
    
}
</script>

<style lang="scss">
.main {
    height: 700px;
    canvas{
        width: 100%;
        height: 100%;
    }
}
</style>