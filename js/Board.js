class Plane 
{
    constructor(position_,object_,stateNumber_,figure_) {
    this.position = position_;
    this.object = object_;
    this.stateNumber = stateNumber_;
    this.figure = figure_;
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
                    //xForGrid +=5;
                    //console.log(xForGrid,yForGrid,zForGrid);

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
                    //xForGrid +=5;
                    //console.log(xForGrid,yForGrid,zForGrid);
                    }
                    if(i==0 || i==7)
                    {
                        if(j==0 || j==7)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                            ,plane,4,null);
                        }
                        if(j==1 || j==6)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                            ,plane,2,null);
                        }
                        if(j==2 || j==5)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                            ,plane,3,null);
                        }
                        if(j==3)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                            ,plane,5,null);
                        }
                        if(j==4)
                        {
                            this.BoardTable[i][j] = new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                            ,plane,6,null);
                        }

                    }
                    else if(i==1 || i==6)
                    {
                        this.BoardTable[i][j] =new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
                        ,plane,1,null);
                    }
                    else
                    {
                        this.BoardTable[i][j] =new Plane(new THREE.Vector3( xForGrid, yForGrid , zForGrid )
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
                console.log(tempstr); 
            } 
    }
    
  }