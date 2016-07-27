import Ember from 'ember';
//
export default Ember.Route.extend({
  model() {
    return this.store.findAll('movies');
  }
});


// export default Ember.Route.extend({
//   model: function(params) {
//     return this.store.find('movies', 88);
//   }
// });
