<template>
  <div class="sidebar-container">
    <div class="buttons-container">
      <div :class="optionSelected == 'retirada' ? 'button selected' : 'button'" @click="selectOption('retirada')">
        <img src="../assets/sair.svg">
        <p>Retirada</p>
      </div>
      <div :class="optionSelected == 'devolucao' ? 'button selected' : 'button'" @click="selectOption('devolucao')">
        <img src="../assets/devolucao.svg">
        <p>Devolução</p>
      </div>
      <div :class="optionSelected == 'desvio' ? 'button selected' : 'button'" @click="selectOption('desvio')">
        <img src="../assets/voltar.svg">
        <p>Desvio</p>
      </div>
      <div :class="optionSelected == 'estoque' ? 'button selected' : 'button'" @click="selectOption('estoque')">
        <img src="../assets/estoque.svg">
        <p>Estoque</p>
      </div>
      <div :class="optionSelected == 'histRetirada' ? 'button selected' : 'button'" @click="selectOption('histRetirada')">
        <img src="../assets/hist-retirada.svg">
        <p>Hist. de retiradas</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        optionSelected: null,
      }
    },
    components: {
      
    },
    methods: {
      selectOption(option) {
        this.optionSelected = option
        this.$emit('option', this.optionSelected)
      }
    }
  }
</script>

<style lang="scss">
.sidebar-container {
  border-radius: 0 12px 12px 0;
  width: 250px;
  height: 100%;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 14px;
    .button {
      cursor: pointer;
      padding-left: 10px;
      width: 160px;
      height: 42px;
      background-color: #000;
      border-radius: 6px;
      color: #6A69FF;
      display: flex;
      gap: 11px;
      align-items: center;
    }
  }
  .selected {
    background: #6A69FF !important;
    color: #000 !important;
  }
}
</style>