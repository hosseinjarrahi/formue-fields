<template>
  <v-col :cols="getFromSchema('cols', 12)" class="pa-0">
    <v-switch
      :modelValue="value"
      @update:modelValue="updateField($event)"
      :rules="getFromSchema('validations', [true])"
      @keypress.prevent.enter="_event('saveForm')"
      v-bind="{ ...defaultProps, ...getProp('*', {}) }"
      v-on="getFromSchema('events', {})"
    />
  </v-col>
</template>

<script setup>
import { defineProps } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index, value } = defineProps(useFieldProps);
const defaultProps = {
  density: "compact",
  variant: "outlined",
  color: "primary",
  label: getFromSchema("title"),
};
</script>
