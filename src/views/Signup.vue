<template>
  <div class="signup">
    <app-header />
    <hr>
    <app-signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/users/Header.vue'
import Contents from '@/components/users/Signup.vue'

export default {
  name: 'Signin',
  components: {
    'app-header': Header,
    'app-signup': Contents
  }
}
</script>
