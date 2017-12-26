<template>
    <main class="row main">
        <section
          class="is-scrollable navbar">
          <navbar></navbar>
        </section>
        <section class="is-scrollable content" ref="main">
          <router-view></router-view>
        </section>
        <section>
          <phone></phone>
        </section>
    </main>
</template>

<script>
import Navbar from './components/navbar.vue';
import Phone from './components/phone.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: ''
    };
  },
  components: {
    Phone,
    Navbar
  }
};
</script>

<style scoped>
  .main {
    height: 100%;
    overflow: hidden;
  }
  .navbar{
    float: left;
    width: 16%;
    height: 100%;
    overflow: auto;
    min-width: 140px;
    padding-left: 0;  
  }
  .content {
    float: left;
    width: 50%;
    overflow: auto;
    height: 100%;
    padding-left: 50px;
  }

</style>