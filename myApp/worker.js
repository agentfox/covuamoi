var SCWorker = require('socketcluster/scworker');
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var morgan = require('morgan');
var healthChecker = require('sc-framework-health-check');

class Worker extends SCWorker {
  run() {
    console.log('   >> Worker PID:', process.pid);
    var environment = this.options.environment;

    var app = express();

    var httpServer = this.httpServer;
    var scServer = this.scServer;

    if (environment === 'dev') {
      // Log every HTTP request. See https://github.com/expressjs/morgan for other
      // available formats.
      app.use(morgan('dev'));
    }
    app.use(serveStatic(path.resolve(__dirname, 'public')));

    // Add GET /health-check express route
    healthChecker.attach(this, app);

    httpServer.on('request', app);

    var userNames = [];
    
    const checkLegalMove = (piece) => {
      
    }

    /*
      In here we handle our incoming realtime connections and listen for events.
    */
    scServer.on('connection', function (socket) {
      console.log('abc');
      socket.on('test1',(data)=> {
        console.log(data);
        
      })
      

      socket.on('validateUser', function (data, res) {
        // ...
        
        if (data) {
          if(userNames.indexOf(data) < 0 )
          {userNames.push(data.trim());
          res(null, 'Success');}
          else {res(null, 'Failed');}
        } else {
          var err = 'Failed to connect' ;
          // As a convention, it may be a good idea to give each
          // error a name. That way on the client side you can quickly
          // check the error type with: if (err.name === 'MyCustomError')
          
          // If you like, you can also add custom properties to the err object.
          // and they will be accessible on the client side.
          res(err); // Send back error
        }
      });
      socket.on('moved', function (data,res) {
        console.log(data);
        if(data) {
          res("fail", null);
        }
        else{
          var err = 'Failed' ;
          res(null,err)
        }
      });

      socket.on('disconnect', function () {
        console.log('disconnected');
        
      });
    });
  }
}

new Worker();

// Some sample logic to show how to handle client events,
      // replace this with your own logic

      // socket.on('validateUser',(data) => {
      //   console.log(data);
        
      //   if (userNames.findIndex(data.name) >= 0 ){
      //     socket.emit("valid",{isValid : false})
          
      //   } else {
      //     socket.emit("valid",{isValid : true})
      //     userNames.push(data.name);
      //   }
      // });

      // var interval = setInterval(function () {
      //   socket.emit('random', {
      //     number: Math.floor(Math.random() * 5)
      //   });
      // }, 1000);           scServer.exchange.publish('sample', count);