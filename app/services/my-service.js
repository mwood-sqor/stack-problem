import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    get: function(){
      this.get('ajax').request();
    }
});
