import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var Todo = Model.extend({
  title: attr('string'),
  isCompleted: attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Darshan',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Profit!',
      isCompleted: false
    }
  ]
});

export default Todo;
