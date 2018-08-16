var SCWorker = require('socketcluster/scworker');
var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var morgan = require('morgan');
var healthChecker = require('sc-framework-health-check');

class Worker extends SCWorker {
  run() {
    // console.log('   >> Worker PID:', process.pid);
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

    var userNames = [];   // chua username
    
    
    

    /*
      In here we handle our incoming realtime connections and listen for events.-----------------------------------------------
    */
    scServer.on('connection', function (socket) {
                console.log('abc');


                let moveCounter = 0;
                // LOGIC start from here -----------------------------------------------------------------------------------------
                var originPieces ={WhiteKing:{type:"King",color:"white",src:"chess_pieces/wk.svg",originX:3,originY:7,x:3,y:7},WhiteQueen:{type:"Queen",color:"white",src:"chess_pieces/wq.svg",originX:4,originY:7,x:4,y:7},
                WhiteBishopLeft:{type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:2,originY:7,x:2,y:7},WhiteBishopRight:{type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:5,originY:7,x:5,y:7},
                WhiteKnightLeft:{type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:1,originY:7,x:1,y:7},WhiteKnightRight:{type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:6,originY:7,x:6,y:7},
                WhiteRookLeft:{type:"Rook",color:"white",src:"chess_pieces/wr.svg",originX:0,originY:7,x:0,y:7},WhiteRookRight:{type:"Rook",color:"white",src:"chess_pieces/wr.svg",originX:7,originY:7,x:7,y:7},
                WhitePawn0:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:0,originY:6,x:0,y:6},WhitePawn1:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:1,originY:6,x:1,y:6},
                WhitePawn2:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:2,originY:6,x:2,y:6},WhitePawn3:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:3,originY:6,x:3,y:6},
                WhitePawn4:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:4,originY:6,x:4,y:6},WhitePawn5:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:5,originY:6,x:5,y:6},
                WhitePawn6:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:6,originY:6,x:6,y:6},WhitePawn7:{type:"Pawn",color:"white",src:"chess_pieces/wp.svg",originX:7,originY:6,x:7,y:6},
                BlackKing:{type:"King",color:"black",src:"chess_pieces/bk.svg",originX:3,originY:0,x:3,y:0},BlackQueen:{type:"Queen",color:"black",src:"chess_pieces/bq.svg",originX:4,originY:0,x:4,y:0},
                BlackBishopLeft:{type:"Bishop",color:"black",src:"chess_pieces/bb.svg",originX:2,originY:0,x:2,y:0},BlackBishopRight:{type:"Bishop",color:"black",src:"chess_pieces/bb.svg",originX:5,originY:0,x:5,y:0},
                BlackKnightLeft:{type:"Knight",color:"black",src:"chess_pieces/bn.svg",originX:1,originY:0,x:1,y:0},BlackKnightRight:{type:"Knight",color:"black",src:"chess_pieces/bn.svg",originX:6,originY:0,x:6,y:0},
                BlackRookLeft:{type:"Rook",color:"black",src:"chess_pieces/br.svg",originX:0,originY:0,x:0,y:0},BlackRookRight:{type:"Rook",color:"black",src:"chess_pieces/br.svg",originX:7,originY:0,x:7,y:0},
                BlackPawn0:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:0,originY:1,x:0,y:1},BlackPawn1:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:1,originY:1,x:1,y:1},
                BlackPawn2:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:2,originY:1,x:2,y:1},BlackPawn3:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:3,originY:1,x:3,y:1},
                BlackPawn4:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:4,originY:1,x:4,y:1},BlackPawn5:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:5,originY:1,x:5,y:1},
                BlackPawn6:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:6,originY:1,x:6,y:1},BlackPawn7:{type:"Pawn",color:"black",src:"chess_pieces/bp.svg",originX:7,originY:1,x:7,y:1}};
                
                const originBoardCells = { C00: { x: 0, y: 0, data: { color:"black",name: "BlackRookLeft" } }, C10: { x: 1, y: 0, data: { color:"black",name: "BlackKnightLeft" } }, C20: { x: 2, y: 0, data: { color:"black",name: "BlackBishopLeft" } },
                C30: { x: 3, y: 0, data: { color:"black",name: "BlackKing" } }, C40: { x: 4, y: 0, data: { color:"black",name: "BlackQueen" } }, C50: { x: 5, y: 0, data: { color:"black",name: "BlackBishopRight" } }, 
                C60: { x: 6, y: 0, data: { color:"black",name: "BlackKnightRight" } }, C70: { x: 7, y: 0, data: { color:"black",name: "BlackRookRight" } }, C01: { x: 0, y: 1, data: { color:"black",name: "BlackPawn0" } }, 
                C11: { x: 1, y: 1, data: { color:"black",name: "BlackPawn1" } }, C21: { x: 2, y: 1, data: { color:"black",name: "BlackPawn2" } }, C31: { x: 3, y: 1, data: { color:"black",name: "BlackPawn3" } }, 
                C41: { x: 4, y: 1, data: { color:"black",name: "BlackPawn4" } }, C51: { x: 5, y: 1, data: { color:"black",name: "BlackPawn5" } }, C61: { x: 6, y: 1, data: { color:"black",name: "BlackPawn6" } }, 
                C71: { x: 7, y: 1, data: { color:"black",name: "BlackPawn7" } }, C02: { x: 0, y: 2, data: 0 }, C12: { x: 1, y: 2, data: 0 }, C22: { x: 2, y: 2, data: 0 }, 
                C32: { x: 3, y: 2, data: 0 }, C42: { x: 4, y: 2, data: 0 }, C52: { x: 5, y: 2, data: 0 }, C62: { x: 6, y: 2, data: 0 }, C72: { x: 7, y: 2, data: 0 }, 
                C03: { x: 0, y: 3, data: 0 }, C13: { x: 1, y: 3, data: 0 }, C23: { x: 2, y: 3, data: 0 }, C33: { x: 3, y: 3, data: 0 }, C43: { x: 4, y: 3, data: 0 }, 
                C53: { x: 5, y: 3, data: 0 }, C63: { x: 6, y: 3, data: 0 }, C73: { x: 7, y: 3, data: 0 }, C04: { x: 0, y: 4, data: 0 }, C14: { x: 1, y: 4, data: 0 }, 
                C24: { x: 2, y: 4, data: 0 }, C34: { x: 3, y: 4, data: 0 }, C44: { x: 4, y: 4, data: 0 }, C54: { x: 5, y: 4, data: 0 }, C64: { x: 6, y: 4, data: 0 }, 
                C74: { x: 7, y: 4, data: 0 }, C05: { x: 0, y: 5, data: 0 }, C15: { x: 1, y: 5, data: 0 }, C25: { x: 2, y: 5, data: 0 }, C35: { x: 3, y: 5, data: 0 }, 
                C45: { x: 4, y: 5, data: 0 }, C55: { x: 5, y: 5, data: 0 }, C65: { x: 6, y: 5, data: 0 }, C75: { x: 7, y: 5, data: 0 }, C06: { x: 0, y: 6, data: { color:"white",name: "WhitePawn0" } }, 
                C16: { x: 1, y: 6, data: { color:"white",name: "WhitePawn1" } }, C26: { x: 2, y: 6, data: { color:"white",name: "WhitePawn2" } }, C36: { x: 3, y: 6, data: { color:"white",name: "WhitePawn3" } }, 
                C46: { x: 4, y: 6, data: { color:"white",name: "WhitePawn4" } }, C56: { x: 5, y: 6, data: { color:"white",name: "WhitePawn5" } }, C66: { x: 6, y: 6, data: { color:"white",name: "WhitePawn6" } }, 
                C76: { x: 7, y: 6, data: { color:"white",name: "WhitePawn7" } }, C07: { x: 0, y: 7, data: { color:"white",name: "WhiteRookLeft" } }, C17: { x: 1, y: 7, data: { color:"white",name: "WhiteKnightLeft" } }, 
                C27: { x: 2, y: 7, data: { color:"white",name: "WhiteBishopLeft" } }, C37: { x: 3, y: 7, data: { color:"white",name: "WhiteKing" } }, C47: { x: 4, y: 7, data: { color:"white",name: "WhiteQueen" } }, 
                C57: { x: 5, y: 7, data: { color:"white",name: "WhiteBishopRight" } }, C67: { x: 6, y: 7, data: { color:"white",name: "WhiteKnightRight" } }, C77: { x: 7, y: 7, data: { color:"white",name: "WhiteRookRight" } } };
            
                var boardCells =  { C00: { x: 0, y: 0, data: { color:"black",name: "BlackRookLeft" } }, C10: { x: 1, y: 0, data: { color:"black",name: "BlackKnightLeft" } }, C20: { x: 2, y: 0, data: { color:"black",name: "BlackBishopLeft" } },
                C30: { x: 3, y: 0, data: { color:"black",name: "BlackKing" } }, C40: { x: 4, y: 0, data: { color:"black",name: "BlackQueen" } }, C50: { x: 5, y: 0, data: { color:"black",name: "BlackBishopRight" } }, 
                C60: { x: 6, y: 0, data: { color:"black",name: "BlackKnightRight" } }, C70: { x: 7, y: 0, data: { color:"black",name: "BlackRookRight" } }, C01: { x: 0, y: 1, data: { color:"black",name: "BlackPawn0" } }, 
                C11: { x: 1, y: 1, data: { color:"black",name: "BlackPawn1" } }, C21: { x: 2, y: 1, data: { color:"black",name: "BlackPawn2" } }, C31: { x: 3, y: 1, data: { color:"black",name: "BlackPawn3" } }, 
                C41: { x: 4, y: 1, data: { color:"black",name: "BlackPawn4" } }, C51: { x: 5, y: 1, data: { color:"black",name: "BlackPawn5" } }, C61: { x: 6, y: 1, data: { color:"black",name: "BlackPawn6" } }, 
                C71: { x: 7, y: 1, data: { color:"black",name: "BlackPawn7" } }, C02: { x: 0, y: 2, data: 0 }, C12: { x: 1, y: 2, data: 0 }, C22: { x: 2, y: 2, data: 0 }, 
                C32: { x: 3, y: 2, data: 0 }, C42: { x: 4, y: 2, data: 0 }, C52: { x: 5, y: 2, data: 0 }, C62: { x: 6, y: 2, data: 0 }, C72: { x: 7, y: 2, data: 0 }, 
                C03: { x: 0, y: 3, data: 0 }, C13: { x: 1, y: 3, data: 0 }, C23: { x: 2, y: 3, data: 0 }, C33: { x: 3, y: 3, data: 0 }, C43: { x: 4, y: 3, data: 0 }, 
                C53: { x: 5, y: 3, data: 0 }, C63: { x: 6, y: 3, data: 0 }, C73: { x: 7, y: 3, data: 0 }, C04: { x: 0, y: 4, data: 0 }, C14: { x: 1, y: 4, data: 0 }, 
                C24: { x: 2, y: 4, data: 0 }, C34: { x: 3, y: 4, data: 0 }, C44: { x: 4, y: 4, data: 0 }, C54: { x: 5, y: 4, data: 0 }, C64: { x: 6, y: 4, data: 0 }, 
                C74: { x: 7, y: 4, data: 0 }, C05: { x: 0, y: 5, data: 0 }, C15: { x: 1, y: 5, data: 0 }, C25: { x: 2, y: 5, data: 0 }, C35: { x: 3, y: 5, data: 0 }, 
                C45: { x: 4, y: 5, data: 0 }, C55: { x: 5, y: 5, data: 0 }, C65: { x: 6, y: 5, data: 0 }, C75: { x: 7, y: 5, data: 0 }, C06: { x: 0, y: 6, data: { color:"white",name: "WhitePawn0" } }, 
                C16: { x: 1, y: 6, data: { color:"white",name: "WhitePawn1" } }, C26: { x: 2, y: 6, data: { color:"white",name: "WhitePawn2" } }, C36: { x: 3, y: 6, data: { color:"white",name: "WhitePawn3" } }, 
                C46: { x: 4, y: 6, data: { color:"white",name: "WhitePawn4" } }, C56: { x: 5, y: 6, data: { color:"white",name: "WhitePawn5" } }, C66: { x: 6, y: 6, data: { color:"white",name: "WhitePawn6" } }, 
                C76: { x: 7, y: 6, data: { color:"white",name: "WhitePawn7" } }, C07: { x: 0, y: 7, data: { color:"white",name: "WhiteRookLeft" } }, C17: { x: 1, y: 7, data: { color:"white",name: "WhiteKnightLeft" } }, 
                C27: { x: 2, y: 7, data: { color:"white",name: "WhiteBishopLeft" } }, C37: { x: 3, y: 7, data: { color:"white",name: "WhiteKing" } }, C47: { x: 4, y: 7, data: { color:"white",name: "WhiteQueen" } }, 
                C57: { x: 5, y: 7, data: { color:"white",name: "WhiteBishopRight" } }, C67: { x: 6, y: 7, data: { color:"white",name: "WhiteKnightRight" } }, C77: { x: 7, y: 7, data: { color:"white",name: "WhiteRookRight" } } };
                // trong data phai truyen vao object co vi tri ten mau
                
                // pawn { name : "" }
            
                var makeNewGame = () => {
                    for(let p in originPieces) {
                        originPieces[p].x=originPieces[p].originX+0;
                        originPieces[p].y=originPieces[p].originY+0;
                    }
                }
            
                var checkPawnMoves = (pawn) => {  // tra ve cac o co the di duoc
                    let moves = [];
                    let Pawn = originPieces[pawn.name];
                    if(Pawn.y!==0 && Pawn.y!==7) {
                        if(Pawn.x===Pawn.originX && Pawn.y===Pawn.originY) {  // tot o vi tri ban dau
                            console.log('origin');
                            if(Pawn.color==="white") {
                                let trai = boardCells[`C${Pawn.x-1}${Pawn.y-1}`];
                                let giua = boardCells[`C${Pawn.x  }${Pawn.y-1}`];
                                let phai = boardCells[`C${Pawn.x+1}${Pawn.y-1}`];
                                let tren = boardCells[`C${Pawn.x  }${Pawn.y-2}`];
                                if( trai && trai.data.color==="black") {
                                    moves.push([trai.x,trai.y])
                                }
                                if( giua && giua.data===0 ) {
                                    moves.push([giua.x,giua.y])
                                }
                                if( phai && phai.data.color==="black") {
                                    moves.push([phai.x,phai.y])
                                }
                                if( tren && tren.data===0 ) {
                                    moves.push([tren.x,tren.y])
                                }
                            }
                            else {
                                
                                
                                let trai = boardCells[`C${Pawn.x-1}${Pawn.y+1}`];
                                let giua = boardCells[`C${Pawn.x  }${Pawn.y+1}`];
                                let phai = boardCells[`C${Pawn.x+1}${Pawn.y+1}`];
                                let tren = boardCells[`C${Pawn.x  }${Pawn.y+2}`];
                                if( trai && trai.data.color==="white") {
                                    moves.push([trai.x,trai.y])
                                }
                                if( giua && giua.data===0 ) {
                                    moves.push([giua.x,giua.y])
                                }
                                if( phai && phai.data.color==="white") {
                                    moves.push([phai.x,phai.y])
                                }
                                if( tren && tren.data===0 ) {
                                    moves.push([tren.x,tren.y])
                                }
                                
                            }
                        }
                        else {
                            console.log('not origin');
                            if(Pawn.color==="white") {
                                let trai = boardCells[`C${Pawn.x-1}${Pawn.y-1}`];
                                let giua = boardCells[`C${Pawn.x  }${Pawn.y-1}`];
                                let phai = boardCells[`C${Pawn.x+1}${Pawn.y-1}`];
                                if( trai && trai.data.color==="black") {
                                    moves.push([trai.x,trai.y])
                                }
                                if( giua && giua.data===0 ) {
                                    moves.push([giua.x,giua.y])
                                }
                                if( phai && phai.data.color==="black") {
                                    moves.push([phai.x,phai.y])
                                }
                            }
                            else {
                                let trai = boardCells[`C${Pawn.x-1}${Pawn.y+1}`];
                                let giua = boardCells[`C${Pawn.x  }${Pawn.y+1}`];
                                let phai = boardCells[`C${Pawn.x+1}${Pawn.y+1}`];
                                if( trai && trai.data.color==="white") {
                                    moves.push([trai.x,trai.y])
                                }
                                if( giua && giua.data===0 ) {
                                    moves.push([giua.x,giua.y])
                                }
                                if( phai && phai.data.color==="white") {
                                    moves.push([phai.x,phai.y])
                                }
                                
                            }
                        }
                    }
                    return moves;
                }
                
                var checkRookMoves = (rook) => {
                    let moves = [];
                    let Rook = originPieces[rook.name];
                            
                            
                        for(let m = Rook.x-1; m>=0;m-- ) {  // trai
                            let trai = boardCells[`C${m}${Rook.y}`];
                            if(trai.data.color  && trai.data.color!==Rook.color) {
                                moves.push([trai.x,trai.y]);
                                break;
                            }
                            else if (trai && trai.data===0) {
                                moves.push([trai.x,trai.y]);
                            }
                            else {break;}
                        }
                        for(let m = Rook.x+1; m<8;m++ ) { // phai
                            let phai = boardCells[`C${m}${Rook.y}`];
                            
                            if(phai.data.color  && phai.data.color!==Rook.color) {
                                moves.push([phai.x,phai.y]);
                                break;
                            }
                            else if (phai && phai.data===0) {
                                moves.push([phai.x,phai.y]);
                            }
                            else {break;}
                        }
                        for(let m = Rook.y-1; m>=0;m = m-1 ) { // tren

                            let tren = boardCells[`C${Rook.x}${m}`];
                            console.log(tren);
                            if( tren.data.color  &&  tren.data.color!==Rook.color) {
                                moves.push([tren.x,tren.y]);
                                break;
                            }
                            else if (tren && tren.data===0) {
                                moves.push([tren.x,tren.y]);
                            }
                            else {break;}
                        }
                        for(let m = Rook.y+1; m < 8; m++ ) { //duoi
                            let duoi = boardCells[`C${Rook.x}${m}`];
                            if( duoi.data.color && duoi.data.color!==Rook.color) {
                                console.log('if')
                                moves.push([duoi.x,duoi.y]);
                                break;
                            }
                            else if (duoi && duoi.data===0) {
                                console.log('else if')
                                moves.push([duoi.x,duoi.y]);
                            }
                            else {
                                console.log('else');
                                
                                break;}
                        }
                            
                    return moves;
                }
                
                var checkKnightMoves=(knight)=> {
                    let moves = [];
                    let Knight = originPieces[knight.name];
                    let rawMoves=[];
                    if(boardCells[`C${Knight.x-2}${Knight.y-1}`]) { rawMoves.push([Knight.x-2,Knight.y-1]);}
                    if(boardCells[`C${Knight.x+2}${Knight.y-1}`]) { rawMoves.push([Knight.x+2,Knight.y-1]);}
                    if(boardCells[`C${Knight.x-2}${Knight.y+1}`]) { rawMoves.push([Knight.x-2,Knight.y+1]);}
                    if(boardCells[`C${Knight.x+2}${Knight.y+1}`]) { rawMoves.push([Knight.x+2,Knight.y+1]);}
                    if(boardCells[`C${Knight.x+1}${Knight.y-2}`]) { rawMoves.push([Knight.x+1,Knight.y-2]);}
                    if(boardCells[`C${Knight.x+1}${Knight.y+2}`]) { rawMoves.push([Knight.x+1,Knight.y+2]);}
                    if(boardCells[`C${Knight.x-1}${Knight.y-2}`]) { rawMoves.push([Knight.x-1,Knight.y-2]);}
                    if(boardCells[`C${Knight.x-1}${Knight.y+2}`]) { rawMoves.push([Knight.x-1,Knight.y+2]);}
                        console.log(rawMoves);
                        
                    rawMoves.filter(k=> {
                        if(  boardCells[`C${k[0]}${k[1]}`].data.color!==Knight.color || boardCells[`C${k[0]}${k[1]}`].data===0 ) {
                            moves.push(k);
                        }
                    })
                    return moves;   
                }
                var checkBishopMoves = (bishop) => {
                    let moves = [];
                    let Bishop = originPieces[bishop.name];
                    let br ;
                    
                        
                            for(let b in boardCells) {
                                        for(let a=1; a <= 7;a++) {
                                           let br;
                                            if( boardCells[b].x-Bishop.x ===a && boardCells[b].y-Bishop.y===a ) {
                                                        
                                                            if(boardCells[b].data.color!== Bishop.color ) {
                                                                moves.push([boardCells[b].x,boardCells[b].y]);
                                                                br = true;
                                                            }
                                                            else if(boardCells[b].data===0) {
                                                                moves.push([boardCells[b].x,boardCells[b].y]);
                                                            }
                                                            
                                                    }
                                                    if(br===true) {
                                                        break;
                                                    }
                                                }
                                        for(let a=1; a <= 7;a++) {
                                           let br;
                                            if( boardCells[b].x-Bishop.x ===a && boardCells[b].y-Bishop.y===a ) {
                                                
                                                    if(boardCells[b].data.color!== Bishop.color ) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                        br = true;
                                                    }
                                                    else if(boardCells[b].data===0) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                    }
                                                    
                                            }
                                            if(br===true) {
                                                break;
                                            }
                                        }
                                        for(let a=1; a <= 7;a++) {
                                           let br;
                                            if( boardCells[b].x-Bishop.x ===a && boardCells[b].y-Bishop.y===a ) {
                                                
                                                    if(boardCells[b].data.color!== Bishop.color ) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                        br = true;
                                                    }
                                                    else if(boardCells[b].data===0) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                    }
                                                    
                                            }
                                            if(br===true) {
                                                break;
                                            }
                                        }
                                        for(let a=1; a <= 7;a++) {
                                           let br;
                                            if( boardCells[b].x-Bishop.x ===a && boardCells[b].y-Bishop.y===a ) {
                                                
                                                    if(boardCells[b].data.color!== Bishop.color ) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                        br = true;
                                                    }
                                                    else if(boardCells[b].data===0) {
                                                        moves.push([boardCells[b].x,boardCells[b].y]);
                                                    }
                                                    
                                            }
                                            if(br===true) {
                                                break;
                                            }
                                        }
                                            
                                    
                            } // for b in boardCells
                        
                    
                    return moves; 
                }
                
                var checkQueenMoves = (queen)=> {
                    let moves = [];
                    let bishop = checkBishopMoves(queen);
                    let rook = checkRookMoves(queen);
                    moves = moves.concat(bishop,rook);
                    return moves;
                }
                var checkKingMoves = (king)=> {
                    let moves = [];
                    let King = originPieces[king.name]
                    for(let b in boardCells) {
                        if( Math.abs(b.x-King.x)===1 && Math.abs(b.y-King.y)===1 ) {
                            if(b.data.color && b.data.color!== King.color || b.data===0) {
                                moves.push(b);
                            }
                        }
                    };
                
                    // trai
                        let trai = boardCells[`C${King.x-1}${King.y}`];
                        if( trai && trai.data.color!==King.color|| trai && trai.data===0) {
                            moves.push([trai.x,trai.y]);
                            
                        }
                    
                    // phai
                        let phai = boardCells[`C${King.x+1}${King.y}`];
                        if(phai && phai.data.color!==King.color || phai && phai.data===0) {
                            moves.push([phai.x,phai.y]); 
                        }
                    
                    // tren
                        let tren = boardCells[`C${King.x}${King.y-1}`];
                        if(tren && tren.data.color!==King.color || tren && tren.data===0) {
                            moves.push([tren.x,tren.y]);   
                        }
                    
                    //duoi
                        let duoi = boardCells[`C${King.x}${King.y+1}`];
                        if(duoi && duoi.data.color!==King.color || duoi&& duoi.data===0) {
                            moves.push([duoi.x,duoi.y]);
                            
                        }
                    
                        return moves;
                
                }
                var possibleMoves = (data) => {
                    let moves=[];
                    if(originPieces[data.name].type==="Pawn") {
                        moves=checkPawnMoves(data);
                        console.log(originPieces[data.name].type);
                        
                    }
                    else if(originPieces[data.name].type==="Rook") {
                        moves=checkRookMoves(data);
                        console.log(originPieces[data.name].type);
                    }
                    else if(originPieces[data.name].type==="Knight") {
                        moves=checkKnightMoves(data);
                        console.log(originPieces[data.name].type);
                    }
                    else if(originPieces[data.name].type==="Bishop") {
                        moves=checkBishopMoves(data);
                        console.log(originPieces[data.name].type);
                    }
                    else if(originPieces[data.name].type==="Queen") {
                        moves=checkQueenMoves(data);
                        console.log(originPieces[data.name].type);
                    }
                    else if(originPieces[data.name].type==="King") {
                        moves=checkKingMoves(data);
                        console.log(originPieces[data.name].type);
                    }
                    else {console.log("wrong name");
                    }
                    return moves;
                }
                var legalCheck = (data) => {
                    let moves = possibleMoves(data);
                    
                    for(let m = 0; m<moves.length ; m++) {
                    if(data.nextX===moves[m][0] && data.nextY===moves[m][1] ) {
                        originPieces[data.name].x=data.nextX;
                        originPieces[data.name].y=data.nextY;
                        boardCells[`C${data.x}${data.y}`].data = 0;
                        boardCells[`C${data.nextX}${data.nextY}`].data = { color : data.color, name :data.name }  ; // data: { color:"black",name: "BlackKing" } }
                        return true;
                        break;
                    }
                    }
                    return false;
            
                }


                socket.on('validateUser', function (data, res) {
                    // ...
                
                    if (data) {
                        if(userNames.indexOf(data) < 0 )
                        {       
                                userNames.push(data.trim());
                                makeNewGame();
                                boardCells=originBoardCells;
                                res(null, 'Success');

                                socket.on('picked', function (data,res) {
                                    console.log(data);
                                    if(data) {
                                    let a = possibleMoves(data);
                                    res(null,a);
                                    }
                                    else{
                                    var err = 'Failed to connect' ;
                                    res(err)
                                    }
                                });
                            
                                socket.on('moved', function (data,res) {
                                    console.log(data);
                                    if(data) {
                                    if (legalCheck(data)) {
                                        res(null, "Valid");
                                    }else
                                        res(null, "Invalid");
                                    }
                                    else{
                                    var err = 'Failed to connect' ;
                                    res(err)
                                    }
                                });
                            

                            }
                        else {res(null, 'Failed');}
                    } else {
                        var err = 'Failed to connect' ;
                        res(err); // Send back error
                    }
                });

                    socket.on('disconnect', function () {
                        console.log('disconnected');
                        makeNewGame();
                        boardCells=originBoardCells;
                });
    });// on connection
}  // run
} // class


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