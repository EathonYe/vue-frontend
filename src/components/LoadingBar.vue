<template>
  <div class="y-loadingBar" :style="{
    width: percentWidth,
    height: percentHeight,
    backgroundColor: color,
    transitionDuration: duration/1000+'s',
    transitionTimingFunction: timing
    }"></div>
</template>

<script>
export default {
  name: 'LoadingBar',
  data () {
    return {
      width: 0,
      height: 3,
      color: '#248ad4',
      timer: '',
      duration: 500,
      timing: 'linear'
    }
  },
  computed: {
    percentWidth () {
      return this.width + '%'
    },
    percentHeight () {
      return this.height + 'px'
    }
  },
  methods: {
    start () {
      this.height = 3
      this.timer = setInterval(() => {
        this.width += this.width < 95 ? 5 : 0
      }, this.duration / 2)
    },
    finished () {
      this.timing = 'ease'
      this.color = '#5cb85c'
      this.width = 100
      this.$nextTick(() => {
        this.destroy()
      })
    },
    error () {
      this.timing = 'ease'
      this.color = '#d9534f'
      this.width = 100
      this.$nextTick(() => {
        this.destroy()
      })
    },
    update () {

    },
    cancelTimer () {
      clearInterval(this.timer)
    },
    reset () {
      this.timing = 'linear'
      this.color = '#248ad4'
      this.width = 0
    },
    destroy () {
      this.cancelTimer()
      setTimeout(() => {
        this.height = 0
        setTimeout(() => {
          this.reset()
        }, this.duration)
      }, this.duration + 500)
    }
  }
}
</script>

<style scoped>
.y-loadingBar {
  position: fixed;
  left: 0;
  top: 0;
  transition-property: width, height, color;
}
</style>
