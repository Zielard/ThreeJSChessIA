/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
 
//var pawn;
//var horse;
//var runner;
//var tower;
//var queen;
//var king;
var pawns = {    
	pionek: 0,
	wieza: 0,
	kon: 0,
	goniec: 0,
	krol: 0,
	krolowa: 0,};

var StartPack = {
  loadBaseObj : function() {				
			StartPack.AddObject(0);
			board = new Board();
  }
  ,
  AddObject : function(i) {
  
// 	let tabPath = ['new_model/Stone_Chess_Pawn_Side_A_v2/',
// 	'new_model/Stone_Chess_Rook_Side_A_v2/',
// 	'new_model/Stone_Chess_King_Side_A_v2/',
// 	'new_model/Stone_Chess_Bishop_Side_A_v2/',
// 	'new_model/Stone_Chess_King_Side_A_v2/',
// 	'new_model/Stone_Chess_Queen_Side_A_v2/'];
// let tabObj = ['12944_Stone_Chess_Pawn_Side_A_V2_L3',
// 	'12941_Stone_Chess_Rook_Side_A_V2_l1',
// 	'12939_Stone_Chess_King_Side_A_V2_l1',
// 	'12942_Stone_Chess_Bishop_V2_l1',
// 	'12939_Stone_Chess_King_Side_A_V2_l1',
// 	'12940_Stone_Chess_Queen_Side_A_V2_l1'];
let tabPath = ['obj/',
	'obj/',
	'obj/',
	'obj/',
	'obj/',
	'obj/'];
let tabObj = ['pionek',
	'wieza',
	'kon',
	'goniec',
	'krol',
	'krolowa'];
	var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff} );	
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath(tabPath[i]);
	mtlLoader.load(tabObj[i] +'.mtl', function(materials) {
	materials.flatShading = false;
	materials.preload();
	var objLoader = new THREE.OBJLoader();

	objLoader.setMaterials(materials);
	objLoader.setPath(tabPath[i]);
	objLoader.load(tabObj[i] +'.obj', 
	function(object) {
	object.smooth = true;
	object.traverse( function( child ) {
			if ( child instanceof THREE.Mesh ) {
				//child.material = ModelMaterial;
				child.geometry.scale(2,2,2);
			}
		} );

		if(i == 0)
		{
			pawns.pionek =object;
		}
		else if(i == 1)
		{
			pawns.wieza =object;
		}
		else if(i == 2)
		{
			pawns.kon =object;
		}
		else if(i == 3)
		{
			pawns.goniec =object;
		}
		else if(i == 4)
		{
			pawns.krol =object;
		}
		else if(i == 5)
		{
			pawns.krolowa =object;
		}

		if(i != 5)
		{
			i++;
			StartPack.AddObject(i);
		}
		else
		{
			StartPack.AddPawns();
			StartPack.AddHightFigure();
		}
		});
		
	});
	}
  ,
AddPawns : function() {
	let xForGrid = -15;
	let yForGrid = 2;
	let zForGrid = -10;
	for(let i=0;i<8;i++)
	{
		let object = pawns.pionek.clone();
			object.position.x = xForGrid;
			object.position.y = yForGrid;
			object.position.z = zForGrid;  
			xForGrid +=5;   
		scene.add(object);
	}

	xForGrid = -15;
	yForGrid = 2;
	zForGrid = 15;
	var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0x404a43} );	
	for(let i=0;i<8;i++)
	{
			let object = pawns.pionek.clone();
			object.children[0].material = ModelMaterial;
			object.position.x = xForGrid;
			object.position.y = yForGrid;
			object.position.z = zForGrid;  
			xForGrid +=5;   
		scene.add(object);
	}
}

,
AddHightFigure : function() {
	let xForGrid = -15;
	let yForGrid = 2;
	let zForGrid = -15;
	for(let i=1;i<9;i++)
	{
		let object;
		if( i == 1)
		{
			object = pawns.wieza.clone();
		}
		else if( i == 2)
		{
			object = pawns.kon.clone();
		}
		else if( i == 3)
		{
			object = pawns.goniec.clone();
		}
		else if( i == 4)
		{
			object = pawns.krol.clone();
		}
		else if( i == 5)
		{
			object = pawns.krolowa.clone();
		}
		else if( i == 6)
		{
			object = pawns.goniec.clone();
		}
		else if( i == 7)
		{
			object = pawns.kon.clone();
		}
		else if( i == 8)
		{
			object = pawns.wieza.clone();
		}
			object.position.x = xForGrid;
			object.position.y = yForGrid;
			object.position.z = zForGrid;  
			xForGrid +=5;   
		scene.add(object);
	}

	xForGrid = -15;
	yForGrid = 2;
	zForGrid = 20;
	var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0x404a43} );	
	for(let i=1;i<9;i++)
	{
		let object;
		if( i == 1)
		{
			object = pawns.wieza.clone();
		}
		else if( i == 2)
		{
			object = pawns.kon.clone();
		}
		else if( i == 3)
		{
			object = pawns.goniec.clone();
		}
		else if( i == 4)
		{
			object = pawns.krol.clone();
		}
		else if( i == 5)
		{
			object = pawns.krolowa.clone();
		}
		else if( i == 6)
		{
			object = pawns.goniec.clone();
		}
		else if( i == 7)
		{
			object = pawns.kon.clone();
		}
		else if( i == 8)
		{
			object = pawns.wieza.clone();
		}
		object.children[0].material = ModelMaterial;
			object.position.x = xForGrid;
			object.position.y = yForGrid;
			object.position.z = zForGrid;  
			xForGrid +=5;   
		scene.add(object);
	}
}

};