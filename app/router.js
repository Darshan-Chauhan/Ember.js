<<<<<<< HEAD
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', { path: '/'}, function(){
    this.route('active');
  });
});

export default Router;
=======
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orders', function(){
  	this.route('order', { path: '/:order_id' });
	});
});

export default Router;
>>>>>>> 39b9c613e3f3e85f887444b55461d6cf957351bd
