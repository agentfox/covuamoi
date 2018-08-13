
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

const checkLegalMove = (piece) => {
    if(piece.x >= 0 && piece.x <= 7 && piece.y >= 0 && piece.y <= 7  ) {
        if ( piece.type === 'Pawn' ) { // tot
                if(piece.color ==='white') {
                    if(piece.prevX===piece.x && ( piece.prevY===piece.y+1 || (checkOriginPos(piece)  &&  piece.prevY===piece.y+2) ) ) { // Move
                        
                        
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
    else return false;
}


// findArrOfAllPosibleMovesFromCurrentPos = []; include obtacles 
//  Pieces.filter() and  splice the elements that has same pos  in findArrOfAllPosibleMovesFromCurrentPos 
//(if type = queen rook bison also splice element with {
//     if currentPos.x >  piece.x 
// }) 



