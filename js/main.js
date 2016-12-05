var memoryArray = [];
var memoryValues = [];
var memoryTileIds = [];
var tilesRevealedCounter = 0;
var clicksMade = 0;
var gamesWonCounter = 0;

var resetStyleBackground = '#2e4172';
var revealedStyleBackground = '#FFF';


function newBoard(){
	tilesRevealedCounter = 0;
    clicksMade = 0;
	var output = '';
    memoryArray = generateMemoryArray(8);
	for(var i = 0; i < memoryArray.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memoryArray[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}


Array.prototype.shuffleTiles = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function generateMemoryArray(options){
    var newMemoryArray = [];
    for(i=1; i <= options; i++){
        for(j=0; j<2; j++){
        newMemoryArray.push(i);    
        }
    }
    newMemoryArray.shuffleTiles();
    return newMemoryArray;
}

  
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memoryValues.length < 2){
		tile.style.background = revealedStyleBackground;
		tile.innerHTML = val;
        clicksMade++;
        document.getElementById("clickCounter").innerHTML = clicksMade;
		if(memoryValues.length == 0){
			memoryValues.push(val);
			memoryTileIds.push(tile.id);
		} else if(memoryValues.length == 1){
			memoryValues.push(val);
			memoryTileIds.push(tile.id);
			if(memoryValues[0] == memoryValues[1]){
				tilesRevealedCounter += 2;
				// Clear both arrays
				memoryValues = [];
            	memoryTileIds = [];
				// Check to see if the whole board is cleared
				if(tilesRevealedCounter == memoryArray.length){
					alert("Game Won, generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
                    gamesWonCounter++;
                    document.getElementById("gameWonCounter").innerHTML = gamesWonCounter;
                    document.getElementById("clickCounter").innerHTML = clicksMade;

				}
			} else {
				function flipCardsBack(){
				    // Flip the 2 tiles back over
				    var tile1 = document.getElementById(memoryTileIds[0]);
				    var tile2 = document.getElementById(memoryTileIds[1]);
                    //reset the styles for the tiles that are flipped back over
                    resetTileBackgroundsStyles(tile1, tile2);

				    // Clear both arrays
				    memoryValues = [];
            	    memoryTileIds = [];
				}
				setTimeout(flipCardsBack, 700);
			}
		}
	}
}

function resetTileBackgroundsStyles(tile1, tile2){
    tile1.style.background = resetStyleBackground;
    tile1.innerHTML = "";
	tile2.style.background = resetStyleBackground;
    tile2.innerHTML = "";  
}


