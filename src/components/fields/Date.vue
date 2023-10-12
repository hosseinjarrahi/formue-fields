<template>
  <v-col :cols="getFromSchema('cols', 12)" class="pa-0">
    <div>
      <v-text-field
        :append-inner-icon="icon"
        @click="clickTo()"
        :modelValue="result"
        v-bind="{
          ...defaultPropsShow,
          ...getPropsExcept(['dateProps']),
        }"
      ></v-text-field>
      <date-picker
        simple
        ref="date"
        :modelValue="value"
        @update:modelValue="updateField($event)"
        v-bind="{ ...defaultProps, ...getProp('dateProps', {}) }"
        v-on="getFromSchema('events', {})"
      />
    </div>
  </v-col>
</template>

<script setup>
import { defineProps, computed, ref, watch } from "vue";
import { useFieldProps } from "formue";
import DatePicker from "vue3-persian-datetime-picker";
const props = defineProps(useFieldProps);
import { persianDate } from "@/composable/helpers.js";

const { getProp, getFromSchema, index, form } = props;

const defaultPropsShow = {
  readonly: true,
  variant: "outlined",
  label: getFromSchema("title"),
  autofocus: index === 0,
  density: "compact",
};

const date = ref(null);

const icon = computed(() => {
  const icon =
    getProp("dateProps.type") == "time"
      ? "mdi-clock"
      : getProp("dateProps.type") == "datetime"
      ? "mdi-calendar-clock"
      : "mdi-calendar-outline ";
  return icon;
});
const defaultProps = computed(() => {
  const format =
    getProp("dateProps.type") == "time"
      ? "HH:mm"
      : getProp("dateProps.type") == "datetime"
      ? "YYYY/MM/DD HH:mm"
      : "YYYY/MM/DD";
  return { format: format, class: "custom-date", type: "date" };
});
const result = computed(() => {
  if (getProp("dateProps.type") !== "time") {
    const persianDate3 = Array.isArray(props.value)
      ? persianDate(props.value[0], getProp("dateProps.type", "date")) +
        " ~ " +
        persianDate(props.value[1], getProp("dateProps.type", "date"))
      : persianDate(props.value, getProp("dateProps.type", "date"));
    return persianDate3;
  }
  return props.value;
});

function clickTo(field) {
  date.value.$el.children[0].children[0].click();
}
</script>

<style>
.custom-date .vpd-input-group {
  display: none !important;
}
.vpd-wrapper.vpd-compact-time .vpd-time .vpd-counter {
  line-height: 28px !important;
}
.vpd-addon-list-content {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
