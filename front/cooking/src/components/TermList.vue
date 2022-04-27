<template>
  <select v-if="terms.length" v-model="selectedOption" @change="selectTerm">
    <option value="0">{{ label }}</option>
    <option v-for="term in terms" :key="term.id" :value="term.id">
      {{ term.name }}
    </option>
  </select>
</template>

<script>
import recipeService from "../services/recipeService.js";

export default {
  async created() {
    this.terms = await recipeService.loadTerms(this.taxonomy);
  },
  name: "TermList",
  data() {
    return {
      terms: [],
      selectedOption: 0,
    };
  },

  props: {
    taxonomy: String,
    label: String,
  },

  methods: {
    selectTerm(event) {
      event.preventDefault();
      this.$emit('recipe-term-selected', 
      {
        termId: this.selectedOption,
        taxonomy: this.taxonomy,
      });
    },
  },
};
</script>