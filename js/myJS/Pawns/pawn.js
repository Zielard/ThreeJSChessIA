/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
class pawn
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        this.attacked= false;
        }
    showMove(i,j)
    {
        //console.log(group);
        //console.log("figure pos: "+ i + " y:" + j);
        if(board.BoardTable[i][j].figure.color == "b")
        {
            if((i <= 6) && (j <= 6))
            {
                if((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "w"))
                {
                    board.BoardTable[i+1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                    activePlans.push(board.BoardTable[i+1][j+1]);
                }
            }
            if((i <= 6) && (j >= 1))
            {
                if((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "w"))
                {
                    board.BoardTable[i+1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                    activePlans.push(board.BoardTable[i+1][j-1]);
                }
            }
            if((i <= 6))
            {
                if(i==1)
                {
                    board.BoardTable[i+1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                    activePlans.push(board.BoardTable[i+1][j]); 
                    board.BoardTable[i+2][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                    activePlans.push(board.BoardTable[i+2][j]);
                }
                else
                {
                    board.BoardTable[i+1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
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
                    board.BoardTable[i-1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                    activePlans.push(board.BoardTable[i-1][j+1]);
                }
            }
            if((i >= 1) && (j >= 1))
            {
                if((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "b"))
                {
                     board.BoardTable[i-1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                     activePlans.push(board.BoardTable[i-1][j-1]);
                }
            }
            if((i >= 1))
            {
                if(board.BoardTable[i-1][j].figure == null)
                {
                    if(i==6)
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j]); 
                        board.BoardTable[i-2][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-2][j]); 
                    }
                    else
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j]);
                    }
                }
            }
        }
    }
}