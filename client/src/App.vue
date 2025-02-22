<template>
  <NavBar />
  <router-view class="app-view"/>
  <FooterBar />
</template>

<script>
import FooterBar from './components/FooterBar.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  width: 100%;
  background: #cccccc;
  height: 100vh;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-view {
  height: calc(100vh - 120px);
  margin: 0px;
  padding: 0px;
}
</style>
