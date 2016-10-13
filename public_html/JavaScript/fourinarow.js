var player;
var tttDivToChange;
var squareToBeAdded;
var player1Turns;
var player2Turns;
var gameTurns;
var number;
var player1HasRow;
var player2HasRow;

resetGame();

function clickSquare(xCoordinate, yCoordinate, squareToChange) {
	
	if(gameTurns.length == 42)
	{
		alert("Game over - nobody wins!");
		return;
	}
	
	if(player1HasRow || player2HasRow)
	{
		return;
	}
	
	if(document.getElementById(squareToChange).disabled)
	{
		return;
	}
	
	for(var z = 0; z < gameTurns.length; z++)
	{
		if(gameTurns[z].xCoordinate == xCoordinate
		&& gameTurns[z].yCoordinate == yCoordinate)
		{
			return;
		}
	}
	
	if(yCoordinate == 0)
	{
			positionAndDisplayCounter(squareToChange, xCoordinate, yCoordinate);
	}
	
	else
	{
		for(var z = 0; z < gameTurns.length; z++)
		{
			if(gameTurns[z].xCoordinate == xCoordinate
			&& gameTurns[z].yCoordinate == yCoordinate - 1)
			{
				positionAndDisplayCounter(squareToChange, xCoordinate, yCoordinate);
			}
		}
	}
	
	checkForLines();
	
	if(player1HasRow && player2HasRow)
	{
		alert("Game is a draw!");
		return;
	}
	
	if(player1HasRow)
	{
		alert("Player1 wins!");
		return;
	}
	
	if(player2HasRow)
	{
		alert("Player2 wins!");
		return;
	}
	
	if(gameTurns.length == 42)
	{
		alert("Game over - nobody wins!");
		return;
	}
		
}	

function checkForLines() {
	if(checkForHorizontalLine(player1Turns))
	{
		player1HasRow = true;
	}
	
	if(checkForHorizontalLine(player2Turns))
	{
		player2HasRow = true;	
	}
	
	if(checkForVerticalLine(player1Turns))
	{
		player1HasRow = true;
	}
	
	if(checkForVerticalLine(player2Turns))
	{
		player2HasRow = true;
	}
	
	if(checkForDiagonalLine(player1Turns))
	{
		player1HasRow = true;
	}
	
	if(checkForDiagonalLine(player2Turns))
	{
		player2HasRow = true;
	}		
		
}

function checkForDiagonalLine(playerTurnsList) {
	
	var hasDiagonalLine = false;
	
	//Positive diagonal line
	for(var i = 0; i < playerTurnsList.length; i++)
	{
		var firstXCoordinate = playerTurnsList[i].xCoordinate;
		var firstYCoordinate = playerTurnsList[i].yCoordinate;
		
		for(var j = 0; j < playerTurnsList.length; j++)
		{
			if(playerTurnsList[j].xCoordinate == (firstXCoordinate - 1)
			&& playerTurnsList[j].yCoordinate == (firstYCoordinate + 1))
			{
				for(var k = 0; k < playerTurnsList.length; k++)
				{
					if(playerTurnsList[k].xCoordinate == (firstXCoordinate - 2)
					&& playerTurnsList[k].yCoordinate == (firstYCoordinate + 2))
					{
						
					for(var l = 0; l < playerTurnsList.length; l++)
					{
						if(playerTurnsList[l].xCoordinate == (firstXCoordinate - 3)
						&& playerTurnsList[l].yCoordinate == (firstYCoordinate + 3))
						{
							hasDiagonalLine = true;
						}
					}
						
					}
				}
				
			}
		}
		
	}
	
	//Positive negative line
	for(var i = 0; i < playerTurnsList.length; i++)
	{
		var firstXCoordinate = playerTurnsList[i].xCoordinate;
		var firstYCoordinate = playerTurnsList[i].yCoordinate;
		
		for(var j = 0; j < playerTurnsList.length; j++)
		{
			if(playerTurnsList[j].xCoordinate == (firstXCoordinate + 1)
			&& playerTurnsList[j].yCoordinate == (firstYCoordinate + 1))
			{
				for(var k = 0; k < playerTurnsList.length; k++)
				{
					if(playerTurnsList[k].xCoordinate == (firstXCoordinate + 2)
					&& playerTurnsList[k].yCoordinate == (firstYCoordinate + 2))
					{
						
					for(var l = 0; l < playerTurnsList.length; l++)
					{
						if(playerTurnsList[l].xCoordinate == (firstXCoordinate + 3)
						&& playerTurnsList[l].yCoordinate == (firstYCoordinate + 3))
						{
							hasDiagonalLine = true;
						}
					}
						
					}
				}
				
			}
		}
		
	}
	
	return hasDiagonalLine;
	
}

