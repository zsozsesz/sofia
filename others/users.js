var users =[];
var username;
var joinroom;
var rooms=[];



module.exports.users=users;
module.exports.username=username;
module.exports.rooms=rooms;
module.exports.joinroom=joinroom;
module.exports.fuggveny=function(szoba,tomb){
    var x =[];
    for(var i=0;i<tomb.length;i++){
            if(tomb[i].roomname==szoba){
                  x.push(tomb[i].nickname);
            }
      }
      return x;
};