import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default Component.extend({
  store: service(),
  isEditing: false,

  actions: {
    completeTask: function(todo) {
      this.store.findRecord("todo", todo.id).then(todo => {
        todo.set("completed", !todo.completed);
        todo.save();
      });
    },
    editTodo: function() {
      console.log("Ediitng a todo");
      set(this, "isEditing", true);
    },
    deleteTodo: function(todo) {
      this.store
        .findRecord("todo", todo.id, { backgroundReload: false })
        .then(function(todo) {
          todo.destroyRecord(); // => DELETE to /posts/2
        });
    },
    updateTask: function() {
      console.log("update task");
      this.store.findRecord("todo", this.todo.id).then(todo => {
        todo.set("task", todo.task);
        todo.save();
        set(this, "isEditing", false);
      });
    },
    cancelTodo: function() {
      set(this, "isEditing", false);
    }
  }
});
