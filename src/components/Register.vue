<template>
    <div>
        <div class="row q-mt-lg">
            <div class="col-4"></div>
            <div class="col-4">
                <div>
                    <q-card class="my-card shadow-6">
                        <q-card-section class="bg-blue-10">
                            <div class="row items-center">
                                <div class="col text-h6 text-center text-white">
                                    REGISTRAR NUEVO USUARIO
                                </div>
                            </div>
                        </q-card-section>

                        <q-item-section v-if="showAlertnegative == true" class="q-mt-md q-ml-lg column items-center" style="width: 400px;">
                        <q-item class="bg-red-8" style="border-radius: 25px;">
                            <q-item-section avatar>
                                <q-icon color="black" name="fa-solid fa-circle-exclamation" />
                            </q-item-section>
                            <q-item-section class="column items-center">
                                <div class="text-weight-bold q-ml-none text-h6 text-center">
                                    {{ alert }}
                                </div>
                            </q-item-section>
                        </q-item>
                        </q-item-section>

                        <q-item-section v-if="showAlertpositive == true" class="q-mt-md q-ml-lg column items-center">
                        <q-item class="bg-green-8" style="border-radius: 25px;">
                            <q-item-section avatar>
                                <q-icon color="black" name="fa-solid fa-circle-exclamation" />
                            </q-item-section>
                            <q-item-section>
                                <div class="text-weight-bold q-ml-none text-h6">
                                    {{ alert }}
                                </div>
                            </q-item-section>
                        </q-item>
                        </q-item-section>

                        <div class="row q-my-md">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <q-item-section class="q-my-md ">
                                    <div class="q-gutter-md">
                                        <q-input color="blue-10" filled v-model="name" label="Nombres">
                                            <template v-slot:prepend>
                                                <i class="fa-solid fa-user"></i>
                                            </template>
                                        </q-input>
                                        <q-input color="blue-10" filled v-model="phone" type="number" label="Telefono">
                                            <template v-slot:prepend>
                                                <i class="fa-solid fa-phone"></i>
                                            </template>
                                        </q-input>
                                        <q-input color="blue-10" filled v-model="email" label="Correo">
                                            <template v-slot:prepend>
                                                <i class="fa-solid fa-envelope"></i>
                                            </template>
                                        </q-input>
                                        <q-input color="blue-10" filled v-model="password" :type="isPwd ? 'password' : 'text'" label="Contraseña">
                                            <template v-slot:prepend>
                                                <i class="fa-solid fa-lock"></i>
                                            </template>
                                            <template v-slot:append>
                                                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                                                    class="cursor-pointer" @click="isPwd = !isPwd" />
                                            </template>
                                        </q-input>

                                    </div>
                                </q-item-section>
                            </div>
                            <div class="col-1"></div>

                        </div>
                        <q-card-actions class=" column items-center ">
                            <q-btn class="q-mb-md q-mx-xl bg-blue-10 text-white" style="text-transform: none;" @click="validar()">Registrarme
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>

            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router";

let router= useRouter();
let isPwd = ref(true);
let name = ref("");
let phone = ref("");
let password = ref("");
let email = ref("");
let alert = ref(false);
let showAlertpositive= ref(false);
let showAlertnegative = ref(false)



function validar() {
    if (name.value.trim() == "") {
        showAlertnegative.value = true
        alert.value = "Digite un nombre";
        setTimeout(() => {
            showAlertnegative.value = false
            alert.value = "";
        }, 2000);
    }
    else if (phone.value.trim() == "") {
        showAlertnegative.value = true
        alert.value = "Digite un número telefónico";
        setTimeout(() => {
            showAlertnegative.value = false
            alert.value = "";
        }, 2000);
    }
    else if (email.value.trim() == "") {
        showAlertnegative.value = true
        alert.value = "Digite un correo electrónico";
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
    else{
        showAlertpositive.value = true
        alert.value = "Usuario registrado";
        setTimeout(() => {
            showAlertpositive.value = false
            alert.value = "";
            router.push("/login")
        }, 1000);

    }
}

</script>

<style></style>