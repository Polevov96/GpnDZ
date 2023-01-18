<template>
  <div class="taskListForm">
    <div class="BtnTaskListForm">
      <BtnInFormVue @click="setFilter(filtersValue.ALL)" label="Все" />
      <BtnInFormVue @click="setFilter(filtersValue.IN_PROGRESS)" label="В Ожидании" />
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
import { taskFiltersConstants } from "../utils/constants";

export default {
  name: "TaskListForm",
  components: {
    BtnInFormVue,
    TaskItemVue,
  },

  methods: {
    // OLD_VARIANT: фильтр должен быть один и зачем с большой буквы написал название методов???
    // ClickFilterAll: function () {
    //   this.$store.dispatch("filterAll");
    // },
    // ClickFilterInWaiting: function () {
    //   this.$store.dispatch("filterInWaiting");
    // },
    // ClickFilterDone: function () {
    //   this.$store.dispatch("filterDone");
    // },

    // NEW_VARIANT: чуть сократил кода, 3 метода теперь можно в один запихнуть )
    setFilter(value){
      this.$store.dispatch("setTaskFilter", value)
    }
  },
  computed: {
    getTaskList() {
      // OLD_VARIANT: у тебя же есть getter в сторе, зачем лезть напрямую?!?!?
      // return this.$store.state.taskList;

      // NEW_VARIANT: просто используем модифицированный мной, но созданный тобой getter из стора
      return this.$store.getters.tasklistWithFilters
    },

    filtersValue() {
      return taskFiltersConstants;
    }
  },
};
</script>

<style scoped>
.taskListForm {
  margin-bottom: 15px;
}

.BtnTaskListForm {
  flex-direction: row;
  display: inline-flex;
}
</style>
