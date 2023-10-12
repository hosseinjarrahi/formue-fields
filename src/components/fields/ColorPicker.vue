<template>
  <v-menu
    :close-on-content-click="false"
    offset-y
    v-if="getProp('type', 'bottom') == 'bottom'"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        block
        :color="value ? value : 'primary'"
        dark
        max-height="35"
        v-bind="props"
        class="col-12"
      >
        {{ getFromSchema("title") }}
      </v-btn>
    </template>
    <v-color-picker
      :modelValue="value ? value : '#000'"
      @update:modelValue="updateField($event)"
      v-bind="{ ...defaultProps, ...getProp('*', {}) }"
      v-on="getFromSchema('events', {})"
    />
  </v-menu>

  <v-text-field
    v-if="getProp('type', 'bottom') == 'input'"
    class="color-piker"
    :modelValue="value"
    @update:modelValue="updateField($event)"
    :rules="getFromSchema('validations', [true])"
    @keypress.prevent.enter="_event('saveForm')"
    v-bind="{
      props,
      ...defaultProps,
      ...getProp('*', {}),
    }"
    v-on="getFromSchema('events', {})"
  >
    <template v-slot:append-inner>
      <v-menu :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ props }">
          <v-btn
            block
            :color="value ? value : 'primary'"
            dark
            elevation="0"
            max-height="35"
            v-bind="props"
            class="col-12 color-piker"
          >
          </v-btn>
        </template>
        <v-color-picker
          :modelValue="value ? value : '#000'"
          @update:modelValue="updateField($event)"
          v-bind="{ ...defaultProps, ...getProp('*', {}) }"
          v-on="getFromSchema('events', {})"
        />
      </v-menu>
    </template>
  </v-text-field>
</template>

<script setup>
import { defineProps } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index } = defineProps(useFieldProps);

const defaultProps = {
  density: "compact",
  variant: "outlined",
  mode: "hexa",
  label: getFromSchema("title"),
  autofocus: index === 0,
  type: "bottom",
};
</script>
<style>
.v-color-picker {
  overflow: hidden !important;
}
.color-piker .v-field__append-inner {
  padding: 3px !important;
}
.color-piker .v-field.v-field--appended {
  padding: 0px !important;
}
</style>
