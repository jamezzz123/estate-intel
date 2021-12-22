<template>
  <div class="container">
    <div class="row  vh-100">
      <div class="col-5 m-auto">
        <div class="">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only ">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control my-2"
              placeholder="Email address"
              v-model="user.email"
              
            />
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control my-2"
              placeholder="Password"
              v-model="user.password"
            />
            
            <button @click.prevent="submit()" class="btn btn-lg btn-primary btn-block my-2" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      user: {
        email:'test@test.com',
        password:'secret'

      }
    }
  },
  methods:{
    submit(){
      if(this.user.email === 'test@test.com' && this.user.password === 'secret'){
        this.$router.push('/shape');
      }
    }
  }
}
</script>

<style scoped>
.form-signin{
  width: 100%;
max-width: 330px;
padding: 15px;
margin: auto;
}
</style>