function checkForVerticalLine(playerTurnsList) {
	
	var hasVerticalLine = false;
	
	for(var i = 0; i < playerTurnsList.length; i++)
	{
		var firstXCoordinate = playerTurnsList[i].xCoordinate;
		var firstYCoordinate = playerTurnsList[i].yCoordinate;
		
		for(var j = 0; j < playerTurnsList.length; j++)
		{
			if(playerTurnsList[j].xCoordinate == (firstXCoordinate)
			&& playerTurnsList[j].yCoordinate == (firstYCoordinate + 1))
			{
			
			for(var k = 0; k < playerTurnsList.length; k++)
			{
				if(playerTurnsList[k].xCoordinate == (firstXCoordinate)
				&& playerTurnsList[k].yCoordinate == (firstYCoordinate + 2))
				{
				
					for(var l = 0; l < playerTurnsList.length; l++)
					{
						if(playerTurnsList[l].xCoordinate == (firstXCoordinate)
						&& playerTurnsList[l].yCoordinate == (firstYCoordinate + 3))
						{
							hasVerticalLine = true;
						}
					}
				}
			}
				
			}
		}
	}
	
	return hasVerticalLine;
}

function checkForHorizontalLine(playerTurnsList) {
	
	var hasHorizontalLine = false;
	
	for(var i = 0; i < playerTurnsList.length; i++)
	{
		var firstXCoordinate = playerTurnsList[i].xCoordinate;
		var firstYCoordinate = playerTurnsList[i].yCoordinate;
		
		for(var j = 0; j < playerTurnsList.length; j++)
		{
			if(playerTurnsList[j].xCoordinate == (firstXCoordinate + 1)
			&& playerTurnsList[j].yCoordinate == (firstYCoordinate))
			{
			
			for(var k = 0; k < playerTurnsList.length; k++)
			{
				if(playerTurnsList[k].xCoordinate == (firstXCoordinate + 2)
				&& playerTurnsList[k].yCoordinate == (firstYCoordinate))
				{
				
					for(var l = 0; l < playerTurnsList.length; l++)
					{
						if(playerTurnsList[l].xCoordinate == (firstXCoordinate + 3)
						&& playerTurnsList[l].yCoordinate == (firstYCoordinate))
						{
							hasHorizontalLine = true;
						}
					}
				}
			}

			}
		}	
	}
	
	return hasHorizontalLine;
}

function positionAndDisplayCounter(squareToChange, xCoordinate, yCoordinate) {

		var squareDiv = document.getElementById(squareToChange);
	
			squareToBeAdded = new square(xCoordinate, yCoordinate, player);
			
			if(player == "Player1")
			{
				player1Turns.push(squareToBeAdded);
				gameTurns.push(squareToBeAdded);
			}
			
			else if(player == "Player2")
			{
				player2Turns.push(squareToBeAdded);
				gameTurns.push(squareToBeAdded);
			}
			
			else
			{
				alert("neither Player1 or Player2?!");
			}
			
			if(player == "Player1")
			{
				player = "Player2";
				squareDiv.src = "greencounter.png";
			}
			
			else if(player == "Player2")
			{
				player = "Player1";
				squareDiv.src = "whitecounter.png";
			}

}	

function resetGame() {
	
	var gridDiv = document.getElementById("fourinarowgrid");
	//gridDiv.innerHTML = 
	//"<!--Row 2--><div id=\"squarewhite\" onclick=\"addSquare(0, 2, 'zeroTwo')\"><img height=80, width=80, id=\"zeroTwo\"></div><div id=\"squaregreen\" onclick=\"addSquare(1, 2, 'oneTwo')\"><img height=80, width=80, height=80, width=80, id=\"oneTwo\"></div><div id=\"squarewhite\" onclick=\"addSquare(2, 2, 'twoTwo')\"><img height=80, width=80, height=80, width=80, id=\"twoTwo\"></div><!--Row 1--><div id=\"squaregreen\" onclick=\"addSquare(0, 1, 'zeroOne')\"><img height=80, width=80, id=\"zeroOne\"></div><div id=\"squarewhite\" onclick=\"addSquare(1, 1, 'oneOne')\"><img height=80, width=80, id=\"oneOne\"></div><div id=\"squaregreen\" onclick=\"addSquare(2, 1, 'twoOne')\"><img height=80, width=80, id=\"twoOne\"></div><!--Row 0--><div id=\"squarewhite\" onclick=\"addSquare(0, 0, 'zeroZero');\"><img height=80, width=80, id=\"zeroZero\"></div><div id=\"squaregreen\" onclick=\"addSquare(1, 0, 'oneZero')\"><img height=80, width=80, id=\"oneZero\"></div><div id=\"squarewhite\" onclick=\"addSquare(2, 0, 'twoZero')\"><img height=80, width=80, id=\"twoZero\"></div>";
	player1Turns = [];
	player2Turns = [];
	gameTurns = [];
	number = 0;
	player1HasRow = false;
	player2HasRow = false;
	player = "Player1";		
}

function square(xCoordinate, yCoordinate, player) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = player;
}