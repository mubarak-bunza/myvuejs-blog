<template>
  <div class="signin">
    <app-header />
    <hr>
    <app-signin />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/users/Header.vue'
import Contents from '@/components/users/Signin.vue'

export default {
  name: 'Signin',
  components: {
    'app-header': Header,
    'app-signin': Contents
  }
}
</script>
