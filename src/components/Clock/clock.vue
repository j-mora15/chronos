<template>
  <div class="clock">
    <div class="date">
      <div>{{ day || 'Chronos' }}</div>
      <div>{{ numberDay || '-' }}</div>
      <div>{{ month || 'Desktop' }}</div>
      <div>{{ year || 2019 }}</div>
    </div>

    <div class="hours">
      <div>{{ hour || '12' }}</div>
      <div>{{ min || '00' }}</div>
      <div>{{ sec || '00' }}</div>
    </div>

    <div class="meridiem">
      <div>{{ meridiem }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',

  data: () => ({
    // Date Area
    day: undefined,
    numberDay: undefined,
    month: undefined,
    year: undefined,

    // Hours Area
    hour: undefined,
    min: undefined,
    sec: undefined,

    // Meridiem Area
    meridiem: 'Ante Meridiem'
  }),

  mounted () {
    setInterval(() => {
      this.gear()
    }, 1000)
  },

  methods: {
    gear () {
      // Date Area
      this.day = this.$chronos.day()
      this.numberDay = this.$chronos.numberDay()
      this.month = this.$chronos.month()
      this.year = this.$chronos.year()

      // Hours Areas
      this.hour = this.$chronos.hour()
      this.min = this.$chronos.min()
      this.sec = this.$chronos.sec()
      this.meridiem = this.$chronos.meridiem()
    }
  }
}
</script>

<style lang="sass" scoped>
.clock
  display: flex
  width: 100vw
  height: 100vh
  flex-flow: column
  justify-content: space-between
  padding: 10px
  background: black
  user_select: none

.date
  display: flex
  flex-flow: row
  justify-content: center
  padding: 10px
  color: white
  font-size: 20px
  border-radius: 10px
  & > div
    padding: 5px

.hours
  display: flex
  justify-content: center
  & > div
    display: flex
    justify-content: center
    align-items: center
    background: black
    color: white
    width: 200px
    height: 200px
    font-size: 80px
    border-radius: 10px
    box-shadow: 0px 0px 7px grey
    &:first-child
      margin: 0px 20px 0px 0px
    &:nth-child(2)
      margin: 0px 20px 0px 0px

.meridiem
  color: white
  display: flex
  justify-content: center
  font-size: 20px
  padding-top: 10px

@media screen and (max-width: 640px)
  .clock
    justify-content: center
    align-items: center

  .date
    font-size: 15px

  .hours
    flex-flow: column
    width: auto
    & > div
      width: 130px
      height: 130px
      margin: 0px 0px 0px 0px
      &:first-child
        margin: 0px 0px 10px 0px
      &:nth-child(2)
        margin: 0px 0px 10px 0px

  .meridiem
    font-size: 15px
</style>
