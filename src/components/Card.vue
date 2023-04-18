<template>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4 q-my-xl" style=" width: 400px; position: center;">
            <q-card class="my-card">
                <q-card-section>
                    <q-img :src="img" class="q-mb-lg"></q-img>
                    <q-card-actions align="center">
                        <div class="text-h5 text-center text-weight-bold">Nombre: </div>
                        <div class="text-h5 text-center q-ml-sm"> {{ name }}</div>
                    </q-card-actions>
                    <q-separator />
                    <q-card-actions align="around">
                        <div class="text-h5 text-center text-weight-bold">Vida:</div>
                        <div class="text-h5 text-center">{{ life }}</div>
                        <div class="text-h5 text-center text-weight-bold">Poder:</div>
                        <div class="text-h5 text-center">{{ xp }}</div>
                    </q-card-actions>
                    <q-separator />

                    <q-card-actions align="around">
                        <div class="text-h5 text-center text-weight-bold">Ataque: </div>
                        <div class="text-h5 text-center">{{ ataque }}</div>
                        <q-separator />
                        <div class="text-h5 text-center text-weight-bold">Especial: </div>
                        <div class="text-h5 text-center">{{ especial }}</div>
                    </q-card-actions>
                    <q-separator />

                    <q-card-actions align="around">
                        <div class="text-h5 text-center text-weight-bold">Defensa:</div>
                        <div class="text-h5 text-center"> {{ defensa }}</div>
                        <div class="text-h5 text-center text-weight-bold">Habilidad:</div>
                        <div class="text-h5 text-center"> {{ otro }}</div>
                    </q-card-actions>
                </q-card-section>
                <q-separator />

                <q-card-actions class="column items-center">
                    <router-link to="/login" style="text-decoration: none;">
                        <q-btn color="blue-9" class="q-my-sm">
                            <div class="q-my-sm q-mx-md">Salir</div>
                        </q-btn></router-link>
                </q-card-actions>
            </q-card>
        </div>
        <div class="col-4"></div>
    </div>
</template>
<script>

import { usePokemonStore } from '../../store/pokemonStore.js'
import { ref } from "vue"
import axios from 'axios'
export default {
   
    data() {
        const pokemon = usePokemonStore();
        const img = ref();
        const name = ref();
        const life = ref();
        const xp = ref();
        const ataque = ref();
        const especial = ref();
        const defensa = ref();
        const otro = ref();

        const data = ref(pokemon.url)

        this.getPokemon(data.value)

        return {
            pokemon,
            img,
            name,
            life,
            xp,
            ataque,
            especial,
            defensa,
            otro
        }

    },
    methods: {
        getPokemon(data) {
            console.log(data)
            axios.get(`${data}`)
                .then(response => {
                    this.img = response.data.sprites.other.dream_world.front_default;
                    this.name = response.data.name;
                    this.life = response.data.stats[0].base_stat;
                    this.xp = response.data.base_experience;
                    this.ataque = response.data.stats[1].base_stat;
                    this.especial = response.data.stats[3].base_stat;
                    this.defensa = response.data.stats[2].base_stat;
                    this.otro = response.data.stats[3].base_stat;


                })
                .catch(e => console.log(e))
        }
    }
}
</script>


