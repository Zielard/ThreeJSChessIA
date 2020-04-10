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
                        board.BoardTable[t][s].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[t][s]);
                    }
                    else
                    {
                        if(board.BoardTable[t][s].figure.color == tempColor)
                        {
                            //console.log("cage");
                            board.BoardTable[t][s].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
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
                        board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("right up");
                            board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
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
                        board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("cage");
                            board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
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
                        board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                        activePlans.push(board.BoardTable[t][w]);
                    }
                    else
                    {
                        if(board.BoardTable[t][w].figure.color == tempColor)
                        {
                            console.log("cage");
                            board.BoardTable[t][w].object.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
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