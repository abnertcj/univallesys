var model = model || {};
var service = service || {};

univalleApp.controller("AuthenticationController", [
		"$scope",
		"AuthenticationService",
		function($scope, AuthenticationService) {
			model.ident = univalle.ident;
			$scope.model = model;

			$scope.checkCredentials = function() {
				var login_intent = {};

				login_intent.user = model.ident.username;
				login_intent.password = model.ident.password;

				AuthenticationService.post("check-credentials", login_intent,
						validCredentials, invalidCredentials)
			};

			var validCredentials = function(data) {
				$scope.resetError();

				if (data.status != "HttpStatus.NO_CONTENT") {
					model.ident.userCurrent = data;
					var myUrl = location.pathname;
					window.location = myUrl.substr(0, myUrl.length - 5)
							+ "produto";
				} else{
					$scope.setError("Email ou senha está errado");
				}
			};

			var invalidCredentials = function(data) {
				$scope.resetError()
			};

			$scope.resetError = function() {
				model.ident.errorMessage = ""
			};

			$scope.setError = function(message) {
				$scope.error = true;
				model.ident.errorMessage = message
			};
		} ]);
