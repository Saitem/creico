<template>
    <mdb-container>
        <mdb-row class="justify-content-center pt-20">
            <mdb-col md='10'>
            <mdb-card class="purple-text grey lighten-4">
                <mdb-card-header class="pt-4 white">
                <mdb-card-title><strong>Reservation</strong></mdb-card-title>
                </mdb-card-header>
                <mdb-card-body>
                <mdb-row>
                    <mdb-col>
                    <mdb-input label="width" far icon="edit" v-model="width" />
                    <mdb-input  icon="edit" far  label="height" v-model="height"/>
                    </mdb-col>
                </mdb-row>
                </mdb-card-body>
                <mdb-card-footer class="d-flex white justify-content-end">
                  <mdb-btn 
                    @click='dispSize' 
                    color="secondary"
                  >
                  Go to drawpad
                  </mdb-btn>
                </mdb-card-footer>
            </mdb-card>
            
            </mdb-col>
        </mdb-row>
   </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow,  mdbCol, mdbInput, mdbCard, mdbCardHeader, mdbCardTitle, mdbCardFooter, mdbCardBody, mdbBtn } from 'mdbvue';

  export default {
    name: 'FormCreate',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbInput,
      mdbCard,
      mdbCardBody,
      mdbCardHeader,
      mdbCardFooter,
      mdbCardTitle,
      mdbBtn
    },
    data() {
      return {
        width: 0,
        height: 0
      } 
    },
  
    methods: {
      dispSize() {
        this.$store.commit('canvasWidth', this.width)
        this.$store.commit('canvasHeight', this.height)
        this.$router.push('drawpad')
      }
    }
  }
</script>


