module.exports = function(app) {

	var credential = {
		"user" : "admin@gmail.com",
		"password" : "admin",
		"error_message" : "Email ou senha está errado",
		"key" : "d6f67bc92bbaf06ec44b828d0da4eda9",
		"status" : ""
	};
	app.get('/univalle/login', function(req, res) {
		req.headers['if-none-match'] = 'no-match-for-this';
		var path = require('path');
		res.sendfile(path.resolve('./WEB-INF/views/auth/login.html'));
	});
	app.post('/univalle/check-credentials',
			function(req, res) {
				var username = req.body.user;
				var password = req.body.password;

				res.setHeader('Content-Type', 'application/json');

				if ((username == credential.user)
						&& (password == credential.password)) {
					credential.status = "HttpStatus.OK";
					res.end(JSON.stringify(credential));
				} else {
					credential.status = "HttpStatus.NO_CONTENT";
					res.end(JSON.stringify(credential));
				}
			});
};
