<script>
import Home from "@/views/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
