<template>
  <div>
    <Clock />
  </div>
</template>

<script>
import Clock from './components/Clock/clock.vue'

export default {
  name: 'App',

  components: { Clock }
}
</script>

<style lang="sass">
@font-face
  font-family: 'font'
  src: url('./assets/fonts/Lato.ttf')

*
  font-family: 'font'
  box-sizing: border-box
  transition: all ease .3s

body
  padding: 0px
  margin: 0px
</style>
