class Board {
    constructor(brand) {

        // Create one dimensional array 
        this.BoardTable = new Array(8);
        
        // Loop to create 2D array using 1D array 
        for (var i = 0; i < this.BoardTable.length; i++) { 
            this.BoardTable[i] = new Array(8); 
        }

                    //var h = 0; 
            
            // Loop to initilize 2D array elements. 
            for (var i = 0; i < 8; i++) { 
                for (var j = 0; j < 8; j++) { 
                    if(i==0 || i==7)
                    {
                        if(j==0)
                        {
                            this.BoardTable[i][j] =4;
                        }
                        if(j==1)
                        {
                            this.BoardTable[i][j] =2;
                        }
                        if(j==2)
                        {
                            this.BoardTable[i][j] =3;
                        }
                        if(j==3)
                        {
                            this.BoardTable[i][j] =5;
                        }
                        if(j==4)
                        {
                            this.BoardTable[i][j] =6;
                        }
                        if(j==5)
                        {
                            this.BoardTable[i][j] =3;
                        }
                        if(j==6)
                        {
                            this.BoardTable[i][j] =2;
                        }
                        if(j==7)
                        {
                            this.BoardTable[i][j] =4;
                        }

                    }
                    else if(i==1)
                    {
                        this.BoardTable[i][j] =1;
                    }
                    else if(i==6)
                    {
                        this.BoardTable[i][j] =1;
                    }
                    else
                    {
                        this.BoardTable[i][j] =0;
                    }
                } 
            } 

        // Loop to display the elements of 2D array.  
        for (var i = 0; i < 8; i++) { 
            let tempstr = "";
            for (var j = 0; j <8; j++)    { 
                //tempstr += ("["+i+"]["+j+"]");
                tempstr += (this.BoardTable[i][j] + " ");
            } 
            console.log(tempstr); 
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
                    if(true == black)
                    {
                    var geometry = new THREE.PlaneGeometry( 5, 5, 32 );
                    var material = new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
                    var plane = new THREE.Mesh( geometry, material );
                    plane.position.set( xForGrid, yForGrid, zForGrid);
                    plane.rotation.x = radius90;
                    group.add( plane );
                    black = !black;
                    xForGrid +=5;
                    console.log(xForGrid,yForGrid,zForGrid);

                    }
                    else
                    {
                    var geometry = new THREE.PlaneGeometry( 5, 5, 32 );
                    var material = new THREE.MeshPhongMaterial( {color: 0x000000, side: THREE.DoubleSide} );
                    var plane = new THREE.Mesh( geometry, material );
                    plane.position.set( xForGrid, yForGrid , zForGrid);
                    plane.rotation.x = radius90;
                    group.add( plane );
                    black = !black;
                    xForGrid +=5;
                    console.log(xForGrid,yForGrid,zForGrid);
                    }
                }
                black = !black;
                zForGrid +=5;
                xForGrid= -15;
            }
    }

    bialePionki() {
        let xForGrid = -15;
        let yForGrid = 2;
        let zForGrid = -10;
        for(let i=0;i<8;i++)
        {
            let object = pawns[0];
                object.position.x = xForGrid;
                object.position.y = yForGrid;
                object.position.z = zForGrid;  
                xForGrid +=5;   
            scene.add(object);
        }
      }

     czarnePionki() {
        let xForGrid = -15;
        let yForGrid = 2;
        let zForGrid = 15;
        for(let i=0;i<8;i++)
        {
            var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0x11111f} );	
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('obj/');
            mtlLoader.load('pionek.mtl', function(materials) {
            materials.flatShading = false;
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('obj/');
            objLoader.load('pionek.obj', function(object) 
            {
            object.smooth = true;
            object.traverse( function( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = ModelMaterial;
                        child.geometry.scale(2,2,2);
                    }
                } );
                object.position.x = xForGrid;
                object.position.y = yForGrid;
                object.position.z = zForGrid;  
                xForGrid +=5;   
            scene.add(object);
            });
            });
        }
      }

      bialeWieze() {
        let xForGrid = -15;
        let yForGrid = 2;
        let zForGrid = -15;
        let tabObj = ['wieza','kon','goniec','krol','krolowa','goniec','kon','wieza'];
        for(let i=0;i<8;i++)
        {
            var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff} );	
            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setPath('obj/');
            mtlLoader.load(tabObj[i] +'.mtl', function(materials) {
            materials.flatShading = false;
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('obj/');
            objLoader.load(tabObj[i] +'.obj', function(object) {
            object.smooth = true;
            object.traverse( function( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = ModelMaterial;
                        child.geometry.scale(2,2,2);
                    }
                } );
                object.position.x = xForGrid;
                object.position.y = yForGrid;
                object.position.z = zForGrid;  
                xForGrid +=5;   
            scene.add(object);
            });
            });
        }
      }
  }

  class Plain {
    constructor(figure_,plain_) {
      this.figure = figure_;
      this.plain = plain_;
    }
  }
  class Figure{
    constructor(object_) {
      this.object = object_;
    }
  }