<template>
    <div>
        <div class="row q-mt-lg">
            <div class="col-2"></div>
            <div class="col-8 text-center text-h4"
                style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">POKEMONES</div>
            <div class="col-2"></div>
        </div>

        <div class="row">
            <div class="col-xl-2 col-sm-3 col-xs-6 q-px-md q-mt-xl" v-for="i in all" :key="i.id">
                <q-card class="my-card">
                    <q-card-section>
                        <div class="text-h5 text-center text-capitalize">{{i.name}}</div>
                    </q-card-section>

                    <q-separator />
                    <q-card-actions class="column items-center">
                        <router-link to="/login" style="text-decoration: none;"><q-btn color="blue-9" class="col-4 q-my-sm">
                                <div class="q-my-sm q-mx-md" @click="pokemon.addPokemon(i.url)">Ver pokemon</div>
                            </q-btn></router-link>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template> 

<script>
import axios from 'axios'
import {ref, onMounted } from 'vue'
import { usePokemonStore } from '../../store/pokemonStore.js'

export default {
  
    data() {
        let all= ref(null)
        let add = ref(null)
        const pokemon = usePokemonStore()

        onMounted(()=>{
            this.getAlls()
        })
        return {
            all,
            add,
            pokemon,
        }
    },
    methods: {
        getAlls() {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=102&offset=0')
                .then(response => {
                    this.all = response.data.results
                    console.log(response.data.results);
                })
                .catch(e => console.log(e))
        }
    }
}
</script>

<style></style>