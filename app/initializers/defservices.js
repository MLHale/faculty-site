export function initialize(application) {
  application.inject('controller', 'constants', 'service:constants');
}

export default {
  name: 'defservices',
  initialize: initialize
};
