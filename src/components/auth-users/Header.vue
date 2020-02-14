<template>
  <header class="container my-3">
    <nav class="">
      <span class="logo">
        <router-link to="/homepage">MyVueJs Blog</router-link>
      </span>
      <ul class="float-right">
        <li>
          <button class="btn btn-default" @click="signout">Sign out</button>
        </li>
        <li class="">
          <!-- <router-link to="#">
             <v-chip
              class="ma-3"
              color="red"
              outlined
              pill
            >
              {{name}}
              <v-icon left>mdi-account-outline</v-icon>
            </v-chip>
          </router-link> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import firebase from 'firebase'
  export default {
    methods: {
      signout () {
        // firebase.auth().signOut().then(() => {
        //   this.$router.replace('signin')
        // })
        this.$store.dispatch('signout')
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

    @media(max-width: 375px){
      display: block;
      text-align: center;
    }
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