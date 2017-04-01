module.exports = function(app) {

    var products = [{
        id: 1,
        name: 'Produto 01',
        code: '01',
        price: '18,00',
        date: '31-03-2017'
    },
    {
		id: 2,
		name: 'Produto 02',
		code: '02',
		price: '35,00',
		date: '01-04-2017'
	}];

    var message = {
        status: ''
    };

    app.get('/univalle/produto-page', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('./WEB-INF/views/produtos/listProducts.html'));
    });

    app.get('/univalle/produtos', function(req, res) {
        var path = require('path');
        res.send(products);
    });

    app.get('/univalle/produto/:id', function(req, res) {
         var id = req.params.id;
         var arrFound = products.filter(function(item) {
           return item.id == id;
         });
        res.send(arrFound);
   });

   app.post('/univalle/produto', function(req, res) {
       message.status = "HttpStatus.OK - ADD";
       res.end(JSON.stringify(message));
   });

   app.put('/univalle/produto/:id', function(req, res) {
       var id = req.params.id;
       message.status = "HttpStatus.OK - PRODUTO: " + id + " UPDATE";
       res.end(JSON.stringify(message));
   });
   
   app.delete('/univalle/produto/:id', function(req, res) {
      var id = req.params.id;
      message.status = "HttpStatus.OK - PRODUTO: " + id + " DELETE";
      res.end(JSON.stringify(message));
   });

};
