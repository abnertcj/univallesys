'use strict';
var model = model || {};
var service = service || {};

univalleApp.controller('ProductController', ['$scope','ProductService', function($scope, ProductService){

		$scope.listProducts = {};
		$scope.getProduct = {};
		$scope.productCurrent = {};
		model.current = univalle.product;
		$scope.model = model;
		$scope.alertMessage = "";
		$scope.clickedUser = {};


		//ListAll
		//------------------------------------------------------------------------
		$scope.listAllProducts = function() {
			var listProduct = {};
			 ProductService.get("produtos",listProduct, sucessProdutos, errorProdutos);
		};

		var sucessProdutos = function(data) {
			$scope.listProducts = data
		};

		var errorProdutos = function(data) {
			$scope.resetError()
		};

		//GetProduct
		//------------------------------------------------------------------------
		$scope.getProduct = function(product) {
			var listProduct = {};
			ProductService.get("produto/"+product.id, listProduct, sucessProduto, errorProduto);
		};

		var sucessProduto = function(data) {
			$scope.getProduct = data;
			model.current = data;
		};

		var errorProdutos = function(data) {
			$scope.resetError()
		};

		//Delete Product
		//------------------------------------------------------------------------
		$scope.delProduct = function() {
			var idProduct = model.current.id;
			ProductService.delete("produto/"+idProduct, sucessDelProduto, errorDelProduto);
		};

		var sucessDelProduto = function(data) {
			$scope.getProduct.id = data.id;
		};

		var errorDelProdutos = function(data) {
			$scope.resetError()
		};

		//Add Product
		//------------------------------------------------------------------------
		$scope.addProduct = function() {
			var product_intent = {};
			product_intent = model.current;
			ProductService.post("produto", product_intent, sucessAddProduto, errorAddProduto);
		};

		var sucessAddProduto = function(data) {
			$scope.getProduct= data;
		};

		var errorAddProduto = function(data) {
			$scope.resetError()
		};

		//Update Product
		//------------------------------------------------------------------------
		$scope.updateProduct = function() {
			var idProduct = model.current.id;
			var product_intent = model.current;
			ProductService.put("produto/"+idProduct, product_intent, sucessUpProduto, errorUpProduto);
		};

		var sucessDelProduto = function(data) {
			$scope.getProduct = data;
		};

		var errorDelProdutos = function(data) {
			$scope.resetError()
		};

		$scope.clickedAlert = function(){
        $scope.alertMessage = "";
    };

		$scope.resetError = function() {
			model.current.errorMessage = ""
		};

		$scope.setError = function(message) {
			$scope.error = true;
			model.current.errorMessage = message
		};


}]);
