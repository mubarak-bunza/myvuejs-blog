<template>
  <header class="container mt-3">
    <nav class="">
      <span class="logo">
        <router-link to="/">MyVueJs Blog</router-link>
      </span>
      <ul class="float-right">
        <li>
          <router-link to="/signin">Sign in</router-link>
        </li>
        <li class="create-account">
          <router-link to="/signup">Create Account</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      auth(){
        return this.$store.getters.isAuthenticated
      }
    }    
  }
</script>

<style lang="scss" scoped>

  .logo {
    font-weight: bold;
    color: rgb(27, 24, 24);
  }

  .logo a {
    text-decoration: none;
    color: rgb(27, 24, 24);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 10px;
  }

  li a {
    text-decoration: none;
    color: rgb(27, 24, 24);
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #1e4ccc;
  }

  .create-account {
      border: 2px solid rgb(20, 20, 187);
      padding: 3px 10px;

      &:hover {
        background-color: rgb(229, 229, 236);
      }
  }
</style>