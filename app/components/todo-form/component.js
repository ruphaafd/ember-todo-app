import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  newTask: null,

  actions: {
    addTodo: function() {
      console.log(this.newTask);
      let todo = this.store.createRecord("todo", {
        id: Date.now(),
        task: this.newTask,
        completed: false
      });
      todo.save();
    }
  }
});
