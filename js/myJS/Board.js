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

        // //board cube
        // var geometryC = new THREE.BoxGeometry( 45, 1, 45 );
        // var materialC = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        // var cube = new THREE.Mesh( geometryC, materialC );
        // console.log(cube);
        // cube.position.y = -0.51;
        // scene.add( cube );

        // Create one dimensional array 
        this.BoardTable = new Array(8);
        
        // Loop to create 2D array using 1D array 
        for (var i = 0; i < this.BoardTable.length; i++) { 
            this.BoardTable[i] = new Array(8); 
        }

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