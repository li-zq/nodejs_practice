//var fs = require('fs');
var mongoose = require('mongoose');
var express = require('express');
var port = process.env.PORT || 3010;
var app = express();
var hbs = require('hbs');

//mongoose.connect('mongodb://localhost/nodeDb');
/*var t1 = require('./view/public/myjs/mongotest1.js');
var db = mongoose.connection;
db.on('error', console.error.bind(console,'error'));
db.once('open', function(){
    console.log('dataBase is connected');
})*/
//设置模板引擎
app.set('views', __dirname + '/client');
app.engine('html', hbs.__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client/public'));
app.listen(port);
console.log('Service starts at' + port);


//hbs.registerPartials(__dirname + '/view');
hbs.registerPartials(__dirname + '/client/components/sub1');
hbs.registerPartials(__dirname + '/client/components/sub2');
app.get('/',function(req, res) {
    /*let a = new t1({doctor: 'dr',title: 'ddddd', count: addnum++})
    console.log(a);
    a.save();
    t1.remove({count: 1},function(err){
        console.log(err);
    });
    t1.find({doctor: 'dr'},(err, docs) => {
        console.log(docs);
    });*/
    res.render('index',{title: 'Success',content: 'not found'});
});

app.get('/api',function(req, res) {
    console.log(req.query);
    res.set({
        'Access-Control-Allow-Origin':'*'
    })
    res.send({t1: '123',t2: '456'});
});
app.get('/list',function(req, res) {
	console.log(21);
    console.log(req.params);
    res.set({
        'Access-Control-Allow-Origin':'*'
    })
	res.send('ok');
});

/*hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});
*/
/*hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
});*/


