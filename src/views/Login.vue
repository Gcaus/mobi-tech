<template>
  <div class="login-page">
    <div class="login-container">
      <div class="inputs-container">
        <div class="input-container">
          <p>ID</p>
          <input type="text" name="login-id" id="login-id" v-model="login_id">
        </div>
        <div class="input-container">
          <p>Senha</p>
          <input type="password" name="password-id" id="password-id" v-model="login_password">
        </div>
        <button type="button" class="button-login" @click="handleCLick">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        login_password: null,
        login_id: null
      }
    },
    methods: {
      handleCLick() {
        console.log('teste')
        if(this.login_id == '123456' && this.login_password == '123456') {
          this.$router.push({ path: "/" })
        }
      }
    }
  }
</script>

<style lang="scss" >
.login-page {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #6A69FF;
  align-items: center;
  justify-content: center;

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 23px;
    background-color: #F4FBFC;
    width: 676px;
    height: 448px;
    border-radius: 12px;

    .inputs-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 23px;
      .input-container {
        color: #000;
        font-size: 20px;
        line-height: normal;

        input {
          width: 434px;
          height: 25px;
          font-size: 16px;
        }
        input:focus {
          outline: none;
        }
      }
      .button-login {
        margin-top: 23px;
        cursor: pointer;
        color: #6A69FF;
        background-color: #000;
        width: 200px;
        height: 40px;
        border-style: none;
      }
    }
  }

}
</style>