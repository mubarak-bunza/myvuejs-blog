<template>
    <div class="card">
        <div class="card-header">
            <p>Welcome {{user.name}}!</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <router-link to="/homepage">Home</router-link>
            </li>
            <!-- <li class="list-group-item">Profile</li> -->
            <li class="list-group-item">
                <router-link to="/all-articles">All Articles</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            user(){
                return !this.$store.getters.user ? false : this.$store.getters.user
            }
        },
        created(){
            this.$store.dispatch('fetchUser')
        }
    }
</script>

<style>
    .router-link-active {
        color: brown
    }
</style>