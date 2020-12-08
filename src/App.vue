<template>
  <Clock />
  <CtrlPanel />
</template>

<script>
import { reactive, defineAsyncComponent as lazy } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'

export default {
  name: 'App',

  components: {
    CtrlPanel: lazy(() => import('./components/CtrlPanel/ctrl-panel.vue')),
    Clock: lazy(() => import('./components/Clock/clock.vue'))
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
