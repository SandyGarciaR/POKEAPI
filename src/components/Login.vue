<template>
    <div class="fullscreen bg-teal-1">
        <div class="fixed-center">
            <q-card class="my-card bg-blue-2" style="width: 450px; border-radius: 20px;">
                <q-item class="bg-blue-10 text-center q-py-md">
                    <q-item-section class="text-h4 text-white " style="font-family:Georgia,'Times New Roman', Times, serif">
                        LOGIN
                    </q-item-section>
                </q-item>
                <div class=" column items-center">
                    <q-item class="q-mt-sm">
                        <q-item-section avatar>
                            <q-avatar style="font-size: 70px">
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                            </q-avatar>
                        </q-item-section>
                    </q-item>
                </div>
                <q-separator />
                <q-item class="q-mt-sm">
                    <q-item-section v-if="showAlertnegative == true" class="q-mt-md q-ml-lg column items-center" style="width: 200px;">
                        <q-item class="bg-red-8" style="border-radius: 25px;">
                            <q-item-section avatar class="items-end">
                                <q-icon color="black" name="fa-solid fa-circle-exclamation" />
                            </q-item-section>
                            <q-item-section>
                                <div class="text-weight-bold q-ml-none text-h6">
                                    {{ alert }}
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-item-section>
                    <q-item-section v-if="showAlertpositive == true" class="q-mt-md q-ml-lg column items-center">
                        <q-item class="bg-green-8" style="border-radius: 25px;">
                            <q-item-section avatar class="items-end">
                                <q-icon color="black" name="fa-solid fa-circle-exclamation" />
                            </q-item-section>
                            <q-item-section>
                                <div class="text-weight-bold q-ml-none text-h6">
                                    {{ alert }}
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-item-section>
                </q-item>

                <q-item>
                    <q-item-section>
                        <q-input color="blue-9" filled type="text" v-model="user"
                            label="Digite su usuario o email"></q-input><br />
                        <q-input color="blue-9" filled v-model="password" :type="isPwd ? 'password' : 'text'"
                            label="Digite su contraseña"></q-input>
                        <template v-slot:prepend>
                            <i class="fa-solid fa-lock"></i>
                        </template>
                        <template v-slot:append>
                            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                                @click="isPwd = !isPwd" />
                        </template>
                    </q-item-section>
                </q-item>
                <q-item class="column items-center q-mt-md">
                    <q-item-section>
                        <q-btn color="blue-10" label="Ingresar" @click="validar()">
                        </q-btn>
                    </q-item-section>
                </q-item>

                <q-item class="column items-center">
                    <q-item-section>
                        <router-link to="/register" style="text-decoration: none">
                            <q-btn flat class="q-mb-md text-black" style="text-transform: none;">No tienes una cuenta?
                                Registrate dando click aquí
                            </q-btn>
                        </router-link>
                    </q-item-section>
                </q-item>

            </q-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"

let router = useRouter();
let user = ref("");
let password = ref("");
let isPwd = ref(true);
let alert = ref(false);
let showAlertpositive = ref(false);
let showAlertnegative = ref(false)


function validar() {
    if (user.value.trim() == "") {
        showAlertnegative.value = true
        alert.value = "Digite un usuario";
        setTimeout(() => {
            showAlertnegative.value = false
            alert.value = "";
        }, 2000);
    }
    else if (password.value.trim() == "") {
        showAlertnegative.value = true
        alert.value = "Digite una contraseña";
        setTimeout(() => {
            showAlertnegative.value = false
            alert.value = "";
        }, 2000);
    }
    else {
        showAlertpositive.value = true
        alert.value = "Logeado";
        setTimeout(() => {
            showAlertpositive.value = false
            alert.value = "";
            router.push("/card")
        }, 1000);

    }
}



</script>
