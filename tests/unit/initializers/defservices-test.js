import Application from '@ember/application';
import { run } from '@ember/runloop';
import DefservicesInitializer from 'halelab/initializers/defservices';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | defservices', {
  beforeEach() {
    run(function() {
      application = Application.create();
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
