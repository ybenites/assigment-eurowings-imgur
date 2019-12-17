<template>
  <div id="app">
    <NavBar></NavBar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <footer></footer>
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue';
  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>
<style lang="scss">

</style>
