<template>
  <button @click="upClick" :class="parity">
    {{label}} - {{ clicks }}
  </button>
</template>

<script>
export default {
  props: {
    label: String
  },
  data() {
    return {
      clicks: 0,
      parity: "even",
    };
  },
  methods: {
    upClick(e) {
      e.preventDefault();

      this.clicks++;

      if (this.clicks % 2 == 0) {
        // if pair
        this.parity = "even";
      } else {
        this.parity = "odd";
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  transition: all 1.5s;

  &.even {
    background-color: lightgreen;
  }

  &.odd {
    background-color: red;
    font-size: 2rem;
    transform: rotateX(360deg);
  }
}
</style>
