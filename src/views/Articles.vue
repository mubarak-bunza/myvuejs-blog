<template>
  <div class="home">
    <app-header />
    <hr>
    <app-contents />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/auth-users/Header.vue'
import Articles from '@/components/auth-users/Articles.vue'

export default {
  name: 'Home',
  components: {
    'app-header': Header,
    'app-contents': Articles
  }
}
</script>
