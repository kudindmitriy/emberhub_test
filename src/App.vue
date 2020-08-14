<template>
  <div id="app">
    <h2>Emerhub form</h2>
    <PostForm/>
  </div>
</template>

<script>
import PostForm from "./components/PostForm";

export default {
  name: "app",
  components: {PostForm}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
</style>
