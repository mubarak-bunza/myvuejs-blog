<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-6">
            <form>                
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="name">Name</label>
                        <input v-model="regForm.name" type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input v-model="regForm.email" type="email" class="form-control" id="email">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="profession">Profession</label>
                        <input v-model="regForm.profession" type="text" class="form-control" id="profession">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="password">Password <small>(must be greater than 5 chars)</small></label>
                        <input v-model="regForm.password" type="password" class="form-control" id="password">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="onRegister">Register</button>
                
            </form>
          </div>
      </div>
  </div>
</template>

<script>
    // import axios from 'axios'
    import firebase from 'firebase'
    import axios from '@/axios-auth'
    
    export default {
        data(){
            return {
                regForm: {
                    name: null,
                    email: null,
                    profession: null,
                    password: null
                }
            }
        },
        methods: {
            onRegister(){
                // if(this.regForm.name == null || this.regForm.email == null || this.regForm.profession == null || this.regForm.password == null){ 
                //     // console.log(validateInputs())
                //     alert('field can not be empty');
                // }else{
                //     axios.post('https://myvuejs-blog.firebaseio.com/users.json', this.regForm)
                //     .then(function(res){
                //         console.log(res);
                //     }).catch(function(error){
                //         console.log(error)
                //     })
                // }

                // firebase.auth().createUserWithEmailAndPassword(this.regForm.email, this.regForm.password).then((user) => {
                //     this.$router.replace('/signin')
                // }).catch((err) => {
                //     alert(err.message)
                // });
                
                this.$store.dispatch('signup', this.regForm)
            },
            // validateInputs (){
            //     // return (this.name == '' || this.email == '' || this.profession == '' || this.password == '') ? true : false
            //     return 'sdsdd'
            // },   
        }
    }
</script>

<style>

</style>