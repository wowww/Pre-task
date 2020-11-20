<template>
  <div id="app">
    <div id="nav">
      <NavBar />
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar"
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>

</style>
