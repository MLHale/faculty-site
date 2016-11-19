import Ember from 'ember';

export function initialize(/* application */) {
	Ember.$(window).resize(function () {

		setTimeout(function () {
			console.log('resize')
			Ember.$('.same-height-row').each(function () {
				var maxHeight = 0;
				var children = Ember.$(this).find('.same-height');
				children.height('auto');
				if (Ember.$(window).width() > 768) {
					children.each(function () {
						if (Ember.$(this).innerHeight() > maxHeight) {
							maxHeight = Ember.$(this).innerHeight();
						}
					});
					children.innerHeight(maxHeight);
				}

				maxHeight = 0;
				children = Ember.$(this).find('.same-height-always');
				children.height('auto');
				children.each(function () {
					if (Ember.$(this).height() > maxHeight) {
						maxHeight = Ember.$(this).innerHeight();
					}
				});
				children.innerHeight(maxHeight);

			});
		}, 205);


	});
	
}

export default {
	name: 'custom',
	initialize
};
