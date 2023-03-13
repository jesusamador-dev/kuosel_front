<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <div class="w-full md:w-6/12 lg:w-6/12 xl:w-4/12 px-4">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0"
    >
      <div class="rounded-t mb-0 px-6 py-6">
        <div class="text-center mb-3">
          <h6 class="text-slate-500 text-sm font-bold">Inicia con</h6>
        </div>
        <div class="btn-wrapper text-center">
          <button
            class="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
            type="button"
          >
            <img alt="Logo de google" class="w-5 mr-1" src="@/assets/img/google.svg" />
            Google
          </button>
        </div>
        <hr class="mt-6 border-b-1 border-slate-300" />
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div class="text-slate-400 text-center mb-3 font-bold">
          <small>O ingresa con tu usuario y contraseña</small>
        </div>
        <form>
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Correo
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Correo"
            />
          </div>

          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Contraseña
            </label>
            <input
              type="password"
              class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <label class="inline-flex items-center cursor-pointer">
              <input
                id="customCheckLogin"
                type="checkbox"
                class="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
              />
              <span class="ml-2 text-sm font-semibold text-slate-600"> Remember me </span>
            </label>
          </div>

          <div class="text-center mt-6">
            <button
              class="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-wrap mt-6 relative">
      <div class="w-1/2 text-left">
        <a href="javascript:void(0)" class="text-slate-200">
          <small>Olvidé mi contraseña</small>
        </a>
      </div>
      <div class="w-1/2 text-right">
        <router-link to="/auth/register" class="text-slate-200">
          <small>Crear nueva cuenta </small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginView',
  data() {
    return {};
  },
});
</script>

<style scoped></style>
