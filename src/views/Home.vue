<template>
  <div class="home">
    <app-header />
    <hr>
    <app-contents />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/users/Header.vue'
import Contents from '@/components/users/Contents.vue'

export default {
  name: 'Home',
  components: {
    'app-header': Header,
    'app-contents': Contents
  }
}
</script>
