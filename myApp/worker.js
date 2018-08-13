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
    
    var Pieces=[{name:"WhiteKing",type:"King",color:"white",src:"chess_pieces/wk.svg",originX:3,originY:7,x:3,y:7},{name:"WhiteQueen",type:"Queen",color:"white",src:"chess_pieces/wq.svg",originX:4,originY:7,x:4,y:7},
    {name:"WhiteBishopLeft",type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:2,originY:7,x:2,y:7},{name:"WhiteBishopRight",type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:5,originY:7,x:5,y:7},
    {name:"WhiteKnightLeft",type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:3,originY:7,x:1,y:7},{name:"WhiteKnightRight",type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:6,originY:7,x:6,y:7},
    {name:"WhiteRookLeft",type:"Rook",color:"white",src:"chess_pieces/wr.svg",originX:0,originY:7,x:0,y:7},{name:"WhiteRookRight",type:"Rook",color:"white",src:"chess_pieces/wr.svg",originX:7,originY:7,x:7,y:7},
    {name:"WhitePawn0",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:0,originY:6,x:0,y:6},{name:"WhitePawn1",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:1,originY:6,x:1,y:6},
    {name:"WhitePawn2",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:2,originY:6,x:2,y:6},{name:"WhitePawn3",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:3,originY:6,x:3,y:6},
    {name:"WhitePawn4",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:4,originY:6,x:4,y:6},{name:"WhitePawn5",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:5,originY:6,x:5,y:6},
    {name:"WhitePawn6",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:6,originY:6,x:6,y:6},{name:"WhitePawn7",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:7,originY:6,x:7,y:6},
    {name:"BlackKing",type:"King",color:"black",src:"chess_pieces/bk.svg",originX:3,originY:0,x:3,y:0},{name:"BlackQueen",type:"Queen",color:"black",src:"chess_pieces/bq.svg",originX:4,originY:0,x:4,y:0},
    {name:"BlackBishopLeft",type:"Bishop",color:"black",src:"chess_pieces/bb.svg",originX:2,originY:0,x:2,y:0},{name:"BlackBishopRight",type:"Bishop",color:"black",src:"chess_pieces/bb.svg",originX:5,originY:0,x:5,y:0},
    {name:"BlackKnightLeft",type:"Knight",color:"black",src:"chess_pieces/bn.svg",originX:1,originY:0,x:1,y:0},{name:"BlackKnightRight",type:"Knight",color:"black",src:"chess_pieces/bn.svg",originX:6,originY:0,x:6,y:0},
    {name:"BlackRookLeft",type:"Rook",color:"black",src:"chess_pieces/br.svg",originX:0,originY:0,x:0,y:0},{name:"BlackRookRight",type:"Rook",color:"black",src:"chess_pieces/br.svg",originX:7,originY:0,x:7,y:0},
    {name:"BlackPawn0",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:0,originY:1,x:0,y:1},{name:"BlackPawn1",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:1,originY:1,x:1,y:1},
    {name:"BlackPawn2",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:2,originY:1,x:2,y:1},{name:"BlackPawn3",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:3,originY:1,x:3,y:1},
    {name:"BlackPawn4",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:4,originY:1,x:4,y:1},{name:"BlackPawn5",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:5,originY:1,x:5,y:1},
    {name:"BlackPawn6",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:6,originY:1,x:6,y:1},{name:"BlackPawn7",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:7,originY:1,x:7,y:1}];



    let moveCounter = 0;
    const checkOriginPos = (piece) => {
      if( Pieces.find((p)=> { 
            if(p.name === piece.name && p.originX === piece.prevX && p.originY === piece.prevY ) 
              {return true} 
            }) ) {return true;}
      return false;
    };

    const checkLegalMove = (piece) => {
        if ( piece.type === 'Pawn' ) { // tot
                if(piece.color ==='white') {
                      if(piece.prevX===piece.x && ( piece.prevY===piece.y+1 || (checkOriginPos(piece)  &&  piece.prevY===piece.y+2) ) ) { // Move
                          return true;
                      }
                      else if ( (piece.prevX === piece.x-1 && piece.prevY === piece.y+1) || (piece.prevX === piece.x+1 && piece.prevY === piece.y+1) ) { // Kill
                        return true;
                      }
                      else return false;
                }
                else if(piece.color ==='black') {
                      if(piece.prevX===piece.x && ( piece.prevY===piece.y-1 || (checkOriginPos(piece)  &&  piece.prevY===piece.y-2) ) ) { // Move
                          return true;
                      }
                      else if ( (piece.prevX === piece.x-1 && piece.prevY === piece.y-1) || (piece.prevX === piece.x+1 && piece.prevY === piece.y-1) ) { // Kill
                        return true;
                      }
                      else return false;
                }

        }
        else if (piece.type === 'Rook') { // xe
              if((piece.prevX===piece.x && piece.prevY!==piece.y)||(piece.prevX!==piece.x && piece.prevY===piece.y)) {
                return true;
              }
              return false;
        }
        else if(piece.type === 'Knight') { // ma
              if( ( Math.abs(piece.prevX-piece.x)=== 1 && Math.abs(piece.prevY-piece.y)=== 2 ) || ( Math.abs(piece.prevX-piece.x)=== 2 && Math.abs(piece.prevY-piece.y)=== 1 ) ) {
                return true;
              }
              return false; 
        }
        else if(piece.type === 'Bishop') { // tuong
          if (( Math.abs(piece.prevX-piece.x)-Math.abs(piece.prevY-piece.y)===0 ) && (Math.abs(piece.prevX-piece.x)>=1 || Math.abs(piece.prevY-piece.y)>=1) ) {
            return true;
          }
          return false;
        }
        else if (piece.type === 'King') {
          if(Math.abs(piece.prevX-piece.x)<2&&Math.abs(piece.prevY-piece.y)<2 && (Math.abs(piece.prevX-piece.x)===1 || Math.abs(piece.prevY-piece.y)===1) ) {
            return true;
          }
          return false;
        }
        else if (piece.type === 'Queen') {
          if( 
            (( Math.abs(piece.prevX-piece.x)-Math.abs(piece.prevY-piece.y)===0 ) && (Math.abs(piece.prevX-piece.x)>=1 || Math.abs(piece.prevY-piece.y)>=1)) ||
            ((piece.prevX===piece.x && piece.prevY!==piece.y)||(piece.prevX!==piece.x && piece.prevY===piece.y))
          ){ return true}
          return false;
        }
        else return false;
    }
    const checkPosibleMove = (piece) => {
      if (piece.type === 'Pawn') {
        
      } 
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
          if (checkLegalMove(data)) {
            res(null, "Valid");
          }
            res(null, "Invalid");
        }
        else{
          var err = 'Failed to connect' ;
          res(err)
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