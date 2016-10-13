var player;
var tttDivToChange;
var squareToBeAdded;
var player1Turns;
var player2Turns;
var number;
var player1HasRow;
var player2HasRow;
var squareDiv;

resetGame();

function addSquareToPlayerList() {
	
	if(player == "Player1")
	{
		player1Turns.push(squareToBeAdded);
	}
	
	else if(player == "Player2")
	{
		player2Turns.push(squareToBeAdded);
	}
	
	else
	{
		alert("neither Player1 or Player2?!");
	}
}

function checkForWin() {
		if(turnsContainsHorizontalRow(player1Turns))
		{
			player1HasRow = true;
		}
		
		if(turnsContainsHorizontalRow(player2Turns))
		{
			player2HasRow = true;
		}
		
		if(turnsContainsVerticalColumn(player1Turns))
		{
			player1HasRow = true;
		}
		
		if(turnsContainsVerticalColumn(player2Turns))
		{
			player2HasRow = true;
		}
		
		if(turnsContainsDiagonal(player1Turns))
		{
			player1HasRow = true;
		}
		
		if(turnsContainsDiagonal(player2Turns))
		{
			player2HasRow = true;
		}
		
			
		if(player1HasRow && player2HasRow)
		{
			alert("Draw!");
		}
		
		else if(player1HasRow)
		{
			alert("Player1 wins!");
		}
		
		else if(player2HasRow)
		{
			alert("Player2 wins!");
		}
	
}

function clickSquare(xCoordinate, yCoordinate, squareToChange) {
	
	if(player1HasRow || player2HasRow)
	{
		return;
	}
	
	if(document.getElementById(squareToChange).disabled)
	{
		return;
	}
		
	squareDiv = document.getElementById(squareToChange);
		
	squareToBeAdded = new square(xCoordinate, yCoordinate, player);
	
	addSquareToPlayerList();
	
	displayImages();
	
	squareDiv.disabled = true;
		
	checkForWin();
	
	if(player1Turns.length + player2Turns.length == 9 && !player1HasRow && !player2HasRow)
	{
		alert("Nobody wins!");
	}
	
}

function displayImages() {
	
	if(player == "Player1")
	{
		player = "Player2";
		squareDiv.src = "oO.png";
	}
	
	else if(player == "Player2")
	{
		player = "Player1";
		squareDiv.src = "xX.png";
	}
}

