import DS from "ember-data";
const { Model, attr } = DS;

export default Model.extend({
  task: attr("string"),
  completed: attr("boolean", { defaultValue: false })
});
