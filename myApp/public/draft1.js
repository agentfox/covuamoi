var originPieces = {
    WhiteKing: {
        type: "King",
        color: "white",
        src: "chess_pieces/wk.svg",
        originX: 3,
        originY: 7,
        x: 3,
        y: 7
    },
    WhiteQueen: {
        type: "Queen",
        color: "white",
        src: "chess_pieces/wq.svg",
        originX: 4,
        originY: 7,
        x: 4,
        y: 7
    },
    WhiteBishopLeft: {
        type: "Bishop",
        color: "white",
        src: "chess_pieces/wb.svg",
        originX: 2,
        originY: 7,
        x: 2,
        y: 7
    },
    WhiteBishopRight: {
        type: "Bishop",
        color: "white",
        src: "chess_pieces/wb.svg",
        originX: 5,
        originY: 7,
        x: 5,
        y: 7
    },
    WhiteKnightLeft: {
        type: "Knight",
        color: "white",
        src: "chess_pieces/wn.svg",
        originX: 3,
        originY: 7,
        x: 1,
        y: 7
    },
    WhiteKnightRight: {
        type: "Knight",
        color: "white",
        src: "chess_pieces/wn.svg",
        originX: 6,
        originY: 7,
        x: 6,
        y: 7
    },
    WhiteRookLeft: {
        type: "Rook",
        color: "white",
        src: "chess_pieces/wr.svg",
        originX: 0,
        originY: 7,
        x: 0,
        y: 7
    },
    WhiteRookRight: {
        type: "Rook",
        color: "white",
        src: "chess_pieces/wr.svg",
        originX: 7,
        originY: 7,
        x: 7,
        y: 7
    },
    WhitePawn0: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 0,
        originY: 6,
        x: 0,
        y: 6
    },
    WhitePawn1: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 1,
        originY: 6,
        x: 1,
        y: 6
    },
    WhitePawn2: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 2,
        originY: 6,
        x: 2,
        y: 6
    },
    WhitePawn3: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 3,
        originY: 6,
        x: 3,
        y: 6
    },
    WhitePawn4: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 4,
        originY: 6,
        x: 4,
        y: 6
    },
    WhitePawn5: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 5,
        originY: 6,
        x: 5,
        y: 6
    },
    WhitePawn6: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 6,
        originY: 6,
        x: 6,
        y: 6
    },
    WhitePawn7: {
        type: "Pawn",
        color: "white",
        src: "chess_pieces/wp.svg",
        originX: 7,
        originY: 6,
        x: 7,
        y: 6
    },
    BlackKing: {
        type: "King",
        color: "black",
        src: "chess_pieces/bk.svg",
        originX: 3,
        originY: 0,
        x: 3,
        y: 0
    },
    BlackQueen: {
        type: "Queen",
        color: "black",
        src: "chess_pieces/bq.svg",
        originX: 4,
        originY: 0,
        x: 4,
        y: 0
    },
    BlackBishopLeft: {
        type: "Bishop",
        color: "black",
        src: "chess_pieces/bb.svg",
        originX: 2,
        originY: 0,
        x: 2,
        y: 0
    },
    BlackBishopRight: {
        type: "Bishop",
        color: "black",
        src: "chess_pieces/bb.svg",
        originX: 5,
        originY: 0,
        x: 5,
        y: 0
    },
    BlackKnightLeft: {
        type: "Knight",
        color: "black",
        src: "chess_pieces/bn.svg",
        originX: 1,
        originY: 0,
        x: 1,
        y: 0
    },
    BlackKnightRight: {
        type: "Knight",
        color: "black",
        src: "chess_pieces/bn.svg",
        originX: 6,
        originY: 0,
        x: 6,
        y: 0
    },
    BlackRookLeft: {
        type: "Rook",
        color: "black",
        src: "chess_pieces/br.svg",
        originX: 0,
        originY: 0,
        x: 0,
        y: 0
    },
    BlackRookRight: {
        type: "Rook",
        color: "black",
        src: "chess_pieces/br.svg",
        originX: 7,
        originY: 0,
        x: 7,
        y: 0
    },
    BlackPawn0: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 0,
        originY: 1,
        x: 0,
        y: 1
    },
    BlackPawn1: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 1,
        originY: 1,
        x: 1,
        y: 1
    },
    BlackPawn2: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 2,
        originY: 1,
        x: 2,
        y: 1
    },
    BlackPawn3: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 3,
        originY: 1,
        x: 3,
        y: 1
    },
    BlackPawn4: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 4,
        originY: 1,
        x: 4,
        y: 1
    },
    BlackPawn5: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 5,
        originY: 1,
        x: 5,
        y: 1
    },
    BlackPawn6: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 6,
        originY: 1,
        x: 6,
        y: 1
    },
    BlackPawn7: {
        type: "Pawn",
        color: "black",
        src: "chess_pieces/bp.svg",
        originX: 7,
        originY: 1,
        x: 7,
        y: 1
    }
};



