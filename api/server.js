const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
const mainApp = require('./app');

app.use(bodyParser.json());
let originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
    'http://www.myproductionurl.com'
];
let corsOptions = {
    origin: function(origin, callback){
        let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
};
//here is the magic
app.use(cors(corsOptions));
app.set('port', process.env.PORT || 3000);
mainApp.router(app);

mainApp.ioServer(app).listen(app.get('port'), ()=>{
  console.log('running on ', app.get('port'));
});

