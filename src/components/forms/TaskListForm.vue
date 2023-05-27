<template>
  <div class="task_list-form">
    <div class="task_list-form_btn">
      <BtnInFormVue id="all" @click="setFilter(filtersValue.ALL)" label="Все" />
      <BtnInFormVue id="expectation"
        @click="setFilter(filtersValue.IN_PROGRESS)"
        label="В Ожидании"
      />
      <BtnInFormVue id="done" @click="setFilter(filtersValue.DONE)" label="Выполнено" />
    </div>
    <div class="task_item">
      <TaskItemVue v-for="task in getTaskList" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItemVue from "../ui/TaskItem.vue";
import BtnInFormVue from "./BtnInForm.vue";

import { FiltersConstants } from "@/utils/constants";

export default {
  name: "TaskListForm",
  components: {
    BtnInFormVue,
    TaskItemVue,
  },

  methods: {
    setFilter(value) {
      console.log(value);
      this.$store.dispatch("taskModules/setTaskFilter", value);
    },
  },
  computed: {
    getTaskList() {
      return this.$store.getters['taskModules/filteredTasklist'];
    },

    filtersValue() {
      return FiltersConstants;
    },
  },
};
</script>

<style scoped>
.task_list-form {
  margin-bottom: 15px;
  width: 870px;
  height: 660.85px;
}

#all.form-in_button {
  color: #667085;
  width: 52px;
  height: 35px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28.6715px;
  line-height: 35px;
  justify-content: flex-start;
  text-align: left;
  margin-right: 24px;
}
#expectation.form-in_button {
  color: #E0E0E0;
  width: 169px;
  height: 35px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28.6715px;
  line-height: 35px;
  margin-right: 24px;
}
#done.form-in_button {
  color: #E0E0E0;
  width: 159px;
  height: 35px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28.6715px;
  line-height: 35px;
}

.task_list-form_btn {
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  width: 870px;
  height: 35px;
  margin-bottom: 28px;
}
.task_item {
  display: flex;
  flex-direction: column;
}
</style>
