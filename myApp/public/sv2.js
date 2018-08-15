var originPieces ={WhiteKing:{type:"King",color:"white",src:"chess_pieces/wk.svg",originX:3,originY:7,x:3,y:7},WhiteQueen:{type:"Queen",color:"white",src:"chess_pieces/wq.svg",originX:4,originY:7,x:4,y:7},
WhiteBishopLeft:{type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:2,originY:7,x:2,y:7},WhiteBishopRight:{type:"Bishop",color:"white",src:"chess_pieces/wb.svg",originX:5,originY:7,x:5,y:7},
WhiteKnightLeft:{type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:3,originY:7,x:1,y:7},WhiteKnightRight:{type:"Knight",color:"white",src:"chess_pieces/wn.svg",originX:6,originY:7,x:6,y:7},
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

var boardCells = { C00: { x: 0, y: 0, data: { color:"black",name: "BlackRookLeft" } }, C10: { x: 1, y: 0, data: { color:"black",name: "BlackKnightLeft" } }, C20: { x: 2, y: 0, data: { color:"black",name: "BlackBishopLeft" } },
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
 C76: { x: 7, y: 6, data: { color:"white",name: "WhitePawn7" } }, C07: { x: 0, y: 7, data: { color:"white",name: "WhiteRookLeft" } }, C17: { x: 1, y: 7, data: 0 }, 
 C27: { x: 2, y: 7, data: { color:"white",name: "WhiteBishopLeft" } }, C37: { x: 3, y: 7, data: { color:"white",name: "WhiteKnightLeft" } }, C47: { x: 4, y: 7, data: { color:"white",name: "WhiteQueen" } }, 
 C57: { x: 5, y: 7, data: { color:"white",name: "WhiteBishopRight" } }, C67: { x: 6, y: 7, data: { color:"white",name: "WhiteKnightRight" } }, C77: { x: 7, y: 7, data: { color:"white",name: "WhiteRookRight" } } };
 // trong data phai truyen vao object co vi tri ten mau

// pawn { name : "" }
var checkPawnMoves = (pawn) => {  // tra ve cac o co the di duoc
    let moves = [];
    let Pawn = originPieces[pawn.name];
    if(Pawn.y!==0 && Pawn.y!==7) {
        if(Pawn.x===Pawn.originX && Pawn.y===Pawn.originY) {  // tot o vi tri ban dau
            if(Pawn.color==="white") {
                let trai = boardCells[`C${Pawn.x-1}${Pawn.y-1}`];
                let giua = boardCells[`C${Pawn.x  }${Pawn.y-1}`];
                let phai = boardCells[`C${Pawn.x+1}${Pawn.y-1}`];
                let tren = boardCells[`C${Pawn.x  }${Pawn.y-2}`];
                if( trai.data===0 || trai.data.color==="black") {
                    moves.push([trai.x,trai.y])
                }
                if( giua.data===0 || giua.data.color==="black") {
                    moves.push([giua.x,giua.y])
                }
                if( phai.data===0 || phai.data.color==="black") {
                    moves.push([phai.x,phai.y])
                }
                if( tren.data===0 || tren.data.color==="black") {
                    moves.push([tren.x,tren.y])
                }
            }
            else {
                let trai = boardCells[`C${Pawn.x-1}${Pawn.y+1}`];
                let giua = boardCells[`C${Pawn.x  }${Pawn.y+1}`];
                let phai = boardCells[`C${Pawn.x+1}${Pawn.y+1}`];
                let tren = boardCells[`C${Pawn.x  }${Pawn.y+2}`];
                if( trai.data===0 || trai.data.color==="white") {
                    moves.push([trai.x,trai.y])
                }
                if( giua.data===0 || giua.data.color==="white") {
                    moves.push([giua.x,giua.y])
                }
                if( phai.data===0 || phai.data.color==="white") {
                    moves.push([phai.x,phai.y])
                }
                if( tren.data===0 || tren.data.color==="white") {
                    moves.push([tren.x,tren.y])
                }
                
            }
        }
        else {
            if(Pawn.color==="white") {
                let trai = boardCells[`C${Pawn.x-1}${Pawn.y-1}`];
                let giua = boardCells[`C${Pawn.x  }${Pawn.y-1}`];
                let phai = boardCells[`C${Pawn.x+1}${Pawn.y-1}`];
                if( trai.data===0 || trai.data.color==="black") {
                    moves.push([trai.x,trai.y])
                }
                if( giua.data===0 || giua.data.color==="black") {
                    moves.push([giua.x,giua.y])
                }
                if( phai.data===0 || phai.data.color==="black") {
                    moves.push([phai.x,phai.y])
                }
            }
            else {
                let trai = boardCells[`C${Pawn.x-1}${Pawn.y+1}`];
                let giua = boardCells[`C${Pawn.x  }${Pawn.y+1}`];
                let phai = boardCells[`C${Pawn.x+1}${Pawn.y+1}`];
                if( trai.data===0 || trai.data.color==="white") {
                    moves.push([trai.x,trai.y])
                }
                if( giua.data===0 || giua.data.color==="white") {
                    moves.push([giua.x,giua.y])
                }
                if( phai.data===0 || phai.data.color==="white") {
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

        for(let m = Math.max(Rook.x-1,0); m>=0;m-- ) {  // trai
            let trai = boardCells[`C${m}${Rook.y}`];
            if(trai.data.color!==Rook.color) {
                moves.push([trai.x,trai.y]);
                break;
            }
            else if (trai.data===0) {
                moves.push([trai.x,trai.y]);
            }
            else break;
        }
        for(let m = Math.min(Rook.x+1,7); m<8;m++ ) { // phai
            let phai = boardCells[`C${m}${Rook.y}`];
            if(phai.data.color!==Rook.color) {
                moves.push([phai.x,phai.y]);
                break;
            }
            else if (phai.data===0) {
                moves.push([phai.x,phai.y]);
            }
            else break;
        }
        for(let m = Math.max(Rook.y-1,0); m>=0;m-- ) { // tren
            let tren = boardCells[`C${Rook.x}${m}`];
            if(tren.data.color!==Rook.color) {
                moves.push([tren.x,tren.y]);
                break;
            }
            else if (tren.data===0) {
                moves.push([tren.x,tren.y]);
            }
            else break;
        }
        for(let m = Math.min(Rook.y+1,7); m<8;m++ ) { //duoi
            let duoi = boardCells[`C${Rook.x}${m}`];
            if(duoi.data.color!==Rook.color) {
                moves.push([duoi.x,duoi.y]);
                break;
            }
            else if (duoi.data===0) {
                moves.push([duoi.x,duoi.y]);
            }
            else break;
        }
            
    return moves;
}


