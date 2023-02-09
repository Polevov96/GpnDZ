<template>
  <div class="task_list-form">
    <div class="task_list-form_btn">
      <BtnInFormVue @click="setFilter(filtersValue.ALL)" label="Все" />
      <BtnInFormVue
        @click="setFilter(filtersValue.IN_PROGRESS)"
        label="В Ожидании"
      />
      <BtnInFormVue @click="setFilter(filtersValue.DONE)" label="Выполнено" />
    </div>
    <div>
      <TaskItemVue v-for="task in getTaskList" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItemVue from "./TaskItem.vue";
import BtnInFormVue from "./BtnInForm.vue";

// NEW_VARIANT: добавил константы выполнения задач
// eslint-disable-next-line
import { taskFiltersConstants } from "@/utils/constants";

export default {
  name: "TaskListForm",
  components: {
    BtnInFormVue,
    TaskItemVue,
  },

  methods: {
    setFilter(value) {
      this.$store.dispatch("setTaskFilter", value);
    },
  },
  computed: {
    getTaskList() {

      return this.$store.getters.tasklistWithFilters;
    },

    filtersValue() {
      return taskFiltersConstants;
    },
  },
};
</script>

<style scoped>
.task_list-form {
  margin-bottom: 15px;
}

.task_list-form_btn {
  flex-direction: row;
  display: inline-flex;
}
</style>