let su = { 00 :{ x: 0, y :0 ,data : {name : chesspiece} },10 :{ x: 1, y :0 ,data : {name : chesspiece} },20 :{ x: 2, y :0 ,data : {name : chesspiece} },30 :{ x: 3, y :0 ,data : {name : chesspiece} },40 :{ x: 4, y :0 ,data : {name : chesspiece} },50 :{ x: 5, y :0 ,data : {name : chesspiece} },60 :{ x: 6, y :0 ,data : {name : chesspiece} },70 :{ x: 7, y :0 ,data : {name : chesspiece} },01 :{ x: 0, y :1 ,data : {name : chesspiece} },11 :{ x: 1, y :1 ,data : {name : chesspiece} },21 :{ x: 2, y :1 ,data : {name : chesspiece} },31 :{ x: 3, y :1 ,data : {name : chesspiece} },41 :{ x: 4, y :1 ,data : {name : chesspiece} },51 :{ x: 5, y :1 ,data : {name : chesspiece} },61 :{ x: 6, y :1 ,data : {name : chesspiece} },71 :{ x: 7, y :1 ,data : {name : chesspiece} },02 :{ x: 0, y :2 ,data : 0 },12 :{ x: 1, y :2 ,data : 0 },22 :{ x: 2, y :2 ,data : 0 },32 :{ x: 3, y :2 ,data : 0 },42 :{ x: 4, y :2 ,data : 0 },52 :{ x: 5, y :2 ,data : 0 },62 :{ x: 6, y :2 ,data : 0 },72 :{ x: 7, y :2 ,data : 0 },03 :{ x: 0, y :3 ,data : 0 },13 :{ x: 1, y :3 ,data : 0 },23 :{ x: 2, y :3 ,data : 0 },33 :{ x: 3, y :3 ,data : 0 },43 :{ x: 4, y :3 ,data : 0 },53 :{ x: 5, y :3 ,data : 0 },63 :{ x: 6, y :3 ,data : 0 },73 :{ x: 7, y :3 ,data : 0 },04 :{ x: 0, y :4 ,data : 0 },14 :{ x: 1, y :4 ,data : 0 },24 :{ x: 2, y :4 ,data : 0 },34 :{ x: 3, y :4 ,data : 0 },44 :{ x: 4, y :4 ,data : 0 },54 :{ x: 5, y :4 ,data : 0 },64 :{ x: 6, y :4 ,data : 0 },74 :{ x: 7, y :4 ,data : 0 },05 :{ x: 0, y :5 ,data : 0 },15 :{ x: 1, y :5 ,data : 0 },25 :{ x: 2, y :5 ,data : 0 },35 :{ x: 3, y :5 ,data : 0 },45 :{ x: 4, y :5 ,data : 0 },55 :{ x: 5, y :5 ,data : 0 },65 :{ x: 6, y :5 ,data : 0 },75 :{ x: 7, y :5 ,data : 0 },06 :{ x: 0, y :6 ,data : {name : chesspiece} },16 :{ x: 1, y :6 ,data : {name : chesspiece} },26 :{ x: 2, y :6 ,data : {name : chesspiece} },36 :{ x: 3, y :6 ,data : {name : chesspiece} },46 :{ x: 4, y :6 ,data : {name : chesspiece} },56 :{ x: 5, y :6 ,data : {name : chesspiece} },66 :{ x: 6, y :6 ,data : {name : chesspiece} },76 :{ x: 7, y :6 ,data : {name : chesspiece} },07 :{ x: 0, y :7 ,data : {name : chesspiece} },17 :{ x: 1, y :7 ,data : {name : chesspiece} },27 :{ x: 2, y :7 ,data : {name : chesspiece} },37 :{ x: 3, y :7 ,data : {name : chesspiece} },47 :{ x: 4, y :7 ,data : {name : chesspiece} },57 :{ x: 5, y :7 ,data : {name : chesspiece} },67 :{ x: 6, y :7 ,data : {name : chesspiece} },77 :{ x: 7, y :7 ,data : {name : chesspiece} } }



