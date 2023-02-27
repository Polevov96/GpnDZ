<template>
  <div v-bind:class="[{ 'task-item_active': isCurrentTaskEdit }, 'task-item']">
    <StatusBtnVue @click="handleStatusClick" :isActive="task.isActive" />
    <div :class="task.isActive ? 'task__text_active' : ''">
      <div @click="handleTaskClick" class="taskItemText">
        <span @click="openTask">{{ task.text }}</span>
      </div>
    </div>
    <BtnInFormVue @click="handleTaskDelete" class="Delete_button" label="Удалить" />
  </div>
</template>

<script>
import BtnInFormVue from "./BtnInForm.vue";
import StatusBtnVue from "./StatusBtn.vue";
export default {
  name: "TaskItem",

  components: {
    BtnInFormVue,
    StatusBtnVue,
  },
  
  props: {
    /**
     * @return Object  {id: 1, text: "test", status: 0}
     */
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openTask: function () {
      console.log(this.task.id)
        if (this.task.id) {
          this.$router.push("/tasklist/:id");
        } else {
          alert('error');
        }
    },
    handleStatusClick: function () {
       this.$store.dispatch("changeStatus", this.task.id);
    },
    handleTaskDelete: function () {
      this.$store.dispatch("deleteTask", this.task.id);
    },
    handleTaskClick: function () {
      if (
        this.$store.state.editTaskId === this.task.id &&
        this.$store.state.isEdit
      ) {
        this.resetTaskText();
        this.$store.dispatch("deactivateTask");
        return;
      }

      this.$store.dispatch("activateTask", this.task.id);
      
    },
    resetTaskText: function () {
      this.newTaskText = "";
    },
  },
  computed: {
    getTaskList() {
      return this.$store.state.taskList;
    },
    isCurrentTaskEdit() {
      return this.$store.state.editTaskId === this.task.id;
    },
  },
};
</script>

<style scoped>
.task-item {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-item_active {
  background-color: rgba(255, 140, 5, 0.7);
}
.Delete_button {
  opacity: 0.3;
}
.task__text_active {
  text-decoration: line-through;
}

/* .task-item {}
  .task-item__btn{}
  .task-item__btn_active{}

  .btn {}

  .btn__text{}
  .btn__text_warning{} */
</style>
