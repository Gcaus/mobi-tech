<template>
  <div class="home-container">
    <SideBar 
      @option="($event) => optionSelected = $event"
    />
    <Retirada v-show="optionSelected == 'retirada'"/>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import Retirada from '../views/Retirada.vue'
  export default {
    data() {
      return {
        optionSelected: ''
      }
    },
    components : {
      SideBar,
      Retirada
    },
    watch: {
    }
  }
</script>

<style lang="scss" >
.home-container {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #6A69FF;
}
</style>