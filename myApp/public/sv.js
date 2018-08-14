var originPieces = [{name:"WhiteKing",type:"King",color:"white",src:"chess_pieces/wk.svg",originX:3,originY:7,x:3,y:7},{name:"WhiteQueen",type:"Queen",color:"white",src:"chess_pieces/wq.svg",originX:4,originY:7,x:4,y:7},
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

var boardCells = [];                     // 64 board cells
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let a=[i,j];
        boardCells.push(a) ; 
    }  
}
const checkPawnOriginPos = (pawn) => {   // check if the pawn start moving from its original position
    if( originPieces.find((p)=> { 
          if(p.name === pawn.name && p.originX === pawn.prevX && p.originY === pawn.prevY ) 
            {return true} 
          }) ) {return true;}
    return false;
  };

const pawnPossibleMoves=(piece)=>{ // piece la data gui tu client
    let pawnArr =  boardCells.filter(p=>{ // p la mang vi tri cac cell trong board
        if(piece.color ==='white') {
            if(checkPawnOriginPos(piece)) {
                    if( (p[0]===piece.prevX&&p[1]===piece.prevY-1) || (p[0]===piece.prevX&&p[1]===piece.prevY-2) || (p[0]===piece.prevX+1&&p[1]===piece.prevY-1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY-1 )  ) {
                            if(originPieces.find(P=>{
                                if(P.color==="white"&&P.x===p[0]&&P.y===p[1] )
                                {return false}
                                else if(P.color==="black"&&P.x===p[0]&&P.y===p[1]&& (p[0]===piece.prevX&&p[1]===piece.prevY-1) || (p[0]===piece.prevX&&p[1]===piece.prevY-2) ) 
                                {return false}
                                else if (P.color==="black"&&P.x===p[0]&&P.y===p[1]&& ( (p[0]===piece.prevX+1&&p[1]===piece.prevY-1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY-1 ) )) 
                                { return  true }  // co P thoa man => if(true)
                                else {return false}
                            })) { return  true } // p duoc chon
                            else {return false}
                            
                    }
            }
            else{
                if( (p[0]===piece.prevX&&p[1]===piece.prevY-1) || (p[0]===piece.prevX+1&&p[1]===piece.prevY-1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY-1 )  ) {
                    if(originPieces.find(P=>{
                        if(P.color==="white"&&P.x===p[0]&&P.y===p[1] )
                        {return false}
                        else if(P.color==="black"&&P.x===p[0]&&P.y===p[1]&& (p[0]===piece.prevX&&p[1]===piece.prevY-1) )   
                        {return false}
                        else if (P.color==="black"&&P.x===p[0]&&P.y===p[1]&& ( (p[0]===piece.prevX+1&&p[1]===piece.prevY-1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY-1 ) )) 
                        { return  true }  // co P thoa man => if(true)
                        else {return false}
                    })) { return  true } // => p duoc chon
                    else {return false}
                }
                else return false;
            }
        }
        else if (piece.color ==='black') {
            if(checkOriginPos(piece)) {
                if( (p[0]===piece.prevX&&p[1]===piece.prevY+1) || (p[0]===piece.prevX&&p[1]===piece.prevY+2) || (p[0]===piece.prevX+1&&p[1]===piece.prevY+1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY+1 )  ) {
                    if(originPieces.find(P=>{
                        if(P.color==="black"&&P.x===p[0]&&P.y===p[1] )
                        {return false}
                        else if(P.color==="white"&&P.x===p[0]&&P.y===p[1]&& (p[0]===piece.prevX&&p[1]===piece.prevY+1) || (p[0]===piece.prevX&&p[1]===piece.prevY+2) ) 
                        {return false}
                        else if (P.color==="white"&&P.x===p[0]&&P.y===p[1]&& ( (p[0]===piece.prevX+1&&p[1]===piece.prevY+1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY+1 ) )) 
                        { return  true }  // co P thoa man => if(true)
                        else {return false}
                    })) { return  true } // p duoc chon
                    else {return false}
                }
            }
            else{
                if( (p[0]===piece.prevX&& p[1]===piece.prevY+1) || (p[0]===piece.prevX+1&&p[1]===piece.prevY+1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY+1 )  ) {
                    if(originPieces.find(P=>{
                        if(P.color==="black"&&P.x===p[0]&&P.y===p[1] )
                        {return false}
                        else if(P.color==="white"&&P.x===p[0]&&P.y===p[1]&& (p[0]===piece.prevX&&p[1]===piece.prevY+1) )   
                        {return false}
                        else if (P.color==="white"&&P.x===p[0]&&P.y===p[1]&& ( (p[0]===piece.prevX+1&&p[1]===piece.prevY+1 ) || (p[0]===piece.prevX-1&&p[1]===piece.prevY+1 ) )) 
                        { return  true }  // co P thoa man => if(true)
                        else {return false}
                    })) { return  true } // => p duoc chon
                    else {return false}
                }
                else return false;
            }

        }
        else return false;

    })

  return pawnArr;  // array cac nuoc co the di cho quan tot

}

