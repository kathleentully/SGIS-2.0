'use strict';

angular.module('socialjusticeApp')
  .service('dataFeed', function dataFeed($resource, config) {
      return $resource(config.route('dataFeed'), null, {
      	query: {method: 'GET', isArray: true, transformResponse: function(data) {
      		data = JSON.parse(data);
      		
      		return data.results;
      	}}
      });
  });
