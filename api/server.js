const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
const mainApp = require('./app');

app.use(bodyParser.json());
app.use(cors());
app.set('port', process.env.PORT || 3000);
mainApp.router(app);

mainApp.ioServer(app).listen(app.get('port'), ()=>{
  console.log('running on ', app.get('port'));
});

