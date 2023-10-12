<template>
  <v-col :cols="getFromSchema('cols', 12)" class="pa-0">
    <v-textarea
      :modelValue="value"
      :rules="getFromSchema('validations', [true])"
      @keypress.prevent.enter="_event('saveForm')"
      v-bind="{ ...defaultProps, ...getProp('*', {}) }"
      @input="(event) => updateField(event.target.value)"
      v-on="getFromSchema('events', {})"
    />
  </v-col>
</template>

<script setup>
import { defineProps } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index } = defineProps(useFieldProps);

const defaultProps = {
  density: "compact",
  variant: "outlined",
  label: getFromSchema("title"),
};
</script>
