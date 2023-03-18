<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submitForm">
    <div class="divide-y divide-gray-200 max-h-full h-5/6 flex flex-col justify-between">
      <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div class="flex flex-col">
          <label class="leading-loose">Título</label>
          <input
            v-model="title"
            type="text"
            class="border text-sm rounded-lg block w-full p-2.5 mb-1"
            :class="isValid(meta[0])"
            placeholder="Título"
          />
          <span class="text-red-500 text-sm italic">{{ removeQuotes(errors[0]) }}</span>
        </div>
        <div class="flex flex-col">
          <label class="leading-loose">Monto</label>
          <input
            v-model="amount"
            type="text"
            class="border text-sm rounded-lg block w-full p-2.5 mb-1"
            :class="isValid(meta[0])"
            placeholder="Monto"
          />
          <span class="text-red-500 text-xs italic">{{ removeQuotes(errors[1]) }}</span>
        </div>
        <div class="flex flex-col">
          <label class="leading-loose">Categoría</label>
          <select
            v-model="category"
            class="border text-sm rounded-lg block w-full p-2.5 mb-1"
            :class="isValid(meta[0])"
          >
            <option disabled value="">Selecciona una categoría</option>
            <!-- Aquí puedes agregar tus categorías -->
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
          </select>
          <span class="text-red-500 text-xs italic">{{ removeQuotes(errors[2]) }}</span>
        </div>
        <div class="flex flex-col">
          <label class="leading-loose">Tipo de movimiento</label>
          <select
            v-model="movementType"
            class="border text-sm rounded-lg block w-full p-2.5 mb-1"
            :class="isValid(meta[0])"
          >
            <option disabled value="">Selecciona un tipo</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
          <span class="text-red-500 text-xs italic">{{ removeQuotes(errors[3]) }}</span>
        </div>
      </div>
      <div class="pt-4 flex items-center space-x-4">
        <button
          type="submit"
          class="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-blue-500 hover:bg-blue-600"
        >
          Guardar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, useField } from 'vee-validate';
// eslint-disable-next-line import/no-unresolved
import * as yup from 'yup';

export default defineComponent({
  name: 'AddTransaction',
  components: {},
  setup() {
    const isValid = (meta) => {
      console.log(meta);
      if (meta.valid && meta.dirty) {
        return 'bg-green-50 border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500 outline-green-500';
      }
      if ((!meta.valid && meta.dirty) || meta.touched) {
        return 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 outline-red-500';
      }
      return 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 outline-gray-500';
    };

    const removeQuotes = (str) => str.value?.replace(/"/g, '');
    const patternTwoDigitsAfterComma = /^\d+(\.\d{0,2})?$/;
    const commonStringValidator = yup
      .number('Solo se permiten números')
      .typeError('Solo se permiten números')
      .positive('El número debe ser positivo')
      .test('is-decimal', 'Solo se permiten dos decimales', (val) => {
        if (val !== undefined) {
          return patternTwoDigitsAfterComma.test(val);
        }
        return true;
      })
      .required('Campo requerido');

    const schema = yup.object({
      title: yup.string('Solo se permite texto').required('Campo requerido'),
      amount: commonStringValidator,
      category: yup.string('Solo se permite texto').required('Campo requerido'),
      movementType: yup.string('Solo se permite texto').required('Campo requerido'),
    });

    const form = useForm({
      validationSchema: schema,
    });

    const { value: title, meta: metaTitle, errorMessage: titleError } = useField('title');
    const { value: amount, meta: metaAmount, errorMessage: amountError } = useField('amount');
    const {
      value: category,
      meta: metaCategory,
      errorMessage: categoryError,
    } = useField('category');
    const {
      value: movementType,
      meta: metaMovementType,
      errorMessage: movementTypeError,
    } = useField('movementType');

    const submitForm = form.handleSubmit(async () => {
      try {
        const status = await form.validate();
        console.log(form);

        if (!status.valid) return;
      } catch (err) {
        console.log('Hay errores en el formulario');
      }
    });

    return {
      title,
      amount,
      category,
      movementType,
      errors: [titleError, amountError, categoryError, movementTypeError],
      meta: [metaTitle, metaAmount, metaCategory, metaMovementType],
      submitForm,
      removeQuotes,
      isValid,
    };
  },
});
</script>

<style scoped></style>
