<template>
  <section
    class="panel animate__animated animate__faster"
    :class="{
      animate__slideInUp: panel,
      animate__slideOutDown: !panel
    }"
  >
    <div v-if="location !== null" class="grid">
      <article class="article">
        <p>Country</p>
        <h2>{{ location.country_name }} / {{ location.city }}</h2>
      </article>

      <article class="article">
        <p>Year</p>
        <h2>{{ chronos.year() }}</h2>
      </article>

      <article class="article">
        <p>Month</p>
        <h2>{{ chronos.month() }}</h2>
      </article>

      <article class="article">
        <p>Day of week</p>
        <h2>{{ chronos.day() }}</h2>
      </article>
    </div>
  </section>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CtrlPanel',

  setup() {
    const store = useStore()

    return {
      panel: computed(() => store.getters.panelStatus),
      location: computed(() => store.getters.getLocation),
      chronos: store.getters.getChronos
    }
  }
}
</script>

<style scoped>
.panel {
  position: fixed;
  z-index: 100;
  bottom: 0;
  background: #00000090;
  width: 100vw;
  height: 45vh;
  backdrop-filter: blur(7px);
}

.grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2px;
  row-gap: 2px;
  justify-content: center;
  align-items: center;
}

.article {
  padding: 20px;
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 500px) {
  .grid {
    display: flex;
    flex-flow: column;
  }

  .article {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
  }
}

@media screen and (max-width: 300px) {
  .grid {
    display: flex;
    flex-flow: column;
  }

  .article {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    word-break: break-all;
    font-size: 13px;
  }
}
</style>
