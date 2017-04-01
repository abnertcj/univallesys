'use strict';

univalleApp.factory('ProductService',function($http, $q){

		var service = {};

		service.get = function(url, data, success, failure) {
		$http({
			method: 'GET',
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

	service.delete = function(url, success, failure) {
	$http({
		method: 'DELETE',
		url: url
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

	service.post = function(url, data, success, failure) {
		$http({
			method: 'POST',
			url: url,
			data: data
		}).then(function successCallback(response) {
			//service.afterLoad();
			if(success)
				success(response.data);
		}, function errorCallback(response) {
			//service.afterLoad();
			console.log('Falha ao executar callback do JSON');
			console.log(response)
			if(failure)
				failure(response);
		});
	};

	service.put = function(url, data, success, failure) {
		$http({
			method: 'PUT',
			url: url,
			data: data
		}).then(function successCallback(response) {
			//service.afterLoad();
			if(success)
				success(response.data);
		}, function errorCallback(response) {
			//service.afterLoad();
			console.log('Falha ao executar callback do JSON');
			console.log(response)
			if(failure)
				failure(response);
		});
	};

	return service;
})
