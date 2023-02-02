<template>
  <button
    @click="$emit('click')"
    :class="['statucBtn', isActive ? 'active' : '']"
  ></button>
</template>

<script>
export default {
  name: "StatucBtn",
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
.statucBtn {
  background-color: rgb(60, 55, 55);
  border-radius: 10px;
  height: 10px;
  width: 10px;
  border: none;
}
.statucBtn.active {
  background-color: rgb(34, 169, 29);
  border: none;
}
</style>
