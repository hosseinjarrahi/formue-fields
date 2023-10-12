<template>
  <div
    :label="'آپلود ' + getFromSchema('title')"
    class="d-flex flex-row flex-wrap"
    style="min-height: 100px"
  >
    <v-col cols="12" v-if="loading">
      <v-progress-linear :value="progress"></v-progress-linear>
    </v-col>
    <v-card
      max-height="130px"
      class="mx-1 col-2 my-1 pa-2 d-flex align-center justify-center"
      style="border: 1px dashed black"
      @click="() => {}"
      v-if="getProp('multiple') || getProp('length') == 0"
    >
      <label
        class="fill-height col-12 d-flex justify-center"
        style="cursor: pointer"
      >
        <input type="file" class="d-none" @change="upload($event, field)" />
        <v-icon v-if="loading">mdi-loading mdi-spin</v-icon>
        <v-icon v-else>mdi-plus</v-icon>
      </label>
    </v-card>

    <v-card
      max-width="150"
      max-height="130px"
      class="mx-1 col-2 my-1 pa-2 d-flex align-center justify-center"
      style="border: 1px solid black"
      @click="openFile(file)"
      v-for="file in files"
      :key="file"
    >
      <v-img v-if="getProp('isImage')" :src="$majra.configs.BASE_URL + file" />
      <div v-else style="word-break: break-all !important">دانلود</div>
      <v-btn
        text
        color="error"
        style="position: absolute; left: 0px; top: 0px"
        class="px-1 py-0"
        x-small
        @click="remove(file)"
      >
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { useFieldProps } from "formue";
import get from "lodash";
const props = defineProps(useFieldProps);
const { getProp, getFromSchema, index, form } = props;
const loading = ref(false);
const progress = ref(0);

const files = computed(() => {
  return Array.isArray(props.value)
    ? props.value
    : props.value
    ? [props.value]
    : [];
});
const defaultProps = {
  density: "compact",
  variant: "outlined",
  label: getFromSchema("title"),
  autofocus: index === 0,
};

function upload(file) {
  console.log("file", file);
  file = file.target.files[0];
  if (!file) return;
  const config = {
    onUploadProgress: (progressEvent) =>
      (this.progress = (progressEvent.loaded / progressEvent.total) * 100),
  };
  this.loading = true;
  var formData = new FormData();
  formData.append("file", file);
  formData.append("type", getFromSchema("fileType"));
  // this.axios
  //   .post(this.field.uploadPath, formData, config)
  //   .then((response) => {
  //     if (!getProp(multiple, false)) {
  //       return this.updateField(
  //         get(response, "data." + get(this.field, "uploadKey", "link"))
  //       );
  //     }
  //     let temp = this.value || [];
  //     this.updateField([
  //       ...temp,
  //       get(response, "data." + get(this.field, "uploadKey", "link")),
  //     ]);
  //     this._event("alert", { text: "با موفقیت آپلود شد", color: "green" });
  //   })
  //   .catch(() => {
  //     this._event("alert", {
  //       text: "مشکلی در ارسال فایل رخ داده است",
  //       color: "red",
  //     });
  //   })
  //   .finally(() => (this.loading = false));
}
function openFile(file) {
  return window.open(this.$majra.configs.BASE_URL + file);
}
function remove(file) {
  this.updateField(
    Array.isArray(this.value) ? this.value.filter((f) => f != file) : null
  );
}
</script>
