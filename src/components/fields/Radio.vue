<template>
  <v-col>
    {{ getFromSchema("title") }} :

    <v-radio-group
      :modelValue="value"
      @update:modelValue="updateField($event)"
      v-bind="{ ...defaultProps, ...getProp('group', null) }"
    >
      <v-radio
        v-for="value in getProp('dateProps.items')"
        :key="value[getProp('dateProps.item-value')]"
        :label="value[getProp('dateProps.item-title')]"
        :value="value[getProp('dateProps.item-value')]"
        v-bind="getPropsExcept(['dateProps', 'group'])"
        v-on="getFromSchema('events', {})"
      >
      </v-radio>
    </v-radio-group>
  </v-col>
</template>

<script setup>
import { defineProps } from "vue";
import { useFieldProps } from "formue";

const { getProp, getFromSchema, index } = defineProps(useFieldProps);

const defaultProps = {
  row: true,
  dense: true,
  "hide-details": true,
  autofocus: index === 0,
};
</script>
