<template>
  <div class="container-fluid">
      <template>
        <app-dashboard />
      </template>
  </div>
</template>

<script>
    import Dashboard from '@/components/auth-users/Dashboard.vue'

    export default {
        components: {
            'app-dashboard': Dashboard,
        },
        
    }
</script>

<style>

</style>