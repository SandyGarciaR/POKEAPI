import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemos', {
    state: () => ({ url: null }),
  actions: {
    addPokemon(url) {
      this.url = url;
    },
  },
})