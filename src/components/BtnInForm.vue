<template>
  <button @click="$emit('click')" class="btnInForm">{{ label }} &nbsp;</button>
</template>

<script>
export default {
  name: "BtnInForm",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.btnInForm {
  margin-bottom: 3px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
