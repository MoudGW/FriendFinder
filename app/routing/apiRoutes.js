var path = require('path');
var friends=require('../data/friends.js');
var f=function(app){
app.get('/api/friends', function(req, res){
   res.send(friends.friends);
});
}
module.exports= {f};