<template>
  <section>
    <form @submit="checkInputs">
      <Label>
        Login
        <input v-model="login" name="login"
      /></Label>
      <div class="error" v-if="loginEmpty">Vous devez saisir un identifiant !</div>
      <Label>
        Mot de passe
        <input v-model="password" name="password" type="password"
      /></Label>
      <div class="error" v-if="passwordEmpty">Vous devez saisir un mot de passe !</div>
      <div class="error" v-if="loginFailed">Echec de connexion !</div>
      <button>Se connecter</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/userService";
import storage from '../plugins/Storage'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "loginView",
  data() {
    return {
      login: "",
      password: "",
      loginEmpty: false,
      passwordEmpty: false,
      loginFailed: false
    };
  },
  methods: {
    async checkInputs(event) {
      event.preventDefault();
      if (this.login == '') {
        this.loginEmpty = true;
      }
      if (this.password == '') {
        this.passwordEmpty = true;
      }
      // If no errors
      if (!this.passwordEmpty && !this.loginEmpty) {
        let userData = await userService.login(this.login, this.password);

        // Verify if connected
        // if yes
        if(userData) {
          // store it
          this.loginFailed = false
          storage.set('userData', userData);
          console.log('okay');

        } else {
          this.loginFailed = true
          console.log('failed');
        }
        
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
form {
  background-color: lightblue;
  box-shadow: 8px 8px 12px #aaa;
  display: flex;
  flex-direction: column;
  border: $borderStyle;
  border-radius: $border-radius;
  padding: $gutter;
  margin: $gutter;

  label {
    margin-bottom: $gutter;
  }
}
</style>