class Plane 
{
    constructor(position_,object_,stateNumber_,figure_) {
    this.position = position_;
    this.object = object_;
    this.stateNumber = stateNumber_;
    this.figure = figure_;
    }
}
class pawn
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
        }
    showMove(i,j)
    {
        console.log(group);
        // for(let t = 0;t<8;t++)
        // {
        //     let tempppp;
        //     for(let w = 0;w<8;w++)
        //     {
        //         tempppp += board.BoardTable[t][w].stateNumber+",";
        //     }
        //     console.log(tempppp);
        // }
        // for(let t = 0;t<8;t++)
        // {
        //     let tempppp;
        //     for(let w = 0;w<8;w++)
        //     {
        //         console.log(board.BoardTable[t][w])
        //     }
        // }
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
class king
{
    constructor(object_,color_) {
        this.object = object_;
        this.color = color_;
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
                        board.BoardTable[i+1][j].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j]);
                    }
                }
                if(i >= 1)
                {
                    if((board.BoardTable[i-1][j].figure == null) || ((board.BoardTable[i-1][j].figure != null) && (board.BoardTable[i-1][j].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j]);
                    }
                }
                if(j <= 6)
                {
                    if((board.BoardTable[i][j+1].figure == null) || ((board.BoardTable[i][j+1].figure != null) && (board.BoardTable[i][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i][j+1]);
                    }
                }
                if(j >= 1)
                {
                    if((board.BoardTable[i][j-1].figure == null) || ((board.BoardTable[i][j-1].figure != null) && (board.BoardTable[i][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i][j-1]);
                    }
                }
                if((i >= 1) && (j <= 6))
                {
                    if((board.BoardTable[i-1][j+1].figure == null) || ((board.BoardTable[i-1][j+1].figure != null) && (board.BoardTable[i-1][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j+1]);
                    }
                }
                if((i <= 6) && (j >= 1))
                {
                    if((board.BoardTable[i+1][j-1].figure == null) || ((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i+1][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j-1]);
                    }
                }
                if((i <= 6) && (j <= 6))
                {
                    if((board.BoardTable[i+1][j+1].figure == null) || ((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "w")))
                    {
                        board.BoardTable[i+1][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j+1]);
                    }
                }
                if((i >= 1) && (j >= 1))
                {
                    if((board.BoardTable[i-1][j-1].figure == null) || ((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "w")))
                    {
                        board.BoardTable[i-1][j-1].object.material.emissive.setHex( 0xff0000 );
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
                        board.BoardTable[i+1][j].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j]);
                    }
                }
                if(i >= 1)
                {
                    if((board.BoardTable[i-1][j].figure == null) || ((board.BoardTable[i-1][j].figure != null) && (board.BoardTable[i-1][j].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j]);
                    }
                }
                if(j <= 6)
                {
                    if((board.BoardTable[i][j+1].figure == null) || ((board.BoardTable[i][j+1].figure != null) && (board.BoardTable[i][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i][j+1]);
                    }
                }
                if(j >= 1)
                {
                    if((board.BoardTable[i][j-1].figure == null) || ((board.BoardTable[i][j-1].figure != null) && (board.BoardTable[i][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i][j-1]);
                    }
                }
                if((i >= 1) && (j <= 6))
                {
                    if((board.BoardTable[i-1][j+1].figure == null) || ((board.BoardTable[i-1][j+1].figure != null) && (board.BoardTable[i-1][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j+1]);
                    }
                }
                if((i <= 6) && (j >= 1))
                {
                    if((board.BoardTable[i+1][j-1].figure == null) || ((board.BoardTable[i+1][j-1].figure != null) && (board.BoardTable[i+1][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i+1][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j-1]);
                    }
                }
                if((i <= 6) && (j <= 6))
                {
                    if((board.BoardTable[i+1][j+1].figure == null) || ((board.BoardTable[i+1][j+1].figure != null) && (board.BoardTable[i+1][j+1].figure.color == "b")))
                    {
                        board.BoardTable[i+1][j+1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i+1][j+1]);
                    }
                }
                if((i >= 1) && (j >= 1))
                {
                    if((board.BoardTable[i-1][j-1].figure == null) || ((board.BoardTable[i-1][j-1].figure != null) && (board.BoardTable[i-1][j-1].figure.color == "b")))
                    {
                        board.BoardTable[i-1][j-1].object.material.emissive.setHex( 0xff0000 );
                        activePlans.push(board.BoardTable[i-1][j-1]);
                    }
                }
            }
        }
}
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
class runner
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
        }
}
class Board {
    constructor() {
        // Create one dimensional array 
        this.BoardTable = new Array(8);
        
        // Loop to create 2D array using 1D array 
        for (var i = 0; i < this.BoardTable.length; i++) { 
            this.BoardTable[i] = new Array(8); 
        }
            // Loop to initilize 2D array elements. 
            // for (var i = 0; i < 8; i++) { 
            //     for (var j = 0; j < 8; j++) { 
            //         if(i==0 || i==7)
            //         {
            //             if(j==0)
            //             {
            //                 this.BoardTable[i][j] = 4;
            //             }
            //             if(j==1)
            //             {
            //                 this.BoardTable[i][j] = 2;
            //             }
            //             if(j==2)
            //             {
            //                 this.BoardTable[i][j] = 3;
            //             }
            //             if(j==3)
            //             {
            //                 this.BoardTable[i][j] = 5;
            //             }
            //             if(j==4)
            //             {
            //                 this.BoardTable[i][j] = 6;
            //             }
            //             if(j==5)
            //             {
            //                 this.BoardTable[i][j] = 3;
            //             }
            //             if(j==6)
            //             {
            //                 this.BoardTable[i][j] = 2;
            //             }
            //             if(j==7)
            //             {
            //                 this.BoardTable[i][j] = 4;
            //             }

            //         }
            //         else if(i==1)
            //         {
            //             this.BoardTable[i][j] =1;
            //         }
            //         else if(i==6)
            //         {
            //             this.BoardTable[i][j] =1;
            //         }
            //         else
            //         {
            //             this.BoardTable[i][j] =0;
            //         }
            //     } 
            // } 

        // Loop to display the elements of 2D array.  
        // for (var i = 0; i < 8; i++) { 
        //     let tempstr = "";
        //     for (var j = 0; j <8; j++)    { 
        //         //tempstr += ("["+i+"]["+j+"]");
        //         tempstr += (this.BoardTable[i][j] + " ");
        //     } 
        //     //console.log(tempstr); 
        // } 

        var black = true;
        var xForGrid = -15;
        var yForGrid = 0;
        var zForGrid = -15;
        var radius90 = (3.14/180)*90;
            for(let i=0;i<8;i++)
            {
                for(let j=0;j<8;j++)
                {
                    let geometry;
                    let material;
                    let plane;
                    if(true == black)
                    {
                    geometry = new THREE.PlaneGeometry( 5, 5, 32 );
                    material = new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
                    plane = new THREE.Mesh( geometry, material );
                    plane.position.set( xForGrid, yForGrid, zForGrid);
                    plane.rotation.x = radius90;
                    group.add( plane );
                    black = !black;
                    }
                    else
                    {
                    geometry = new THREE.PlaneGeometry( 5, 5, 32 );
                    material = new THREE.MeshPhongMaterial( {color: 0x000000, side: THREE.DoubleSide} );
                    plane = new THREE.Mesh( geometry, material );
                    plane.position.set( xForGrid, yForGrid , zForGrid);
                    plane.rotation.x = radius90;
                    group.add( plane );
                    black = !black;
                    }
                    if(i==0 || i==7)
                    {
                        if(j==0 || j==7)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                            ,plane,4,null);
                        }
                        if(j==1 || j==6)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                            ,plane,2,null);
                        }
                        if(j==2 || j==5)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                            ,plane,3,null);
                        }
                        if(j==3)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                            ,plane,5,null);
                        }
                        if(j==4)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                            ,plane,6,null);
                        }

                    }
                    else if(i==1 || i==6)
                    {
                        this.BoardTable[i][j] =new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                        ,plane,1,null);
                    }
                    else
                    {
                        this.BoardTable[i][j] =new Plane(new THREE.Vector3( xForGrid-2.5, yForGrid , zForGrid-2.5 )
                        ,plane,0,null);
                    }
                    xForGrid +=5;
                }
                black = !black;
                zForGrid +=5;
                xForGrid= -15;
            }
            for (var i = 0; i < 8; i++) { 
                let tempstr = "";
                for (var j = 0; j <8; j++)    { 
                    //tempstr += ("["+i+"]["+j+"]");
                    tempstr = (this.BoardTable[i][j]);
                } 
                //console.log(tempstr); 
            } 
    }
    
  }