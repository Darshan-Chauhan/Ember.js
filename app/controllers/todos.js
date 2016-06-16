import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo:function(){
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
    }
  },
  remaining: Ember.computed.filter('@each.isCompleted', function(){
    console.log(`called`);
    return this.get('isCompleted', false).get('length');
  }),

  inflection: Ember.computed('remaining', function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  })
});
