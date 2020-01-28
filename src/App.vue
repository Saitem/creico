<template>
  <div id="app">
      <Header/>
       <router-view class='main' />
        <!-- <mainshell/> -->
      <Footer/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
// import mainshell from '@/components/mainshell'
import Footer from '@/components/layouts/Footer'
// import FormCreate from '@/components/main/FormCreate'

export default {
  components: {Header,/* mainshell,*/ Footer, /*FormCreate*/}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

.main { 
  padding-top: 30px;
}

</style>
