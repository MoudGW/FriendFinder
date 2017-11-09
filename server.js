var express=require('express');
var server=express();
var app2 =require('./app/routing/apiRoutes.js');
var app1 =require('./app/routing/htmlRoutes.js');
app2.f(server);
app1.f(server);


server.listen(3000);