<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-6">
            <form>
                
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input v-model="loginForm.email" type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input v-model="loginForm.password" type="password" class="form-control" id="inputPassword4">
                    </div>
                </div>
                <button @click.prevent="signin" type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
    import axios from '@/axios-auth'
    import firebase from 'firebase'
    
    export default {
        data(){
            return {
               loginForm: {
                   email: null,
                   password: null
               },
               users: []
            }
        },
        created() {
            // axios.get('https://myvuejs-blog.firebaseio.com/users.json')
            // .then(res => {
            //     for(let key in res.data){
            //         const user = res.data[key]
            //         user.id = key 
            //         this.users.push(user)
            //     }
            // }).catch(error => {
            //     console.log(error)
            // })
        },
        methods: {           
            signin(){
                // for(let i = 0; i < this.users.length; i++){
                //     if(this.loginForm.email == this.users[i].email && this.loginForm.password == this.users[i].password){
                //         console.log('yes')
                //         this.$router.push({path: '/homepage', params: {user: this.users}});
                //         return
                //     }else{
                //         alert('Login failed');
                //         return
                //     }
                // }

                // firebase.auth().signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
                // .then((user) => {
                //     this.$router.replace('/homepage')
                // }).catch((err) => {
                //     alert(err.message)
                // })

               this.$store.dispatch('signin', {email: this.loginForm.email, password: this.loginForm.password})
            }
        }
    }
</script>

<style>

</style>