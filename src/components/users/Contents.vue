<template>
  <div class="container-fluid">
      <template>
        <app-dashboard />
      </template>
  </div>
</template>

<script>
    import Dashboard from '@/components/users/Dashboard.vue'

    export default {
        components: {
            'app-dashboard': Dashboard,
        },
        data(){
            return {
                contentStatus: false
            }
        },
        computed: {
          currentPage(){
            return this.$route.name;
          }
        }
    }
</script>

<style>

</style>