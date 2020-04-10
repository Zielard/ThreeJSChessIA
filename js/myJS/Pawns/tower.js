class tower
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
                     //Down
                     for(let t =i+1;t<8;t++)
                     {
                         if(board.BoardTable[t][j].figure == null)
                         {
                             board.BoardTable[t][j].object.material.emissive.setHex( 0xff0000 );
                             activePlans.push(board.BoardTable[t][j]);
                         }
                         else
                         {
                            if(board.BoardTable[t][j].figure.color == tempColor)
                            {
                                console.log("down");
                                board.BoardTable[t][j].object.material.emissive.setHex( 0xff0000 );
                                activePlans.push(board.BoardTable[t][j]);
                            }
                             break;
                         }
                     }
                        //up
                         for(let t =i-1;t<8;t--)
                         {
                             if(t >= 0)
                             {
                                 if(board.BoardTable[t][j].figure == null)
                                 {
                                     //console.log("NULLt-x!! x: "+ t + " y:" + j);
                                     board.BoardTable[t][j].object.material.emissive.setHex( 0xff0000 );
                                     activePlans.push(board.BoardTable[t][j]);
                                 }
                                 else
                                 {
                                    if(board.BoardTable[t][j].figure.color == tempColor)
                                    {
                                        console.log("up");
                                        board.BoardTable[t][j].object.material.emissive.setHex( 0xff0000 );
                                        activePlans.push(board.BoardTable[t][j]);
                                    }
                                     //console.log("NONULLt-x!! x: "+ t + " y:" + j);
                                     break;
                                 }
                             }
                             else
                             {
                                 //console.log("NOONULLtx!! -x: "+ t + " y:" + j);
                                 break;
                             }
                         }
                    
                         //right
                     for(let t =j+1;t<8;t++)
                     {
                         if(board.BoardTable[i][t].figure == null)
                         {
                             //console.log("NULLty!! x: "+ i + " y:" + t);
                             board.BoardTable[i][t].object.material.emissive.setHex( 0xff0000 );
                             activePlans.push(board.BoardTable[i][t]);
                         }
                         else
                         {
                            if(board.BoardTable[i][t].figure.color == tempColor)
                            {
                                console.log("right");
                                board.BoardTable[i][t].object.material.emissive.setHex( 0xff0000 );
                                activePlans.push(board.BoardTable[i][t]);
                            }
                             //console.log("NOTNULLty!! x: "+ i + " y:" + t);
                             break;
                         }
                     }
                     //left
                     for(let t =j-1;t<8;t--)
                     {
                         if(t >= 0)
                         {
                             if(board.BoardTable[i][t].figure == null)
                             {
                                 //console.log("NULLt-y!! x: "+ i + " y:" + t);
                                 board.BoardTable[i][t].object.material.emissive.setHex( 0xff0000 );
                                 activePlans.push(board.BoardTable[i][t]);
                             }
                             else
                             {
                                if(board.BoardTable[i][t].figure.color == tempColor)
                                {
                                    console.log("left");
                                    board.BoardTable[i][t].object.material.emissive.setHex( 0xff0000 );
                                    activePlans.push(board.BoardTable[i][t]);
                                }
                                 //console.log("NOTNULLt-y!! x: "+ i + " y:" + t);
                                 break;
                             }
                         }
                         else
                         {
                            // console.log("NOOTNULLt-y!! x: "+ i + " y:" + t);
                             break;
                         }
                     }
       }
}