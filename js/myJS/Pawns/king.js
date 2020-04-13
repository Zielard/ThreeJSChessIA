/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
class king
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        this.attacked= false;
        }
        showMove(i,j)
        {
            console.log("figure pos: "+ i + " y:" + j);
            if(board.BoardTable[i][j].figure.color == "b")
            {
                if(i <= 6)
                {
                    if((board.BoardTable[i+1][j].figure == null) || ((board.BoardTable[i+1][j].figure != null) && (board.BoardTable[i+1][j].figure.color == "w")))
                    {
                        board.BoardTable[i+1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j]);
                    }
                }
                if(i >= 1)
                {
                    if((board.BoardTable[i-1][j].figure == null) || ((board.BoardTable[i-1][j].figure != null) && (board.BoardTable[i-1][j].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j]);
                    }
                }
                if(j <= 6)
                {
                    if((board.BoardTable[i][j+1].figure == null) || ((board.BoardTable[i][j+1].figure != null) && (board.BoardTable[i][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i][j+1]);
                    }
                }
                if(j >= 1)
                {
                    if((board.BoardTable[i][j-1].figure == null) || ((board.BoardTable[i][j-1].figure != null) && (board.BoardTable[i][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i][j-1]);
                    }
                }
                if((i >= 1) && (j <= 6))
                {
                    if((board.BoardTable[i-1][j+1].figure == null) || ((board.BoardTable[i-1][j+1].figure != null) && (board.BoardTable[i-1][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j+1]);
                    }
                }
                if((i <= 6) && (j >= 1))
                {
                    if((board.BoardTable[i+1][j-1].figure == null) || ((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i+1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j-1]);
                    }
                }
                if((i <= 6) && (j <= 6))
                {
                    if((board.BoardTable[i+1][j+1].figure == null) || ((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i+1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j+1]);
                    }
                }
                if((i >= 1) && (j >= 1))
                {
                    if((board.BoardTable[i-1][j-1].figure == null) || ((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j-1]);
                    }
                }
            }
            else
            {
                if(i <= 6)
                {
                    if((board.BoardTable[i+1][j].figure == null) || ((board.BoardTable[i+1][j].figure != null) && (board.BoardTable[i+1][j].figure.color == "b")))
                    {
                        board.BoardTable[i+1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j]);
                    }
                }
                if(i >= 1)
                {
                    if((board.BoardTable[i-1][j].figure == null) || ((board.BoardTable[i-1][j].figure != null) && (board.BoardTable[i-1][j].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j]);
                    }
                }
                if(j <= 6)
                {
                    if((board.BoardTable[i][j+1].figure == null) || ((board.BoardTable[i][j+1].figure != null) && (board.BoardTable[i][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i][j+1]);
                    }
                }
                if(j >= 1)
                {
                    if((board.BoardTable[i][j-1].figure == null) || ((board.BoardTable[i][j-1].figure != null) && (board.BoardTable[i][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i][j-1]);
                    }
                }
                if((i >= 1) && (j <= 6))
                {
                    if((board.BoardTable[i-1][j+1].figure == null) || ((board.BoardTable[i-1][j+1].figure != null) && (board.BoardTable[i-1][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j+1]);
                    }
                }
                if((i <= 6) && (j >= 1))
                {
                    if((board.BoardTable[i+1][j-1].figure == null) || ((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i+1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j-1]);
                    }
                }
                if((i <= 6) && (j <= 6))
                {
                    if((board.BoardTable[i+1][j+1].figure == null) || ((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i+1][j+1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i+1][j+1]);
                    }
                }
                if((i >= 1) && (j >= 1))
                {
                    if((board.BoardTable[i-1][j-1].figure == null) || ((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j-1].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[i-1][j-1]);
                    }
                }
            }
        }
}