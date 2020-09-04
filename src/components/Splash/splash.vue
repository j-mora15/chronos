<template>
  <div class="container animate__animated" v-if="splashState">
    <img :src="require('@/assets/images/chronos.png')" alt="Chronos" class="logo animate__animated animate__jackInTheBox animate__faster"/>
  </div>
</template>

<script>
export default {
  name: 'Splash',

  mounted () {
    const el = this.$el

    setTimeout(() => {
      console.log(el.children[0])
      el.classList.remove('animate__jackInTheBox')
      el.classList.add('animate__shakeX')
    }, 2000)

    setTimeout(() => {
      el.classList.add('animate__fadeOut')
    }, 3000)

    setTimeout(() => {
      this.$store.dispatch('toggleSplash')
    }, 5000)
  },

  computed: {
    splashState () {
      return this.$store.getters.getSplashState
    }
  }
}
</script>

<style lang="sass">
.container
  transition: all ease .3s
  position: fixed
  z-index: 10000
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: black
  display: flex
  flex-flow: row
  justify-content: center
  align-items: center
  & > img
    padding: 30px
    border-radius: 30px
</style>
