<template>
  <div class="withdrawal-container">
    <div class="material-identification">
      <div class="title">
        <p>Identificação do material <span class="required">*</span></p>
      </div>
      <div class="buttons-container">
        <div @click="openModalWithdrawal('codProd')"><p>Cód. Prod.</p></div>
        <div @click="openModalWithdrawal('codPatri')"><p>Cód. Patri.</p></div>
        <div @click="openModalWithdrawal('codCA')"><p>Cód. CA</p></div>
      </div>
    </div>
    <div class="material-identification">
      <div class="title">
        <p>Identificação do material <span class="required">*</span></p>
      </div>
      <div class="buttons-container">
        <div><p>Facial</p></div>
        <div><p>ID</p></div>
        <div><p>Código</p></div>
      </div>
    </div>
    <div class="material-identification">
      <div class="title">
        <p>Local da aplicação</p>
      </div>
      <div class="input-local">
        <input type="text">
      </div>
    </div>
    <div class="material-identification">
      <div class="title">
        <p>Local da aplicação</p>
      </div>
      <div class="input-local">
        <input type="text">
      </div>
    </div>
    <div v-show="modalIsopen" class="modal-page">
      <ModalRetirada 
        :option="optionModalSelected"
        @closeModal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import ModalRetirada from '../components/ModalRetirada.vue'
  export default {
    data() {
      return {
        modalIsopen: false,
        optionModalSelected: null
      }
    },
    components: {
      ModalRetirada
    },
    methods: {
      closeModal() {
        this.modalIsopen = false
      },
      openModalWithdrawal(option) {
        this.optionModalSelected = option
        this.modalIsopen = true
      }
    }
  }
</script>

<style lang="scss" >
.withdrawal-container {
  width: 73%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .material-identification {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 576px;

    .required {
      color: #F32039;
    }
    .buttons-container {
      display: flex;
      justify-content: center;
      gap: 12px;
    
      div {
        border-radius: 3px;
        cursor: pointer;
        background-color: black;
        color: #FFFFFF;
        display: flex;
        width: 170px;
        height: 35px;
        align-items: center;
        justify-content: center;
      }
    }
    .input-local {
      input {
        width: 548px;
        height: 22px;
      }
    }
  }
}
</style>