function resetGame() {
	
	var gridDiv = document.getElementById("grid");
	gridDiv.innerHTML = 
	"<!--Row 2--><div id=\"squarewhite\" onclick=\"clickSquare(0, 2, 'zeroTwo')\"><img height=80, width=80, id=\"zeroTwo\"></div><div id=\"squaregreen\" onclick=\"clickSquare(1, 2, 'oneTwo')\"><img height=80, width=80, height=80, width=80, id=\"oneTwo\"></div><div id=\"squarewhite\" onclick=\"clickSquare(2, 2, 'twoTwo')\"><img height=80, width=80, height=80, width=80, id=\"twoTwo\"></div><!--Row 1--><div id=\"squaregreen\" onclick=\"clickSquare(0, 1, 'zeroOne')\"><img height=80, width=80, id=\"zeroOne\"></div><div id=\"squarewhite\" onclick=\"clickSquare(1, 1, 'oneOne')\"><img height=80, width=80, id=\"oneOne\"></div><div id=\"squaregreen\" onclick=\"clickSquare(2, 1, 'twoOne')\"><img height=80, width=80, id=\"twoOne\"></div><!--Row 0--><div id=\"squarewhite\" onclick=\"clickSquare(0, 0, 'zeroZero');\"><img height=80, width=80, id=\"zeroZero\"></div><div id=\"squaregreen\" onclick=\"clickSquare(1, 0, 'oneZero')\"><img height=80, width=80, id=\"oneZero\"></div><div id=\"squarewhite\" onclick=\"clickSquare(2, 0, 'twoZero')\"><img height=80, width=80, id=\"twoZero\"></div>";
	player1Turns = [];
	player2Turns = [];
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

 function turnsContainsDiagonal(playerTurns) {
 
 
	var containsDiagonal = false;
	
	var firstDiagonalSquare = false;
	var secondDiagonalSquare = false;
	var thirdDiagonalSquare = false;
	
	for(var i = 0; i < playerTurns.length; i++)
	{
		//check for (0, 0), (1, 1) and (2, 2)
		if(playerTurns[i].xCoordinate == 0 && playerTurns[i].yCoordinate == 0)
		{
			firstDiagonalSquare = true;
		}
		
		if(playerTurns[i].xCoordinate == 1 && playerTurns[i].yCoordinate == 1)
		{
			secondDiagonalSquare = true;
		}
		
		if(playerTurns[i].xCoordinate == 2 && playerTurns[i].yCoordinate == 2)
		{
			thirdDiagonalSquare = true;
		}
		
	}
	
	if(firstDiagonalSquare && secondDiagonalSquare && thirdDiagonalSquare)
	{
		containsDiagonal = true;
	}
	
	firstDiagonalSquare = false;
	secondDiagonalSquare = false;
	thirdDiagonalSquare = false;
	
	for(var i = 0; i < playerTurns.length; i++)
	{
		//check for (0, 2), (1, 1) and (2, 0)
		if(playerTurns[i].xCoordinate == 0 && playerTurns[i].yCoordinate == 2)
		{
			firstDiagonalSquare = true;
		}
		
		if(playerTurns[i].xCoordinate == 1 && playerTurns[i].yCoordinate == 1)
		{
			secondDiagonalSquare = true;
		}
		
		if(playerTurns[i].xCoordinate == 2 && playerTurns[i].yCoordinate == 0)
		{
			thirdDiagonalSquare = true;
		}
					
	}
	
	if(firstDiagonalSquare && secondDiagonalSquare && thirdDiagonalSquare)
	{
		containsDiagonal = true;
	}
	
	return containsDiagonal;
 
 }

 function turnsContainsHorizontalRow(playerTurns) {
	
	var containsHorizontalRow = false;
	
	for(var i = 0; i < playerTurns.length; i++)
	{
		var yColumn = 0;
		
		if(playerTurns[i].xCoordinate == "0")
		{
			yColumn = playerTurns[i].yCoordinate;
			
			for(var j = 0; j < playerTurns.length; j++)
			{
				number = playerTurns[i].xCoordinate;
				number = number + 1;
			
				if(playerTurns[j].xCoordinate == number
				&& playerTurns[j].yCoordinate == yColumn)
				{
					for(var j = 0; j < playerTurns.length; j++)
					{
						if(playerTurns[j].xCoordinate == number
						&& playerTurns[j].yCoordinate == yColumn)
						{
							for(var k = 0; k < playerTurns.length; k++)
							{
								if(playerTurns[k].xCoordinate == (number + 1)
								&& playerTurns[k].yCoordinate == yColumn)
								{
									containsHorizontalRow = true;
								}
							
							}
							
					
						}
						
					
					}
				
				
				}
				
			
			}

		}
	}
	
	
	return containsHorizontalRow;
	
 }
 
 function turnsContainsVerticalColumn(playerTurns) {
	
	var containsVerticalColumn = false;
	
	for(var i = 0; i < playerTurns.length; i++)
	{
		var xRow = 0;
		
		if(playerTurns[i].yCoordinate == "0")
		{
			xRow = playerTurns[i].xCoordinate;
			
			for(var j = 0; j < playerTurns.length; j++)
			{
				number = playerTurns[i].yCoordinate;
				number = number + 1;
			
				if(playerTurns[j].xCoordinate == xRow
				&& playerTurns[j].yCoordinate == number)
				{
					for(var j = 0; j < playerTurns.length; j++)
					{
						if(playerTurns[j].xCoordinate == xRow
						&& playerTurns[j].yCoordinate == number)
						{
							for(var k = 0; k < playerTurns.length; k++)
							{
								if(playerTurns[k].xCoordinate == xRow
								&& playerTurns[k].yCoordinate == (number + 1))
								{
									containsVerticalColumn = true;
								}
							
							}
							
					
						}
						
					
					}
				
				
				}
				
			
			}
			
			
		}
	}
	
	
	return containsVerticalColumn;
	
 }
 