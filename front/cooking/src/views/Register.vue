<template>
  <section>
    <form @submit="checkInputs">
      <h1>Inscription</h1>
      <label>
        Email
        <input v-model="email" name="email" type="email" />
      </label>
      <div class="error" v-if="emailEmpty">
        Vous devez saisir une adresse e-mail
      </div>

      <label>
        Mot de passe
        <input v-model="password" name="password" type="password" />
      </label>
      <div class="error" v-if="passwordEmpty">
        Vous devez saisir un mot de passe
      </div>
      <div class="error" v-if="signInFailed">Echec d'enregistrement</div>
      <button>S'enregister</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      emailEmpty: false,
      passwordEmpty: false,
      signInFailed: false
    };
  },
  methods: {
    async checkInputs(event) {
      event.preventDefault();
      if (this.email == "") {
        this.emailEmpty = true;
      } else {
          this.emailEmpty = false;
      }
      if (this.password == "") {
        this.passwordEmpty = true;
      }
      else {
          this.passwordEmpty = false;
      }
      // If no errors
      if (!this.emailEmpty && !this.passwordEmpty) {
        console.log('Appel ok');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
form {
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  border: $borderStyle;
  border-radius: $border-radius;
  padding: $gutter;
  margin: $gutter;
  color: white;

  label {
    margin-bottom: $gutter;
  }
}
</style>