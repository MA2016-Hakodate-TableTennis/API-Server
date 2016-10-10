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
     console.log(req.body.impact_pos);
     console.log(req.body.impact_speed);
     console.log(req.body.impact_spin);
     console.log(req.body.swing_speed);
     console.log(req.body.swing_type);

         var io = require('socket.io-client');
    var socket = io('ws://ma2016-hakodate-tabletennis.herokuapp.com/');
      socket.on('connect', function () {
        socket.emit("C_to_S_message",{impact_pos:req.body.impact_pos,impact_speed:req.body.impact_speed,impact_spin:req.body.impact_spin,swing_speed:req.body.swing_speed,swing_type:req.body.swing_type});
    });

})
