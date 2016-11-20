import Ember from 'ember';
import DefservicesInitializer from 'halelab/initializers/defservices';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | defservices', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  DefservicesInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
