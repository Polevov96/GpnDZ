<template>
  <button
    @click="$emit('click')"
    :class="['status_button', isActive ? 'active' : '']"
  ></button>
</template>

<script>
export default {
  name: "StatusBtn",
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
/* README: слассы стилей лучше использовать вида root-element__inner-element_modificator, подробнее можно почитать в методологии БЭМ */
.status_button {
  background-color: rgb(60, 55, 55);
  border-radius: 100px;
  width: 53.25px;
  height: 53.25px;
  border: none;
  /* left: 3.45%;
  right: 6.9%;
  top: 5.82%;
  bottom: 4.53%; */
  Top: 3.46px;
  Left: 2.05px;
}
.status_button.active {
  background-color: #6FCF97;
  border: none;
  
}
</style>