const rookPossibleMoves = (rook) => {                                       // it1\/   it2 ^   it3 >   it4 <
    let rookArr=[];
    let it1,it2,it3,it4;
    if(rook.prevX===rook.x && rook.prevY!==rook.y){
            
            for(let a = Math.min(rook.prevY+1,7);a <8;a++){
                    let found = false;
                    
                    it1= originPieces.find( P=>{  
                                    if(P.x=== rook.prevX && P.y===a && P.y!==rook.prevY ){
                                        if(P.color!==rook.color) {let j=[rook.prevX,a];  rookArr.push(j);found===true;return true} ;
                                        found===true;return true;
                                    }
                                    return false 
                                }
                    );  
                if(found===true)  {break;}
            }
            
            
            for(let b = Math.max(rook.prevY-1,0);b >=0;b--) {
                let found = false;
                    
                    it2= originPieces.find( P=>{  
                                    if(P.x=== rook.prevX && P.y===b && P.y!==rook.prevY ){
                                        if(P.color!==rook.color) {let j=[rook.prevX,b];  rookArr.push(j);found===true;return true} ;
                                        found===true;return true;
                                    } 
                                    return false;
                                }
                    ); 
                if(found===true)  {break;}   
            }

    }
    else if(rook.prevX!==rook.x && rook.prevY===rook.y) {
            
                for(let a = Math.min(rook.prevX+1,7);a <8;a++){
                        let found = false;
                        it3= originPieces.find( P=>{  
                                        if(P.y=== rook.prevY && P.x===a && P.x!==rook.prevX ){
                                            if(P.color!==rook.color) {let j=[a,rook.prevY];  rookArr.push(j);found===true;return true} ;
                                            found===true;return true;
                                        }
                                        return false; 
                                    }
                        );  
                    if(found===true)  {break;}
                }

                for(let b = Math.max(rook.prevX-1,0);b >=0;b--) {
                    let found = false;
                        
                        it4= originPieces.find( P=>{  
                                        if(P.y=== rook.prevY && P.x===b && P.x!==rook.prevX ){
                                            if(P.color!==rook.color) {let j=[b,rook.prevY];  rookArr.push(j);found===true;return true} ;
                                            found===true;return true;
                                        } 
                                    }
                        ); 
                    if(found===true)  {break;}   
                }
    }

    return rookArr; // array cac nuoc co the di cho quan xe
}



// emit on dragstart server nhan name quan co tinh toan cac nuoc co the di 
// server tra ve cac nuoc co the di


// emit on dragend server nhan ten va vi tri cua quan co 
// check xem vi tri do co trong so vi tri co the di duoc khong
// tra ve ket qua
let it1,it2;
for(let a = Math.min(rook.prevY+1,7);a <8;a++){
        let found = false;
        
        it1= originPieces.find( P=>{  
                        if(P.x=== rook.prevX && P.y===a && P.y!==rook.prevY ){
                            if(P.color!==rook.color) {let j=[rook.prevX,a];  rookArr.push(j);found===true;return true} ;
                            found===true;return true;
                        } 
                    }
        )||[rook.prevX,7];  
    if(found===true)  {break;}
}

  
for(let b = Math.max(rook.prevY-1,0);b >=0;b--) {
    let found = false;
        
        it2= originPieces.find( P=>{  
                        if(P.x=== rook.prevX && P.y===b && P.y!==rook.prevY ){
                            if(P.color!==rook.color) {let j=[rook.prevX,b];  rookArr.push(j);found===true;return true} ;
                            found===true;return true;
                        } 
                    }
        )||[rook.prevX,0]; 
    if(found===true)  {break;}   
}
//   if(P.color==='white') {break;}
//   else if (P.color==='black') {let j=[rook.prevX,a];  rookArr.push(j);break;  }

// while(true) {
//     let a = rook.prevY+1;
//     if (originPieces.find(P=>{   if(P.y===a && P.x=== rook.prevX ){
//                                         if(P.color==='white') {return true}
//                                         else return false;
//                                         } })) 
//         {   t=false;               }
// }
