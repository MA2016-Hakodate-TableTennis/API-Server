var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
console.log('Server is online.');
app.post('/', function(req, res) {
  // リクエストボディを出力
     console.log(req.body);
     // パラメータ名、nameを出力
     console.log(req.body.name);

         var io = require('socket.io-client');
    var socket = io('ws://ma2016-hakodate-tabletennis.herokuapp.com/');
      socket.on('connect', function () {
        socket.emit("C_to_S_message",{value:req.body.name});
    });

})
