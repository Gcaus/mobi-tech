<template>
  <div class="modal-container">
    <div class="modal-select">
      <div v-show="option == 'codProd'">
        <div class="title">
          <p>Busca por Cod. de Produto</p>
        </div>
        <div>
          <input type="text" class="searchBar" v-model="filterInput" @input="filterOptions">
        </div>
        <div class="options-container">
          <div class="option" @click="selectOption('478965')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>478965</p>
            </div>
          </div>
          <div class="option" @click="selectOption('123456')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>123456</p>
            </div>
          </div>
          <div class="option" @click="selectOption('456789')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>456789</p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="option == 'codPatri'">
        <div class="title">
          <p>Busca por Cod. de Patrimônio</p>
        </div>
        <div>
          <input type="text" class="searchBar" v-model="filterInput" @input="filterOptions">
        </div>
        <div class="options-container">
          <div class="option" @click="selectOption('478965')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>478965</p>
            </div>
          </div>
          <div class="option" @click="selectOption('123456')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>123456</p>
            </div>
          </div>
          <div class="option" @click="selectOption('456789')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>456789</p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="option == 'codCA'">
        <div class="title">
          <p>Busca por Cod. de CA</p>
        </div>
        <div>
          <input type="text" class="searchBar" v-model="filterInput" @input="filterOptions">
        </div>
        <div class="options-container">
          <div class="option" @click="selectOption('478965')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>478965</p>
            </div>
          </div>
          <div class="option" @click="selectOption('123456')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>123456</p>
            </div>
          </div>
          <div class="option" @click="selectOption('456789')">
            <div class="img-option">
              <img src="../assets/parafusadeira.png">
            </div>
            <div class="text">
              <p>Parafusadeira</p>
            </div>
            <div class="code">
              <p>456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filterInput: '',
      }
    },
    props: ['option'],
    methods: {
      selectOption(id) {
        this.$emit('closeModal')
      },
      filterOptions() {

      }
    }
  }
</script>

<style lang="scss" >
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(106, 105, 255, 0.60);

  .modal-select {
    width: 920px;
    height: 535px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      margin-top: 33px;
    }
    .searchBar {
      padding: 5px 20px 5px 13px;
      width: 805px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #000;
      background: #D9D9D9;
      
      &:focus {
        outline: none;
      }
    }

    .options-container {
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background: #e1e1e1;
        border: 0px none #ffffff;
        border-radius: 50px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #ffffff;
      }
      &::-webkit-scrollbar-thumb:active {
        background: #ffffff;
      }
      &::-webkit-scrollbar-track {
        background: #ededed;
        border: 0px none #ffffff;
        border-radius: 100px;
      }
      &::-webkit-scrollbar-track:hover {
        background: #ededed;
      }
      &::-webkit-scrollbar-track:active {
        background: #ededed;
      }
      &::-webkit-scrollbar-corner {
        background: transparent;
      }
      margin-top: 45px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: scroll;
      max-height: 370px;
      .option {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 15px;
        border: 1px solid #000;

        .code {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          padding: 34px 7px;
          background-color: #000;
          color: #FFF;
        }
      }
    }
  }
}
</style>