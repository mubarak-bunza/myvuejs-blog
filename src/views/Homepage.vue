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
import Contents from '@/components/auth-users/Contents.vue'

export default {
  name: 'Home',
  components: {
    'app-header': Header,
    'app-contents': Contents
  }
}
</script>
