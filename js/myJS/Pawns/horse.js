class horse
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        }
        showMove(i,j)
        {
            
            let tempColor = "b";
            console.log("figure pos: "+ i + " y:" + j);
            if(board.BoardTable[i][j].figure.color == "w")
            {
                tempColor = "b";
            }
            else if(board.BoardTable[i][j].figure.color == "b")
            {
                tempColor = "w";
            }
            
            console.log("figure pos: "+ i + " y:" + j);
            if(i >= 2 && j >= 1)
            {
                // UP LEFT
                if(board.BoardTable[i-2][j-1].figure == null)
                {
                    board.BoardTable[i-2][j-1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-2][j-1]);
                }
                else
                {
                    if(board.BoardTable[i-2][j-1].figure.color == tempColor)
                    {
                        board.BoardTable[i-2][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-2][j-1]);
                    }
                }
            }
            if(i >= 2 && j <= 6)
            {
                // UP RIGHT
                if(board.BoardTable[i-2][j+1].figure == null)
                {
                    board.BoardTable[i-2][j+1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-2][j+1]);
                }
                else
                {
                    if(board.BoardTable[i-2][j+1].figure.color == tempColor)
                    {
                        board.BoardTable[i-2][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-2][j+1]);
                    }
                }
            }
            if(i >= 1 && j <= 5)
            {
                // UP RIGHT RIGHT
                if(board.BoardTable[i-1][j+2].figure == null)
                {
                    board.BoardTable[i-1][j+2].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-1][j+2]);
                }
                else
                {
                    if(board.BoardTable[i-1][j+2].figure.color == tempColor)
                    {
                        board.BoardTable[i-1][j+2].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j+2]);
                    }
                }   
            }
            if(i >= 1 && j >= 2)
            {
                //UP LEFT LEFT
                if(board.BoardTable[i-1][j-2].figure == null)
                {
                    board.BoardTable[i-1][j-2].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i-1][j-2]);
                }
                else
                {
                    if(board.BoardTable[i-1][j-2].figure.color == tempColor)
                    {
                        board.BoardTable[i-1][j-2].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j-2]);
                    }
                }   
            }       
            if(i <= 6 && j >= 2)
            {
                //DOWN LEFT LEFT
                if(board.BoardTable[i+1][j-2].figure == null)
                {
                    board.BoardTable[i+1][j-2].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+1][j-2]);
                }
                else
                {
                    if(board.BoardTable[i+1][j-2].figure.color == tempColor)
                    {
                        board.BoardTable[i+1][j-2].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j-2]);
                    }
                }      
            }     
            if(i <= 5 && j >= 1)
            {
                //DOWN LEFT
                if(board.BoardTable[i+2][j-1].figure == null)
                {
                    board.BoardTable[i+2][j-1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+2][j-1]);
                }
                else
                {
                    if(board.BoardTable[i+2][j-1].figure.color == tempColor)
                    {
                        board.BoardTable[i+2][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+2][j-1]);
                    }
                }    
            }                
            if(i <= 6 && j <= 5)
            {
                //DOWN RIGHT
                if(board.BoardTable[i+1][j+2].figure == null)
                {
                    board.BoardTable[i+1][j+2].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+1][j+2]);
                }
                else
                {
                    if(board.BoardTable[i+1][j+2].figure.color == tempColor)
                    {
                        board.BoardTable[i+1][j+2].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j+2]);
                    }
                }     
            }    
            if(i <= 5 && j <= 6)
            {
                //DOWN RIGHT RIGHT
                if(board.BoardTable[i+2][j+1].figure == null)
                {
                    board.BoardTable[i+2][j+1].object.material.emissive.setHex( 0xff0000 );
                    activePlans.push(board.BoardTable[i+2][j+1]);
                }
                else
                {
                    if(board.BoardTable[i+2][j+1].figure.color == tempColor)
                    {
                        board.BoardTable[i+2][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+2][j+1]);
                    }
                }   
            }    

        }
}