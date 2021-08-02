<script>
import firebase from 'firebase/app'
export default {
  name: 'Register',
  data: () => {
    return {
      user: '',
      password: '',
      error: '',
    }
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user, this.password)
        .then(() => {
          // Signed in
          this.$emit('updateShowValue', true)
        })
        .catch((error) => {
          this.error = error.message
          console.log(error)
        })
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(() => {
          // Signed in
          this.$emit('updateShowValue', true)
        })
        .catch((error) => {
          this.error = error.message
          console.log(error)
        })
    },
  },
}
</script>

<template>
  <div class="register">
    <div class="heading">
      <h1>Welcome to Aspire</h1>
      <h3>Please login or signup</h3>
    </div>
    <form>
      <p class="group">
        <label for="amount">User:</label>
        <input id="amount" v-model="user" placeholder="User Email" required />
      </p>
      <p class="group">
        <label for="loan">Password:</label>
        <input id="loan" v-model="password" placeholder="Password" required />
      </p>
      <div class="submit">
        <div class="space"></div>
        <div class="buttons">
          <button class="btn" @click="signUp">SIGN UP</button>
          <button class="btn login" @click="login">LOGIN</button>
        </div>
      </div>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
.register {
  padding: 10px;
  .heading {
    text-align: center;
  }
}
.group {
  display: flex;
  label {
    flex: 1;
    text-align: start;
    font-weight: bold;
    font-size: 18px;
  }
  input {
    flex: 1;
    text-align: start;
    padding: 5px;
  }
}

.submit {
  display: flex;
  margin-top: 50px;
  .space {
    flex: 1;
  }
  .buttons {
    flex: 1;
    text-align: end;
  }
  .btn {
    background-color: #01d167;
    border: #01d167;
    color: black;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
    .login {
      background-color: #121536;
      border: #121536;
      color: white;
    }
  }
}
.error {
  color: rgb(172, 27, 27);
  font-size: 20px;
  text-align: center;
}
</style>
