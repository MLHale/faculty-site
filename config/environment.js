/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2018-08-16T07:45:27-05:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: environment.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-08-16T08:41:40-05:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'halelab',
    environment,
    rootURL: '/',
    routerRootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/'
    ENV.routerRootURL = '/'
    ENV.host = "http://www.mlhale.com"
  }

  return ENV;
};