var Cells = { "C00": { "x": 0, "y": 0, "data": { "name": "BlackRookLeft" } }, "C10": { "x": 1, "y": 0, "data": { "name": "BlackKnightLeft" } }, "C20": { "x": 2, "y": 0, "data": { "name": "BlackBishopLeft" } },
 "C30": { "x": 3, "y": 0, "data": { "name": "BlackKing" } }, "C40": { "x": 4, "y": 0, "data": { "name": "BlackQueen" } }, "C50": { "x": 5, "y": 0, "data": { "name": "BlackBishopRight" } }, 
 "C60": { "x": 6, "y": 0, "data": { "name": "BlackKnightRight" } }, "C70": { "x": 7, "y": 0, "data": { "name": "BlackRookRight" } }, "C01": { "x": 0, "y": 1, "data": { "name": "BlackPawn0" } }, 
 "C11": { "x": 1, "y": 1, "data": { "name": "BlackPawn1" } }, "C21": { "x": 2, "y": 1, "data": { "name": "BlackPawn2" } }, "C31": { "x": 3, "y": 1, "data": { "name": "BlackPawn3" } }, 
 "C41": { "x": 4, "y": 1, "data": { "name": "BlackPawn4" } }, "C51": { "x": 5, "y": 1, "data": { "name": "BlackPawn5" } }, "C61": { "x": 6, "y": 1, "data": { "name": "BlackPawn6" } }, 
 "C71": { "x": 7, "y": 1, "data": { "name": "BlackPawn7" } }, "C02": { "x": 0, "y": 2, "data": 0 }, "C12": { "x": 1, "y": 2, "data": 0 }, "C22": { "x": 2, "y": 2, "data": 0 }, 
 "C32": { "x": 3, "y": 2, "data": 0 }, "C42": { "x": 4, "y": 2, "data": 0 }, "C52": { "x": 5, "y": 2, "data": 0 }, "C62": { "x": 6, "y": 2, "data": 0 }, "C72": { "x": 7, "y": 2, "data": 0 }, 
 "C03": { "x": 0, "y": 3, "data": 0 }, "C13": { "x": 1, "y": 3, "data": 0 }, "C23": { "x": 2, "y": 3, "data": 0 }, "C33": { "x": 3, "y": 3, "data": 0 }, "C43": { "x": 4, "y": 3, "data": 0 }, 
 "C53": { "x": 5, "y": 3, "data": 0 }, "C63": { "x": 6, "y": 3, "data": 0 }, "C73": { "x": 7, "y": 3, "data": 0 }, "C04": { "x": 0, "y": 4, "data": 0 }, "C14": { "x": 1, "y": 4, "data": 0 }, 
 "C24": { "x": 2, "y": 4, "data": 0 }, "C34": { "x": 3, "y": 4, "data": 0 }, "C44": { "x": 4, "y": 4, "data": 0 }, "C54": { "x": 5, "y": 4, "data": 0 }, "C64": { "x": 6, "y": 4, "data": 0 }, 
 "C74": { "x": 7, "y": 4, "data": 0 }, "C05": { "x": 0, "y": 5, "data": 0 }, "C15": { "x": 1, "y": 5, "data": 0 }, "C25": { "x": 2, "y": 5, "data": 0 }, "C35": { "x": 3, "y": 5, "data": 0 }, 
 "C45": { "x": 4, "y": 5, "data": 0 }, "C55": { "x": 5, "y": 5, "data": 0 }, "C65": { "x": 6, "y": 5, "data": 0 }, "C75": { "x": 7, "y": 5, "data": 0 }, "C06": { "x": 0, "y": 6, "data": { "name": "WhitePawn0" } }, 
 "C16": { "x": 1, "y": 6, "data": { "name": "WhitePawn1" } }, "C26": { "x": 2, "y": 6, "data": { "name": "WhitePawn2" } }, "C36": { "x": 3, "y": 6, "data": { "name": "WhitePawn3" } }, 
 "C46": { "x": 4, "y": 6, "data": { "name": "WhitePawn4" } }, "C56": { "x": 5, "y": 6, "data": { "name": "WhitePawn5" } }, "C66": { "x": 6, "y": 6, "data": { "name": "WhitePawn6" } }, 
 "C76": { "x": 7, "y": 6, "data": { "name": "WhitePawn7" } }, "C07": { "x": 0, "y": 7, "data": { "name": "WhiteRookLeft" } }, "C17": { "x": 1, "y": 7, "data": 0 }, 
 "C27": { "x": 2, "y": 7, "data": { "name": "WhiteBishopLeft" } }, "C37": { "x": 3, "y": 7, "data": { "name": "WhiteKnightLeft" } }, "C47": { "x": 4, "y": 7, "data": { "name": "WhiteQueen" } }, 
 "C57": { "x": 5, "y": 7, "data": { "name": "WhiteBishopRight" } }, "C67": { "x": 6, "y": 7, "data": { "name": "WhiteKnightRight" } }, "C77": { "x": 7, "y": 7, "data": { "name": "WhiteRookRight" } } };
 
 window.onload = () => {

    var socket = socketCluster.connect();

      socket.on('error', function (err) {
      console.log('loi r');
      });

      socket.on('connect', function () {
          console.log('da vao roi');
          socket.emit('test1',"works");
          let btnPlay= document.getElementById('play');
          btnPlay.onclick = ()=> {

          var userName = document.getElementById("Player").value;
          console.log(userName);
          
          socket.emit("validateUser", userName,(err, resData)=> {
            if (err) {
              console.log('loi ket noi')
            } else {
            // Event was emitted successfully
              if(resData === 'Failed') {
                  alert('Username is already taken. Try another.')
              }
              else {
              console.log('success!')

           // -------------------- Create the chess board --------------------
          var width = window.innerWidth;
          var height = window.innerHeight;
          var stage = new Konva.Stage({
              container: 'container',
              width: width,
              height: height
          });
          var layer = new Konva.Layer();
          for (let i = 0; i <4 ; i++)
          { 
              for (let j = 0; j <4 ; j++)
              { 
              var rect1 = new Konva.Rect({
                  x: i*160 ,
                  y: j*160 ,
                  width: 80,
                  height: 80,
                  fill: 'gray'
              });
              var rect2 = new Konva.Rect({
                  x: i*160 + 80 ,
                  y: j*160 + 80,
                  width: 80,
                  height: 80,
                  fill: 'gray'
              });
      
              // add the shape to the layer
              layer.add(rect1);
              layer.add(rect2);
              // add the layer to the stage
              stage.add(layer);
              }
          }
          //-----------------------------------------------------------------
      
          // ---------------------Create the chess pieces ------------------- 
          var bound = function(pos) { var newY,newX; if(pos.y>0&&pos.y
          <560) { newY=pos.y }else if(pos.y <=0 ) { newY=0 ; }else { newY=560; } if(pos.x>0&&pos.x
              <560) { newX=pos.x }else if(pos.x <=0 ) { newX=0 ; }else { newX=560; } return { x: newX, y: newY }; } ;
              
          var Pieces=[{name:"WhiteKing",type:"King",color:"white",src:"chess_pieces/wk.svg",x:3,y:7},{name:"WhiteQueen",type:"Queen",color:"white",src:"chess_pieces/wq.svg",x:4,y:7},
  {name:"WhiteBishopLeft",type:"Bishop",color:"white",src:"chess_pieces/wb.svg",x:2,y:7},{name:"WhiteBishopRight",type:"Bishop",color:"white",src:"chess_pieces/wb.svg",x:5,y:7},
  {name:"WhiteKnightLeft",type:"Knight",color:"white",src:"chess_pieces/wn.svg",x:1,y:7},{name:"WhiteKnightRight",type:"Knight",color:"white",src:"chess_pieces/wn.svg",x:6,y:7},
  {name:"WhiteRookLeft",type:"Rook",color:"white",src:"chess_pieces/wr.svg",x:0,y:7},{name:"WhiteRookRight",type:"Rook",color:"white",src:"chess_pieces/wr.svg",x:7,y:7},
  {name:"WhitePawn0",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:0,y:6},{name:"WhitePawn1",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:1,y:6},
  {name:"WhitePawn2",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:2,y:6},{name:"WhitePawn3",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:3,y:6},
  {name:"WhitePawn4",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:4,y:6},{name:"WhitePawn5",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:5,y:6},
  {name:"WhitePawn6",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:6,y:6},{name:"WhitePawn7",type:"Pawn",color:"white",src:"chess_pieces/wp.svg",x:7,y:6},
  {name:"BlackKing",type:"King",color:"black",src:"chess_pieces/bk.svg",x:3,y:0},{name:"BlackQueen",type:"Queen",color:"black",src:"chess_pieces/bq.svg",x:4,y:0},
  {name:"BlackBishopLeft",type:"Bishop",color:"black",src:"chess_pieces/bb.svg",x:2,y:0},{name:"BlackBishopRight",type:"Bishop",color:"black",src:"chess_pieces/bb.svg",x:5,y:0},
  {name:"BlackKnightLeft",type:"Knight",color:"black",src:"chess_pieces/bn.svg",x:1,y:0},{name:"BlackKnightRight",type:"Knight",color:"black",src:"chess_pieces/bn.svg",x:6,y:0},
  {name:"BlackRookLeft",type:"Rook",color:"black",src:"chess_pieces/br.svg",x:0,y:0},{name:"BlackRookRight",type:"Rook",color:"black",src:"chess_pieces/br.svg",x:7,y:0},
  {name:"BlackPawn0",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:0,y:1},{name:"BlackPawn1",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:1,y:1},
  {name:"BlackPawn2",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:2,y:1},{name:"BlackPawn3",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:3,y:1},
  {name:"BlackPawn4",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:4,y:1},{name:"BlackPawn5",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:5,y:1},
  {name:"BlackPawn6",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:6,y:1},{name:"BlackPawn7",type:"Pawn",color:"black",src:"chess_pieces/bp.svg",x:7,y:1}];
                  
          
              for(let i in Pieces) {
                  let imgTest = new Image();
                  imgTest.src = Pieces[i].src;
                  imgTest.onload = function() {
                  
                      let piece = new Konva.Image({
                          x: Pieces[i].x*80,
                          y: Pieces[i].y*80,
                          image: imgTest,
                          width: 80,
                          height: 80,
                          draggable: true,
                          dragBoundFunc: function(pos) {
                          return bound(pos)
                          }
                      });

                      let prevPos ;
                      piece.on('dragstart', function() {
                          prevPos = {...{
                           x : Math.floor(0.5+(piece.attrs.x-0)/80)*80,
                           y : Math.floor(0.5+piece.attrs.y/80)*80
                          }
                          } 
                          console.log(prevPos);
                      });
                       
                      piece.on('dragend', function() {
                          
                          piece.setPosition({
                              x : Math.floor(0.5+(piece.attrs.x-0)/80)*80,
                              y : Math.floor(0.5+piece.attrs.y/80)*80 
                          });
                          Pieces[i].x = piece.attrs.x/80;
                          Pieces[i].y = piece.attrs.y/80-2;
                          // send the data of the move  and wait for validation ------------------------
                          socket.emit('moved',{ name : Pieces[i].name,color:Pieces[i].color, type:Pieces[i].type, x : piece.attrs.x/80 , y : piece.attrs.y/80, prevX : prevPos.x/80,prevY : prevPos.y/80 },(err, resData) => {
                            if (err ) {
                                console.log('loi duong truyen');
                                
                              piece.setPosition({
                                      x : prevPos.x,
                                      y : prevPos.y 
                                      });
                              Pieces[i].x = piece.attrs.x/80;
                              Pieces[i].y = piece.attrs.y/80-2;
                              // add the shape to the layer
                              layer.add(piece);
                              // add the layer to the stage
                              stage.add(layer);
                            } else { 
                                  if(resData==="Valid") {
                                      // Event was emitted successfully
                                          console.log( piece.attrs.x,piece.attrs.y);
                                          // add the shape to the layer
                                          layer.add(piece);
                                          // add the layer to the stage
                                          stage.add(layer);
                                          return;
                                  }
                                  else if (resData==="Invalid")
                                    {console.log('khong dc di nhu the');
                                          piece.setPosition({
                                                  x : prevPos.x,
                                                  y : prevPos.y 
                                                  });
                                          Pieces[i].x = piece.attrs.x/80;
                                          Pieces[i].y = piece.attrs.y/80-2;
                                          // add the shape to the layer
                                          layer.add(piece);
                                          // add the layer to the stage
                                          stage.add(layer);}
                                  else console.log(typeof resData);
                                  
                            }
                            });

                          // ----------------------------------------------------------

                      });
                      // add the shape to the layer
                      layer.add(piece);
                      // add the layer to the stage
                      stage.add(layer);
                  };
                  
                  }



            }
          }
          })
        }

      })      
        

     
        
      } //window onload