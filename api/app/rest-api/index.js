'use strict';
const helper = require('../helpers');

module.exports = (app)=>{

  let url = [];
  app.route('/register').post((req, res) =>{
      console.log(url);
      if(!url[req.url]) {
          console.log('executed');
          helper.createNewUser(req.body);
          let user = helper.findUser({email: req.body.email, password: req.body.password});
          res.send(user);
      }


  })


};
