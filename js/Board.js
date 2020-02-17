class Board {
    constructor(brand) {
        var boardTab
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