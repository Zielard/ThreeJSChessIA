
//Global Array, all moves in board
var mHistory = [];
var yaxis = ["a","b","c","d","e","f","g","h"];

			//FOR RAYCST!!!//////////////////////////////////////////////////////////
			var raycaster;
			raycaster = new THREE.Raycaster();
			var mouse = new THREE.Vector2(), INTERSECTED;
			var oldPlanePos;
			var mustMoveColor = "w";
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}

			document.addEventListener('click', event => {
			if(lastSelectRay != null)
			{
				if(raycastOn == true)
				{
					findPawn();
					raycastOn = !raycastOn;
				}
				else
				{
					oldPlanePos = lastSelectRay;
					for(let i =0;i<activePlans.length;i++)
					{
						activePlans[i].object.material.emissive.setHex( 0x000000 );
					}
					raycastOn = !raycastOn;
				}
			}
			});
			/////////////////////////////////////////////////////////////////////////
			var deletePawnBlack = [];
			var deletePawnWhite = [];
			var activePlans = [];
			var lastSelectRay = null;
			var oldColorPawn;
			var raycastOn = true;
			//Grupa zawirajaca wszystkie obiekty zamiast pionkow
			var group = new THREE.Group();
			group.position.x = -2.5;
			group.position.z = -2.5;
			//Grupa zawirajaca wszystkie obiekty na scenie
			var pawnsGroup = new THREE.Group();
			var lightPos = 1;

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.y =35;

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			//camera.lookAt(camera.position.x-2.5, 0 ,camera.position.z-2.5);
			renderer.setClearColor( 0xffffff, 1 );

			//Szachownica
			var board;
			//Ladowanie pionkow
			StartPack.loadBaseObj();

            ////////////////////////////
            //Utworzenie kontrolera dzieki ktoremu mozna myszka zmieniac polozenie kamery na scenie
            //
			var Orbit = new THREE.OrbitControls( camera, renderer.domElement );
			Orbit.update();
			Orbit.enablePan = false;
		
			//
			var groupLight = new THREE.Group();
			
			//tworzymy swiatlo ambient
			var ambientLight = new THREE.AmbientLight( 0x404040 );
			scene.add(ambientLight);
			
			//tworzymy swiatlo punktowe
			var light = new THREE.PointLight( 0xffffff, 1, 100 );
			light.position.set( 0, 15, 0 );
			groupLight.add( light );

			///////////////////////////////////////
            //cubemap / skybox
            //
			var path = "szachy.low.poly/textura/greenland/"; 
            var format = '.jpg';
			var urls = [ path + "px.jpg", path + "nx.jpg",
					path + "py.jpg", path + "ny.jpg",
					path + "pz.jpg", path + "nz.jpg"];
					
			//odbicia
            var reflectionCube = new THREE.CubeTextureLoader().load( urls );
            reflectionCube.format = THREE.RGBFormat;
            //scene.background = reflectionCube;

			//przezroczysto&#65533;ci
			refractionCube = new THREE.CubeTextureLoader().load( urls );
			refractionCube.mapping = THREE.CubeRefractionMapping;
			refractionCube.format = THREE.RGBFormat;

			var textureLoader = new THREE.TextureLoader();
			var mapHeight = new THREE.TextureLoader().load( "szachy.low.poly/textura/Normale.szachy.png" );
			var mapEnv = new THREE.TextureLoader().load( "szachy.low.poly/textura/env.png" );
			var normalMapA = textureLoader.load( "szachy.low.poly/textura/Normale.szachy.png" );
			var AoMapBoard = textureLoader.load( "szachy.low.poly/textura/12951_Stone_Chess_Board_diff.jpg" );
			var roughnessMapA = textureLoader.load( "szachy.low.poly/textura/Normale.szachy_COLOR.jpg" );
			var materialNormal= new THREE.MeshStandardMaterial( {

				color: 0xA9A9A9,
				roughness:  0.2,
				metalness:  0.23,
				normalMap: normalMapA,
				aoMapIntensity: 1,
				normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
				envMap: reflectionCube,
				flatShading :true,
				envMapIntensity :3.0,
				shading: THREE.SmoothShading,
			} );
		
			//dodajemy swiatlo i kulke do grupy ktora bedzie zawierala jeszcze kostke
			group.add(groupLight);
			
			//dodajemy grupe do sceny
			scene.add(group);
			scene.add(pawnsGroup);
			var animate = function () {
				requestAnimationFrame( animate );
				renderer.render(scene, camera);
				if(raycastOn == true)
				{
					raycast();
				}

		};

			animate();
