module.exports = function(app) {

        var groups = [{
            id: 1,
            company_id: '1',
            product_group_id: '1'
          },
          {
            id: 1,
            company_id: '1',
            product_group_id: '1'
          }];

    app.get('/univalle/grupo-page', function(req, res) {
        var path = require('path');
        res.sendfile(path.resolve('./WEB-INF/views/grupo/form_produto.html'));
    });

    app.get('/univalle/gruposprodutos', function(req, res) {
        var path = require('path');
        res.send(products);
    });

    app.get('/univalle/gruposproduto/:id', function(req, res) {
         var id = req.params.id;
         var arrFound = products.filter(function(item) {
           return item.id == id;
         });
        res.send(arrFound);
   });

   app.delete('/univalle/gruposproduto/:id', function(req, res) {
      var id = req.params.id;
      res.end(JSON.stringify("HttpStatus.OK - GRUPO: " + id + " DELETE"));
   });

   app.post('/univalle/gruposproduto', function(req, res) {
       res.end(JSON.stringify("HttpStatus.OK - ADD"));
   });

   app.put('/univalle/gruposproduto/:id', function(req, res) {
       var id = req.params.id;
       res.end(JSON.stringify("HttpStatus.OK - GRUPO: " + id + " UPDATE"));
   });

};
