let bodyParser = require('body-parser');
let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'Some coding work'} ];

let urlencoderParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res) {
  res.render('todo', {todo: data});

});


app.post('/todo', urlencoderParser, function(req, res) {
data.push(req.body);
res.json(data); 

});

app.delete('/todo/:item', function(req, res){
 data = data.filter(function(todo){
  return todo.item.replace(/ /g, '-') !== req.params.item;
 });
res.json(data);
});

};