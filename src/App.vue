<template>
  <v-app>
    <v-main class="d-flex justify-center">
      <div class="w-25 ma-14">
        <MForm
          :fields="fields"
          v-model="form"
          :form-data="formData"
          name="registerForm"
        />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import TextField from "@/components/fields/TextField.vue";
import TextArea from "@/components/fields/TextArea.vue";
import Autocomplete from "@/components/fields/Autocomplete.vue";
import Switcher from "@/components/fields/Switcher.vue";
import Checkbox from "@/components/fields/Checkbox.vue";
import File from "@/components/fields/File.vue";
import ColorPicker from "@/components/fields/ColorPicker.vue";
import Combobox from "@/components/fields/Combobox.vue";
import Date from "@/components/fields/Date.vue";
import Radio from "@/components/fields/Radio.vue";
import UploadBox from "@/components/fields/UploadBox.vue";

import MForm from "formue";
import { ref, onBeforeMount } from "vue";

const form = ref({});
const formData = ref({
  tags: [
    { text: "text1", value: "important" },
    { text: "حساس", value: "sensitive" },
  ],
  radio: { text: "حساس", value: "sensitive" },
  switcher: true,
  name3: "test",
  Checkbox: true,
});

const ghalate = (value) => value.length > 5 || "غلطه";

const fields = [
  {
    title: "باکس اپلود",
    field: "UploadBox",
    component: UploadBox,
    props: {
      multiple: true,
      isImage: true,
    },
  },
  {
    title: "رادیو",
    field: "radio",
    objKey: "value",
    component: Radio,
    props: {
      dateProps: {
        items: [
          { text: "مهم", value: "important" },
          { text: "حساس", value: "sensitive" },
          { text: "حیاتی", value: "vital" },
        ],
        "item-title": "text",
        "item-value": "value",
      },
      group: {
        inline: true,
      },
      color: "red",
    },
  },
  {
    title: "ترکیبی زمان و تاریخ",
    field: "datetime",
    component: Date,
    props: {
      dateProps: {
        type: "datetime",
      },
    },
  },
  {
    title: "زمان",
    field: "Time",
    component: Date,
    props: {
      dateProps: {
        type: "time",
      },
    },
  },
  {
    title: "تاریخ",
    field: "Date",
    component: Date,
  },
  // {
  //   title: "کومبو باکس",
  //   field: "Combobox",
  //   objKey: "value",
  //   props: {
  //     multiple: true,
  //     showValue: "text",
  //     items: [
  //       { text: "مهم", value: "important" },
  //       { text: "حساس", value: "sensitive" },
  //       { text: "حیاتی", value: "vital" },
  //     ],
  //   },
  //   component: Combobox,
  // },
  // {
  //   title: "انتخاب رنگ",
  //   field: "ColorPicker",
  //   props: {
  //     type: "input",
  //   },
  //   component: ColorPicker,
  // },
  // {
  //   title: "فایل",
  //   field: "File",
  //   component: File,
  // },
  // {
  //   title: "چک باکس",
  //   field: "Checkbox",
  //   component: Checkbox,
  // },
  // {
  //   title: "سوییچ",
  //   field: "switcher",
  //   component: Switcher,
  //   props: {
  //     // inset: true,
  //   },
  // },
  {
    title: "تکمیل خودکار",
    field: "tags",
    objKey: "value",
    component: Autocomplete,
    isHeader: true,
    props: {
      items: [
        { text: "مهم", value: "important" },
        { text: "حساس", value: "sensitive" },
        { text: "حیاتی", value: "vital" },
      ],
      "item-title": "text",
      "item-value": "value",
      multiple: true,
    },
    cols: 6,
  },
  {
    title: "نام 2محصول",
    field: "name3",
    component: TextField,
    variant: "outlined",
    isHeader: true,
    props: {
      variant: "outlined",
      placeholder: "johndoe@gmail.com",
    },
    cols: 6,
  },
  {
    title: "نام محصول",
    field: "name",
    component: TextArea,
    isHeader: true,
    isHeader: true,
    validations: [
      (value) => !!value || "الزامیست",
      (value) => value.length > 5 || "غلطه",
    ],
  },
];
</script>
