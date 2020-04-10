class queen
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        }
        showMove(i,j)
        {
            let s = j -1;
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
            //left up
            for(let t = i-1;t<8;t--)
            {
                if(t >= 0 && s >= 0)
                {
                    if(board.BoardTable[t][s].figure == null)
                    {
                       //console.log("left up NULLtx!! -x: "+ t + " y:" + s);
                        board.BoardTable[t][s].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[t][s]);
                    }
                    else
                    {
                        if(board.BoardTable[t][s].figure.color == tempColor)
                        {
                            //console.log("cage");
                            board.BoardTable[t][s].object.material.emissive.setHex( 0xff0000 );
                            activePlans.push(board.BoardTable[t][s]);
                        }
                        //console.log("left up NONULLtx!! -x: "+ t + " y:" + s);
                        break;
                    }
                    s-=1;
                }
                else
                {
                    //console.log("left up NONULLtx!! -x: "+ t + " y:" + s);
                    break;
                }
            }
            //right up
            let w = j;
            for(let t = i-1;t<8;t--)
            {
                w+=1;
                if(t >= 0 && w <= 7)
                {
                    if(board.BoardTable[t][w].figure == null)
                    {
                       // console.log("right up: "+ t + " y:" + w);
                        board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("right up");
                            board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                            activePlans.push(board.BoardTable[t][w]);
                        }
                        console.log("right up NONULLtx!! +x: "+ t + " y:" + w);
                        break;
                    }
                }
                else
                {
                    //console.log("right up NOONULLtx!! +x: "+ t + " y:" + w);
                    break;
                }
            }
            //right down
            w = j;
            for(let t = i+1;t<8;t++)
            {
                w+=1;
                if(t <= 7 && w <= 7)
                {
                    if(board.BoardTable[t][w].figure == null)
                    {
                      // console.log("right down: "+ t + " y:" + w);
                        board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("cage");
                            board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                            activePlans.push(board.BoardTable[t][w]);
                        }
                        //console.log("right down NONULLtx!! +y: "+ t + " y:" + w);
                        break;
                    }
                }
                else
                {
                    //console.log("right down NOONULLtx!! +y: "+ t + " y:" + w);
                    break;
                }
            }
            //left down
            w = j;
            for(let t = i+1;t<8;t++)
            {
                w-=1;
                if(t <= 7 && w >= 0)
                {
                    if(board.BoardTable[t][w].figure == null)
                    {
                        //console.log("left down: "+ t + " y:" + w);
                        board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("cage");
                            board.BoardTable[t][w].object.material.emissive.setHex( 0xff0000 );
                            activePlans.push(board.BoardTable[t][w]);
                        }
                        //console.log("left down NONULLtx!! +y: "+ t + " y:" + w);
                        break;
                    }
                }
                else
                {
                    //console.log("left down NOONULLtx!! +y: "+ t + " y:" + w);
                    break;
                }
            }
        
             //Down
             for(let t =i+1;t<8;t++)
             {
                 if(board.BoardTable[t][j].figure == null)
                 {
                    // console.log("NULLtx!! +x: "+ t + " y:" + j);
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
                     //console.log("NONULLtx!! +x: "+ t + " y:" + j);
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