/**
 * @author Piotr Zieliński http://pzcv.cba.pl/
 */
gui = new dat.GUI();

parameters = 
{
    MPcolor: "White",
    Pcolor: "w",
    Ecolor: "b",
    Scolor:  "#ff0000", // color (change "#" to "0x")
    Gmode:  "IA", // color (change "#" to "0x")
    play: function() { playF() }
};

var SelectColor = gui.addColor( parameters, 'Scolor' ).name('Color select').listen();
SelectColor.onChange(function(value) {   
    parameters.Scolor =value.replace("#", "0x");   
});

var PlayerColor = gui.add( parameters, 'MPcolor', [ "White" , "Black"] ).name('Player color').listen();
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
    newGame();
playGame = true;
gui.destroy();
}