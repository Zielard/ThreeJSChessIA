gui = new dat.GUI();

parameters = 
{
    Pcolor: "White",
    Scolor:  "#ff0000", // color (change "#" to "0x")
    Gmode:  "IA", // color (change "#" to "0x")
    play: function() { playF() }
};

var SelectColor = gui.addColor( parameters, 'Scolor' ).name('Color select').listen();
SelectColor.onChange(function(value) {   
    sphere.material.color.setHex( value.replace("#", "0x") );   
});

var PlayerColor = gui.add( parameters, 'Pcolor', [ "Black", "White"] ).name('Player color').listen();
PlayerColor.onChange(function(value) {   

});

var GameMode = gui.add( parameters, 'Gmode', [ "IA", "PvP"] ).name('Game Mode').listen();
GameMode.onChange(function(value) {   

});

gui.add( parameters, 'play' ).name("Play game!");

function playF()
{
gui.destroy();

}