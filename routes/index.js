
/*
 * GET home page.
 */

exports.index1 = function(req, res){
  res.render('index1', { title: 'Hello World' });
};

exports.index = function(req, res){
  res.render('index', { title: 'Hello' });
};
