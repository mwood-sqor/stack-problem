import Ember from 'ember';

export default Ember.Component.extend({
  first: Ember.inject.service("my-service"),
  init(){
    this.get('first').get();
  }
});
