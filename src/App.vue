<template>
  <div>
    <router-view/>
    <template>
      <v-card height="50">
        <v-footer
          absolute
          class="font-weight-medium"
          color = "purple darken-4"
        >
          <v-col
            class="text-center"
            cols="12"
          >
          &copy;  {{ new Date().getFullYear() }} — <strong>M.A.Bunza</strong>
          </v-col>
        </v-footer>
      </v-card>
    </template>
  </div>
</template>

<script>
  export default {
    created(){
      this.$store.dispatch('tyrAutoLogging')
    }
  } 
</script>

<style lang="scss">

</style>
