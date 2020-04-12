/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
gui = new dat.GUI();

parameters = 
{
    Pcolor: "White",
    Ecolor: "Black",
    Scolor:  "#ff0000", // color (change "#" to "0x")
    Gmode:  "IA", // color (change "#" to "0x")
    play: function() { playF() }
};

var SelectColor = gui.addColor( parameters, 'Scolor' ).name('Color select').listen();
SelectColor.onChange(function(value) {   
    parameters.Scolor =value.replace("#", "0x");   
});

var PlayerColor = gui.add( parameters, 'Pcolor', [ "White"] ).name('Player color').listen();
PlayerColor.onChange(function(value) { 
    if(value == "White")
    {
        parameters.Pcolor = "w"; 
        parameters.Ecolor = "b";
    }
    else if(value == "Black")
    {
        parameters.Pcolor = "b"; 
        parameters.Ecolor = "w";
    }
});

var GameMode = gui.add( parameters, 'Gmode', [ "IA", "PvP"] ).name('Game Mode').listen();
GameMode.onChange(function(value) {   
    parameters.Gmode = value;
});

gui.add( parameters, 'play' ).name("Play game!");

function playF()
{
playGame = true;
gui.destroy();
}