function raycast()
{
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children , true );
        if ( intersects.length > 0 ) {


                    if ( INTERSECTED != intersects[ 0 ].object.parent ) {
                        if(intersects[ 0 ].object != boardObj)
                        {
                            if(lastSelectRay == null)
                            {
                            INTERSECTED = intersects[ 0 ].object;
                            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                            INTERSECTED.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                            lastSelectRay = intersects[ 0 ].object;
                            oldPlanePos = intersects[ 0 ].object;
                            }
                            if(lastSelectRay != intersects[ 0 ].object)
                            {
                                    lastSelectRay.material.emissive.setHex( 0x000000 );
                                    INTERSECTED = intersects[ 0 ].object;
                                    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                                    INTERSECTED.material.emissive.setHex( parameters.Scolor.replace("#", "0x") );
                                    lastSelectRay = intersects[ 0 ].object;

                                    for(let i =0;i<activePlans.length;i++)
                                    {
                                        if(activePlans[i].object == lastSelectRay)
                                        {
                                            changePawnPosition();
                                        }
                                    }
                                    activePlans = [];
                            }
                        }
                }
            else
            {
                lastSelectRay = null;
            }
        } else {
            lastSelectRay = null;
            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( 0x000000);
            INTERSECTED = null;
        }
}	
function findPawn()
{
    for(let i =0;i<8;i++)
    {
        for(let j =0;j<8;j++)
        {
            if(board.BoardTable[i][j].figure != null)
            {				
                if(board.BoardTable[i][j].figure.object == lastSelectRay)
                {
                    if(mustMoveColor == board.BoardTable[i][j].figure.color)
                    {
                        board.BoardTable[i][j].figure.showMove(i,j);
                    }
                    i = 7;
                    j = 7;
                }
            }
        }
    }
}
function changeEnemyPos(x,y)
{
    console.log(x);
    console.log(y);
    var fromY = x[0];
    var fromX = x[1];
    var toY = y[0];
    var toX = y[1];
    mHistory.push(x+y);

    for(var i =0; i<yaxis.length;i++)
    {
        if(yaxis[i] == fromY)
        {
            fromY = i;
        }
        if(yaxis[i] == toY)
        {
            toY = i;
        }
    }
    // console.log(fromY);
    // console.log(fromX);
    // console.log(toY);
    // console.log(toX);
    if(board.BoardTable[8-toX][toY].figure != null)
    {
        if(board.BoardTable[8-toX][toY].figure.color == "b")
        {
            deletePawnBlack.push(board.BoardTable[8-toX][toY].figure.object);
            board.BoardTable[8-toX][toY].figure = null;
            sortFigureBlack();
        }
        else if(board.BoardTable[8-toX][toY].figure.color == "w")
        {
            deletePawnWhite.push(board.BoardTable[8-toX][toY].figure.object);
            board.BoardTable[8-toX][toY].figure = null;
            sortFigureWhite();
        }
    }

    let temp_state = board.BoardTable[8-fromX][fromY].stateNumber;
    board.BoardTable[8-fromX][fromY].stateNumber = board.BoardTable[8-toX][toY].stateNumber;
    board.BoardTable[8-toX][toY].stateNumber = temp_state;
    board.BoardTable[8-toX][toY].figure = board.BoardTable[8-fromX][fromY].figure;
    board.BoardTable[8-fromX][fromY].figure = null;
    //console.log(board.BoardTable[8-toX][toY].figure.object.position);
    board.BoardTable[8-toX][toY].figure.object.position.x = board.BoardTable[8-toX][toY].position.x;
    board.BoardTable[8-toX][toY].figure.object.position.z = board.BoardTable[8-toX][toY].position.z;

    // for(let i =0;i<8;i++)
    // {
    //     var temp = 8-i+"|";
    //     for(let j =0;j<8;j++)
    //     {
    //         temp+=board.BoardTable[i][j].stateNumber+",";
    //     }
    //     console.log(temp);
    // }
    // console.log(yaxis);
    mustMoveColor = "w";
}
function changePawnPosition()
{
    console.log("True change");
    let find_pawn = false;
    let find_plane = false;
    var pawnIndex = new THREE.Vector2( 0, 0 );
    var planeIndex = new THREE.Vector2( 0, 0 );
    for(let i =0;i<8;i++)
    {
        for(let j =0;j<8;j++)
        {
            if(board.BoardTable[i][j].figure != null)
            {
                if(board.BoardTable[i][j].figure.object == oldPlanePos)
                {
                    pawnIndex.x = i;
                    pawnIndex.y = j;
                    find_pawn = true;
                }
            }	
            if(board.BoardTable[i][j].object == lastSelectRay)
            {
                planeIndex.x = i;
                planeIndex.y = j;
                find_plane = true;
            }
            if((find_pawn && find_plane) == true)
            {
                if(board.BoardTable[planeIndex.x][planeIndex.y].figure != null)
                {
                    if(board.BoardTable[planeIndex.x][planeIndex.y].figure.color == "b")
                    {
                        deletePawnBlack.push(board.BoardTable[planeIndex.x][planeIndex.y].figure.object);
                        board.BoardTable[planeIndex.x][planeIndex.y].figure = null;
                        sortFigureBlack();
                    }
                    else if(board.BoardTable[planeIndex.x][planeIndex.y].figure.color == "w")
                    {
                        deletePawnWhite.push(board.BoardTable[planeIndex.x][planeIndex.y].figure.object);
                        board.BoardTable[planeIndex.x][planeIndex.y].figure = null;
                        sortFigureWhite();
                    }
                }
                

                mHistory.push(yaxis[pawnIndex.y]+(8-pawnIndex.x)+yaxis[planeIndex.y]+(8-planeIndex.x));
                let temp_state = board.BoardTable[pawnIndex.x][pawnIndex.y].stateNumber;
                board.BoardTable[pawnIndex.x][pawnIndex.y].stateNumber = board.BoardTable[planeIndex.x][planeIndex.y].stateNumber;
                board.BoardTable[planeIndex.x][planeIndex.y].stateNumber = temp_state;
                board.BoardTable[planeIndex.x][planeIndex.y].figure = board.BoardTable[pawnIndex.x][pawnIndex.y].figure;
                board.BoardTable[pawnIndex.x][pawnIndex.y].figure = null;

                oldPlanePos.position.x = board.BoardTable[planeIndex.x][planeIndex.y].position.x;
                oldPlanePos.position.y = board.BoardTable[planeIndex.x][planeIndex.y].position.y;
                oldPlanePos.position.z = board.BoardTable[planeIndex.x][planeIndex.y].position.z;



                if(mustMoveColor == "w")
                {
                    game.doMove();
                    mustMoveColor = "b";
                }
                else if(mustMoveColor == "b")
                {
                    //game.doMove();
                    mustMoveColor = "b";
                }
                else
                {
                    console.log("Change color error invalid color in fun");
                }
            i = 7;
            j = 7;
            }
        }
    }
}	
function sortFigureBlack()
{
        for(let i=0;i<deletePawnBlack.length;i++)
        {
            deletePawnBlack[i].position.x = 22.5;
            deletePawnBlack[i].position.z = -i*2.5;
        }
}
function sortFigureWhite()
{
    for(let i=0;i<deletePawnWhite.length;i++)
        {
            deletePawnWhite[i].position.x = -22.5;
            deletePawnWhite[i].position.z = i*2.5;
        }
}