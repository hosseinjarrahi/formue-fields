<template>
  <v-col :cols="getFromSchema('cols', 12)" class="pa-0">
    <v-combobox
      :modelValue="value"
      @update:modelValue="updateField($event)"
      :rules="getFromSchema('validations', [true])"
      @keypress.prevent.enter="_event('saveForm')"
      v-bind="{
        ...defaultProps,
        ...getProp('*', {}),
      }"
      :items="newItems"
      v-on="getFromSchema('events', {})"
    />
  </v-col>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index } = defineProps(useFieldProps);

const defaultProps = {
  density: "compact",
  variant: "outlined",
  label: getFromSchema("title"),
  autofocus: index === 0,
};

const newItems = computed(() => {
  let arr = getProp("items");
  if (
    Array.isArray(arr) &&
    arr.every((item) => typeof item === "object" && item !== null)
  ) {
    const showValue = arr.map((obj) => obj[getProp("showValue")]);
    return showValue;
  }
  return arr;
});
</script>
