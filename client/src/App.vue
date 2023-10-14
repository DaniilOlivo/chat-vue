<template>
  <HeaderStatus :user="user" @clickRegister="openRegister" @clickLogin="openLogin" @exitAccount="exitAccount"></HeaderStatus>
  <main>

  </main>
  <ModalWindow :show="forms.register" @closeModal="closeRegister">
    <FormBase titleBtn="Регистрация" url="/auth/register" @closeForm="closeRegister"></FormBase>
  </ModalWindow>

  <ModalWindow :show="forms.login" @closeModal="closeLogin">
    <FormBase titleBtn="Войти" url="/auth/login" @closeForm="closeLogin"></FormBase>
  </ModalWindow>
</template>

<script>
import HeaderStatus from './components/HeaderStatus.vue';
import ModalWindow from './components/ModalWindow.vue';
import FormBase from './components/forms/FormBase.vue';

export default {
  name: 'App',
  components: {
    HeaderStatus,
    ModalWindow,
    FormBase
  },
  data() {
    return {
      user: null,
      forms: {
        login: false,
        register: false
      }
    }
  },
  methods: {
    openRegister() {
      this.forms.register = true
    },
    openLogin() {
      this.forms.login = true
    },
    closeRegister(user) {
      this.forms.register = false
      if (user) this.user = user
    },
    closeLogin(user) {
      this.forms.login = false
      if (user) this.user = user
    },
    exitAccount() {
      this.user = null
    }
  }  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 800px;
  min-height: 400px;
  box-shadow: 0 5px 5px rgba(12, 12, 40, 0.3);
  border-radius: 0 0 10px 10px;
  margin: auto;
}
</style>
