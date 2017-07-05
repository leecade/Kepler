
Template.search_place.onRendered(function() {

	$(this.firstNode).parent().siblings('.list-items').btsListFilter('.places-search', {
		itemChild: '.place-btn-name',
		loadingClass: 'loading-lg',
		sourceData: function(val, callback) {
			
			Meteor.subscribe('placesByName', val, function() {
			
				var places = _.map( K.getPlacesByName(val).fetch(), function(place) {
					return K.newPlace(place._id);
				});

				callback(places);
			});
		},
		sourceNode: function(data) {
			var item$ = $('<li class="list-group-item"></li>');
			Blaze.renderWithData(Template.item_place_search, data, item$[0]);
			return item$;
		},
		cancelNode: function() {
			return '<span class="btn form-control-feedback" aria-hidden="true"><i class="icon icon-canc"></i></span>';
		}
	});
});
