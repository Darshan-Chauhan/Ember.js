import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo() {
      var title = this.get('newTitle');
      if(!title){ return false; }
      if(!title.trim()){ return; }

      var todo = this.store.createRecord('todo', {
        title:title,
        isCompleted:false
      });

      //clear out text field
      this.set('newTitle','');
      todo.save();
    },

    clearCompleted() {
      var completed = this.get('model').filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  allAreDone: Ember.computed('model.@each.isCompleted', function(key, value){
    if (value === undefined) {
      return !!this.get('model').get('length') && this.get('model').isEvery('isCompleted');
    } else {
      this.get('model').setEach('isCompleted', value);
      this.get('model').invoke('save');
      return value;
    }
  }),

  hasCompleted: Ember.computed('completed', function(){
    return this.get('completed') > 0;
  }),

  completed: Ember.computed('model.@each.isCompleted', function(){
    return this.get('model').filterBy('isCompleted', true).get('length');
  }),

  remaining: Ember.computed('model.@each.isCompleted', function(){
    return this.get('model').filterBy('isCompleted', false).get('length');
  }),

  inflection: Ember.computed('remaining', function(){
    var remaining = this.get('remaining');
    return remaining <= 1 ? 'item' : 'items';
  })
});
