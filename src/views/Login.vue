<template>
<div>
    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="pass">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="login">Acceder</button>
    </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            user: '',
            pass: ''
        }
    },
    // computed: {},
    methods: {
        login(){
            console.log(firebase.auth)
            console.log(firebase.default.auth)
            firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
            .then((resp)=> {
                console.log(resp, result)
                this.$router.push('/Home')
            })
            .catch(function(error){
                let errorCode= error.code;
                let errorMessage= error.Message;
                console.log(errorCode, errorMessage)
            })
        }
    },
    // components: {},
}
</script>

<style scoped>
    
</style>