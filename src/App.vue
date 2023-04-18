<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="bg-blue-9 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../src/imagenes/2.png">
          </q-avatar>
          PRUEBA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
          <q-page padding>
            <router-view></router-view>
          </q-page>
    </q-page-container>

    <q-footer bordered class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-h6 text-center">Copyright © 2023 Sandy García</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
