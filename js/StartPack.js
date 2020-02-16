/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
 
var StartPack = {
  loadbaseLight : function() {				
             ///////////////////////////////////////
            //Wczytanie kordynatow z pliku 
            //
			var ModelMaterial = new THREE.MeshPhongMaterial( { color: 0xf4be41} );	
						var mtlLoader = new THREE.MTLLoader();
						mtlLoader.setPath('obj/');
						mtlLoader.load('pionek.mtl', function(materials) {
					  materials.flatShading = false;
					  materials.preload();
					  var objLoader = new THREE.OBJLoader();
					  objLoader.setMaterials(materials);
					  objLoader.setPath('obj/');
					  objLoader.load('pionek.obj', function(object) {
						object.smooth = true;
						 object.traverse( function( child ) {
								if ( child instanceof THREE.Mesh ) {
									child.material = ModelMaterial;
								}
							} );
						scene.add(object);
					  });
					});
  }
};