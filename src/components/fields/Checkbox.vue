<template>
  <v-col :cols="getFromSchema('cols', 12)" class="pa-0">
    <v-checkbox
      :modelValue="value"
      @update:modelValue="updateField($event)"
      :rules="getFromSchema('validations', [true])"
      v-bind="{
        ...defaultProps,
        ...getProp('*', {}),
      }"
      v-on="getFromSchema('events', {})"
    />
  </v-col>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index } = defineProps(useFieldProps);
const defaultProps = {
  density: "compact",
  variant: "outlined",
  color: "primary",
  label: getFromSchema("title"),
  autofocus: index === 0,
};
</script>
