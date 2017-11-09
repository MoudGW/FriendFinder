var path = require('path');
var friends=require('../data/friends.js');
var f=function(app){
app.get('/api/friends', function(req, res){
   res.json(friends);
});
app.post('/api/friends', function(req,res){
      var user=req.body;
      var bestmatch;
      var Topdiff=1000;
      for(var index in friends.friends)
      {
      	var person=friends.friends[index];
        var diff=friendCalcu(user.scores,person.scores);
      	if(diff<Topdiff)
      	{
      		Topdiff=diff;
      		bestmatch=person;
      	}
      } 
 res.send(bestmatch);
}); 
}
function friendCalcu(user1,user2){
var total=0;
 for (var i=0;i<user1.length;i++)
 {
 	total+=Math.abs(parseInt(user1[i])-parseInt(user2[i]));
 }
return total;
}
module.exports= {f};