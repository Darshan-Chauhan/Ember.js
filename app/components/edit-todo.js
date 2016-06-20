import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  didInsertElement: function(){
    this.$().focus();
  },
  actions: {
    acceptChanges(todo) {
        this.set('is_editing', false);
        var model = this.get('todo');
        if (Ember.isEmpty(todo)) {
          return false;
        } else {
          model.save();
        }
      }
    }
});
