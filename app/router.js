import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('publications');
  this.route('students');
  this.route('cybertrust');
  this.route('secuwear');
  this.route('gencyber');

  this.route('projects', function() {
    this.route('gencyber');
    this.route('secuwear');
    this.route('cybertrust');
  });
});

export default Router;
