<template>
  <button @click="$emit('click')" class="form-in_button">{{ label }} &nbsp;</button>
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
.form-in_button{
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
}
</style>
