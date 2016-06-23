import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var Todo = Model.extend({
  title: attr('string'),
  isCompleted: attr('boolean'),
  createdAt: attr('date')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: true,
      createdAt: Date.now()
    },
    {
      id: 2,
      title: 'Darshan',
      isCompleted: false,
      createdAt: Date.now()
    },
    {
      id: 3,
      title: 'Profit!',
      isCompleted: false,
      createdAt: Date.now()
    }
  ]
});

export default Todo;
