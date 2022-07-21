<template>
    <div class="form-wrap">
   <form class="register">
      <p class="login-register">
        Already have an account
      <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
       </p>
       <h2>Create Your FireBlog Account</h2>
       <div class="inputs">
         <div class="input">
           <input type="text" placeholder="FirstName" v-model="firstName">
           <user class="icon"/>
         </div>
         <div class="input">
           <input type="text" placeholder="LastName" v-model="lastName">
           <user class="icon"/>
         </div>
         <div class="input">
           <input type="text" placeholder="username" v-model="userName">
           <user class="icon"/>
         </div>
         <div class="input">
           <input type="text" placeholder="Email" v-model="email">
           <email class="icon"/>
         </div>
          <div class="input">
           <input type="password" placeholder="password" v-model="password">
           <password class="icon"/>
         </div>
         <div v-show="error" class="error">{{this.errorMsg}}</div>
       </div>
        <button @click.prevent="register">Signin</button>
        <div class="angle"></div>
   </form>
   <div class="background"></div>

  </div>
</template>

<script>

import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"
import firebase from "firebase/app"
import db from "../firebase/firebaseInit"
import "firebase/auth"
export default {
  data()
  {
    return{
      firstName:"",
      lastName:"",
      userName:"",
      email:"",
      password:"",
      error:null,
      errorMsg:""
    }
  },
  methods:{
     async register()
     {
       if(this.email!=="" && this.password!=="" && this.firstName && this.lastName!=="" && this.userName!=="")
       {
         this.error=false
         this.errorMsg=""
         const firebaseAuth =await firebase.auth()
         const createUser= firebaseAuth.createUserWithEmailAndPassword(this.email,this.password)
         const result = await createUser
         const database = db.collection("users").doc(result.user.uid)
         await database.set({
           firstName: this.firstName,
           lastName: this.lastName,
           userName: this.userName,
           email: this.email

         })
         this.$router.push({name: 'Home'})
         return;
       }
       this.error=true
       this.errorMsg="Please enter all the values"

     }
  },
 name: "Register",
 components:{
   email,password,user
 }
}
</script>

<style lang= "scss" scopped>
   .register
   {
     max-width: 350px;

   }
</style>
