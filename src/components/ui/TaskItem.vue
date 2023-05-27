<template>
  <div class="task-item">
    <StatusBtnVue @click="handleStatusClick" :isActive="task.isActive" />
    <div :class="task.isActive ? 'task__text_active' : ''">
      <div  class="task-item_text">
        <div @click="openTask">{{ task.text }}</div>
      </div>
    </div>
    <BtnInFormVue @click="handleTaskDelete" class="delete_button" label="Удалить" />
  </div>
</template>

<script>
import BtnInFormVue from "../forms/BtnInForm.vue";
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
        if (this.task.id) {
          this.$router.push(`/tasklist/${this.task.id}`);
          
          // this.$store.dispatch("taskModules/activateTask", this.task.id);
        } else {
          alert('error');
        }
    },
    handleStatusClick: function () {
       this.$store.dispatch("taskModules/changeStatus", this.task.id);
    },
    handleTaskDelete: function () {
      this.$store.dispatch("taskModules/deleteTask", this.task.id);
    },
 
  },
};
</script>

<style scoped>
.task-item {
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 15px;
  background: #F2F4F7;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 28px;
  width: 870px;
  min-height: 59.39px;
  background: #F2F4F7;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  overflow-wrap: break-word;
}
.task-item_text {
  width: 612.61px;
  min-height: 45.06px;
  height: auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36.8633px;
  line-height: 45px;
  color: #1D2939;
  flex: none;
  order: 1;
  flex-grow: 1;
}
.task-item_active {
  background: #F2C94C;
}
.delete_button {
  width: 150px;
  height: 45px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36.8633px;
  line-height: 45px;
  color: #E0E0E0;
  flex: none;
  order: 2;
  flex-grow: 0;
  justify-content: flex-end;
  align-items:flex-end;
  margin-top: 7px;
  margin-bottom: 7px;
}
.delete_button:hover {
  color: #F2994A;
}
.task__text_active {
  text-decoration: line-through;
}
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
/* .task-item {}
  .task-item__btn{}
  .task-item__btn_active{}

  .btn {}

  .btn__text{}
  .btn__text_warning{} */
</style>
