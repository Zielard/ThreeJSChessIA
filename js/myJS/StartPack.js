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
var boardObj;
var StartPack = {
  loadBaseObj : function() {		
			board = new Board();		
			StartPack.AddObject(0);
  }
  ,
  AddObject : function(i) {
  
	let tabPath = [
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/',
		'szachy.low.poly/obj/'];
	let tabObj = ['pionek',
		'wieza',
		'kon',
		'goniec',
		'krol',
		'krolowa',
		'plansza'];

// 	let tabPath = [
// 	'new_model/Stone_Chess_Pawn_Side_A_v2/',
// 	'new_model/Stone_Chess_Rook_Side_A_v2/',
// 	'new_model/Stone_Chess_Knight_Side_A_v2/',
// 	'new_model/Stone_Chess_Bishop_Side_A_v2/',
// 	'new_model/Stone_Chess_King_Side_A_v2/',
// 	'new_model/Stone_Chess_Queen_Side_A_v2/',
// 	'szachy.low.poly/obj/'];
// let tabObj = [
// 	'12944_Stone_Chess_Pawn_Side_A_V2_L3',
// 	'12941_Stone_Chess_Rook_Side_A_V2_l1',
// 	'12943_Stone_Chess_Knight_Side_A_v2_l1',
// 	'12942_Stone_Chess_Bishop_V2_l1',
// 	'12939_Stone_Chess_King_Side_A_V2_l1',
// 	'12940_Stone_Chess_Queen_Side_A_V2_l1',
// 	'plansza'];

// let tabPath = ['obj/',
// 	'obj/',
// 	'obj/',
// 	'obj/',
// 	'obj/',
// 	'obj/'];
// let tabObj = ['pionek',
// 	'wieza',
// 	'kon',
// 	'goniec',
// 	'krol',
// 	'krolowa'];
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath(tabPath[i]);
	mtlLoader.load(tabObj[i] +'.mtl', function(materials) {
	materials.flatShading = false;
	var objLoader = new THREE.OBJLoader();

	materials.preload();
	console.log(materials);
	//materials.materials.material_z_normalami.bumpMap = mapHeight;
	//materials.materials.material_z_normalami.envMap = mapEnv;	
	//materials.materials.material_z_normalami.specular = 0x222222;
	//materials.materials.material_z_normalami.color = 0xffffff;
	//materials.materials.material_z_normalami.emissive = 0xffffff;
	//materials.materials.material_z_normalami.shininess = 25;
	// materials.color = 0x552811;
	// materials.specular = 0x222222;
	// materials.shininess = 25;
	// materials.bumpMap = mapHeight;
	// materials.bumpScale = 12;

	//materials.bumpMap = mapHeight;
	//materials.bumpScale = 12;
	objLoader.setMaterials(materials);
	objLoader.setPath(tabPath[i]);
	objLoader.load(tabObj[i] +'.obj', 
	function(object) {
	object.smooth = true;
	object.traverse( function( child ) {
			if ( child instanceof THREE.Mesh ) {
				//child.material = ModelMaterial;
				child.geometry.scale(1.5,1.5,1.5);
				
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
		else if(i == 6)
		{
			let material = new THREE.MeshStandardMaterial( {
				color: 0xffffff,
				roughness:  0.2,
				metalness:  0.2,
				map: AoMapBoard,
				normalMap: AoMapBoard,
				aoMapIntensity: 0.1,
				normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
				envMap: reflectionCube,
				} );
				let geometry = new THREE.BufferGeometry();
				let sss = 0.35;
				object.children[0].geometry.scale(sss,1,sss);
				geometry = geometry.copy(object.children[0].geometry);
				let mesh = new THREE.Mesh( geometry, material );
				mesh.position.y= -1.51;
				mesh.rotation.y= -3.14/2;
				boardObj = mesh;
			scene.add(mesh);
		}
		if(i != 6)
		{
			i++;
			StartPack.AddObject(i);
		}
		else
		{
			console.log(this);
			StartPack.AddPawns(this);
		}
		});
		
	});
	}
  ,
AddPawns : function(windowThis) {

	for(let i=0;i<8;i++)
	{
		for(let j=0;j<8;j++)
		{
			if(i==0 || i==7)
			{
					//Tower
					if(j==0 || j==7)
					{

					let material = new THREE.MeshStandardMaterial( {
					color: 0xC0C0C0,
					roughness:  0.5,
					metalness:  0.5,
					normalMap: normalMapA,
					aoMapIntensity: 1,
					normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
					envMap: reflectionCube,
					} );
					let geometry = new THREE.BufferGeometry();
					geometry = geometry.copy(pawns.wieza.children[0].geometry);
					material = material.copy(materialNormal);
					material.flatShading =false;

					let mesh = new THREE.Mesh( geometry, material );
					mesh.material.flatShading = false;

					if((i==0 || i==7) && (i==0))
					{
						mesh.material.color.set(0xC5B358);
						board.BoardTable[i][j].figure = new tower(mesh,"b");
					}
					else
					{
						board.BoardTable[i][j].figure = new tower(mesh,"w");
					}
					board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
					board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
					board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
					pawnsGroup.add(board.BoardTable[i][j].figure.object);
				}
				//horse
				if(j==1 || j==6)
				{
					let material = new THREE.MeshStandardMaterial( {
						color: 0xffffff,
						roughness:  0.1,
						metalness:  0.1,
						normalMap: normalMapA,
						aoMapIntensity: 1,
						normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
						envMap: reflectionCube,
						} );
						let geometry = new THREE.BufferGeometry();
						geometry = geometry.copy(pawns.kon.children[0].geometry);
						material = material.copy(materialNormal);
						material.flatShading =false;
						let mesh = new THREE.Mesh( geometry, material );
					if(i==7)
					{
						mesh.rotation.y = 3.14;
						board.BoardTable[i][j].figure = new horse(mesh,"w");
					}
					else if(i==0)
					{
						board.BoardTable[i][j].figure = new horse(mesh,"b");
						mesh.material.color.set(0xC5B358);
					}
					board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
					board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
					board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
					pawnsGroup.add(board.BoardTable[i][j].figure.object);
				}
				//Runner
				if(j==2 || j==5)
				{
					let material = new THREE.MeshStandardMaterial( {
						color: 0xffffff,
						roughness:  0.1,
						metalness:  0.1,
						normalMap: normalMapA,
						aoMapIntensity: 1,
						normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
						envMap: reflectionCube,
						} );
						let geometry = new THREE.BufferGeometry();
						geometry = geometry.copy(pawns.goniec.children[0].geometry);
						material = material.copy(materialNormal);
						material.flatShading =false;
						let mesh = new THREE.Mesh( geometry, material );
					if(i==7)
					{
					board.BoardTable[i][j].figure = new runner(mesh,"w");
					}
					else if(i==0)
					{
					board.BoardTable[i][j].figure = new runner(mesh,"b");
					mesh.material.color.set(0xC5B358);
					}
					board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
					board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
					board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
					pawnsGroup.add(board.BoardTable[i][j].figure.object);
				}
				//King
				if(j==4)
				{
					let material = new THREE.MeshStandardMaterial( {
						color: 0xffffff,
						roughness:  0.1,
						metalness:  0.1,
						normalMap: normalMapA,
						aoMapIntensity: 1,
						normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
						envMap: reflectionCube,
						} );
						let geometry = new THREE.BufferGeometry();
						geometry = geometry.copy(pawns.krol.children[0].geometry);
						material = material.copy(materialNormal);
						material.flatShading =false;
						let mesh = new THREE.Mesh( geometry, material );
						mesh.rotation.y = 3.14/2;
					if(j==4 && i == 7)
					{
					board.BoardTable[i][j].figure = new king(mesh,"w");
					}
					else if(j==4 && i == 0)
					{
					board.BoardTable[i][j].figure = new king(mesh,"b");
					mesh.material.color.set(0xC5B358);
					}
					board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
					board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
					board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
					pawnsGroup.add(board.BoardTable[i][j].figure.object);
				}
				//Queen
				if(j==3)
				{
					let material = new THREE.MeshStandardMaterial( {
						color: 0xffffff,
						roughness:  0.1,
						metalness:  0.1,
						normalMap: normalMapA,
						aoMapIntensity: 1,
						normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
						envMap: reflectionCube,
						} );
						let geometry = new THREE.BufferGeometry();
						geometry = geometry.copy(pawns.krolowa.children[0].geometry);
						material = material.copy(materialNormal);
						material.flatShading =false;
						let mesh = new THREE.Mesh( geometry, material );
					if(j==3 && i == 7)
					{
					board.BoardTable[i][j].figure = new queen(mesh,"w");
					}
					else if(j==3 && i == 0)
					{
					board.BoardTable[i][j].figure = new queen(mesh,"b");
					mesh.material.color.set(0xC5B358);
					}
					board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
					board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
					board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
					pawnsGroup.add(board.BoardTable[i][j].figure.object);
				}

			}
			//Pawns
			else if(i==1 || i==6)
			{
				let material = new THREE.MeshStandardMaterial( {
					color: 0xffffff,
					roughness:  0.6,
					metalness:  0.6,
					normalMap: normalMapA,
					aoMapIntensity: 0.5,
					normalScale: new THREE.Vector2( 1, - 1 ), // why does the normal map require negation in this case?
					envMap: reflectionCube,
					} );
					let geometry = new THREE.BufferGeometry();
					geometry = geometry.copy(pawns.pionek.children[0].geometry);
					material = material.copy(materialNormal);
					material.flatShading =false;
					let mesh = new THREE.Mesh( geometry, material );
				if(i == 1)
				{
				board.BoardTable[i][j].figure = new pawn(mesh,"b");
				mesh.material.color.set(0xC5B358);
				}
				else if(i == 6)
				{
				board.BoardTable[i][j].figure = new pawn(mesh,"w");
				}
				board.BoardTable[i][j].figure.object.position.x = board.BoardTable[i][j].position.x;
				board.BoardTable[i][j].figure.object.position.y = board.BoardTable[i][j].position.y;
				board.BoardTable[i][j].figure.object.position.z = board.BoardTable[i][j].position.z;
				pawnsGroup.add(board.BoardTable[i][j].figure.object);
			}
		}
	}
}

};