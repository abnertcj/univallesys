'use strict';

univalleApp.factory('AuthenticationService',function($http, $q){

		var service = {};

		service.post = function(url, data, success, failure) {
		$http({
			method: 'POST',
			url: url,
			data: data
		}).then(function successCallback(response) {
			if(success)
				success(response.data);
		}, function errorCallback(response) {
			console.log('Falha ao executar callback do JSON');
			console.log(response)
			if(failure)
				failure(response);
		});
	};
	return service;
})
