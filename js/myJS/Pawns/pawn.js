class pawn
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        }
    showMove(i,j)
    {
        console.log(group);
        console.log("figure pos: "+ i + " y:" + j);
        if(board.BoardTable[i][j].figure.color == "b")
        {
            if((i <= 6) && (j <= 6))
            {
                if((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "w"))
                {
                    board.BoardTable[i+1][j+1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+1][j+1]);
                }
            }
            if((i <= 6) && (j >= 1))
            {
                if((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "w"))
                {
                    board.BoardTable[i+1][j-1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+1][j-1]);
                }
            }
            if((i <= 6))
            {
                if(board.BoardTable[i+1][j].figure == null)
                {
                    board.BoardTable[i+1][j].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+1][j]);
                }
            }
        }
        else
        {
            if((i >= 1) && (j <= 6))
            {
                if((board.BoardTable[i-1][j+1].figure != null) && (board.BoardTable[i-1][j+1].figure.color == "b"))
                {
                    board.BoardTable[i-1][j+1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-1][j+1]);
                }
            }
            if((i >= 1) && (j >= 1))
            {
                if((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "b"))
                {
                     board.BoardTable[i-1][j-1].object.material.emissive.setHex( 0xff0000 );
                     activePlans.push(board.BoardTable[i-1][j-1]);
                }
            }
            if((i >= 1))
            {
                if(board.BoardTable[i-1][j].figure == null)
                {
                    board.BoardTable[i-1][j].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-1][j]);
                }
            }
        }
    }
}