<template>
  <div>
    <HeaderComponent v-if="useHeader" />
    <slot name="content"></slot>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";

export default {
  name: "PageLayout",
  components: { HeaderComponent },
  props: {
    useHeader: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped></style>
