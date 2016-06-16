import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTodo(todo) {
      todo.set('isEditing', true);
    },
    acceptChanges(todo) {
      this.set('is_editing', false);
      var model = this.get('model');
      if (Ember.isEmpty(todo)) {
        return false;
      } else {
        model.save();
      }
    },
    removeTodo(todo) {
      todo.destroyRecord();
      todo.save();
    }
  },
  isEditing: false,
  isCompleted: Ember.computed('model.isCompleted', function(key, value){
   var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  })
});
