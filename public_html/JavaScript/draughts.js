var pieceTracker;
var squareToBeAdded;
var player; //either "GreenPlayer" or "WhitePlayer"
var currentPiece;
var squareOne;
var squareTwo;
var greenPlayerCounter = "greencounter.png"
var whitePlayerCounter = "whitecounter.png"
var outputDiv;
var greenPlayerPieceCount;
var whitePlayerPieceCount;
var isGameOver;

gameStart();

function checkEndGame() {
	
	getPlayerPieceCounts();
	
	if(greenPlayerPieceCount === 0)
	{
		outputMessage(" ");
		alert("WhitePlayer wins!");
		isGameOver = true;
	}
	
	else if(whitePlayerPieceCount === 0)
	{
		outputMessage(" ");
		alert("GreenPlayer wins!");
		isGameOver = true;
	}
	
}

function checkForQueenPieces() {
	
	for(i = 0; i < pieceTracker.length; i++)
	{
		if(pieceTracker[i].pieceIsAlive)
		{
			if(pieceTracker[i].player == "GreenPlayer"
			&& pieceTracker[i].yCoordinate == 7)
			{
				pieceTracker[i].pieceIsQueen = true;
				pieceTracker[i].image = "greenqueencounter.png";
			}
			
			else if(pieceTracker[i].player == "WhitePlayer"
			&& pieceTracker[i].yCoordinate == 0)
			{
				pieceTracker[i].pieceIsQueen = true;
				pieceTracker[i].image = "whitequeencounter.png";
			}
		}
	}
	
}

function checkMoveCombinations(firstXStep, firstYStep, secondXStep, secondYStep,
								thirdXStep, thirdYStep, fourthXStep, fourthYStep) {
	
	if(squareTwo.xCoordinate == (squareOne.xCoordinate + firstXStep)
	&& (squareTwo.yCoordinate == (squareOne.yCoordinate + firstYStep)))
	{
		checkTakingMove(firstXStep, firstYStep);
	}
	
	else if(squareTwo.xCoordinate == (squareOne.xCoordinate + secondXStep)
	&& (squareTwo.yCoordinate == (squareOne.yCoordinate + secondYStep)))
	{
		checkTakingMove(secondXStep, secondYStep);
	}

	else if((squareTwo.xCoordinate == squareOne.xCoordinate + thirdXStep
	&& squareTwo.yCoordinate == squareOne.yCoordinate + thirdYStep)
	|| (squareTwo.xCoordinate == squareOne.xCoordinate + fourthXStep
	&& squareTwo.yCoordinate == squareOne.yCoordinate + fourthYStep))
	{
		completeMove();
	}
	
	else
	{
		illegalMove();
	}
	
}

function clickSquare(xCoordinate, yCoordinate, squareToChange) {
	
	if(isGameOver)
	{
		return;
	}
	
	if(squareOne == null)
	{
		squareOne = new square(xCoordinate, yCoordinate, player, squareToChange);
		outputMessage(player + " first square selected");
		return;
	}
	
	if(getIndexOfPiece(squareOne.xCoordinate, squareOne.yCoordinate) == -1)
	{
		resetSquareVariables();
		outputMessage("There is no piece in that square. " + player + " turn");
		return;
	}
	
	if(squareOne != null)
	{
		squareTwo = new square(xCoordinate, yCoordinate, player, squareToChange)
	}
	
	if(squareOne == squareTwo
	|| pieceTrackerHasPiece(squareTwo.xCoordinate, squareTwo.yCoordinate))
	{
		illegalMove();
		return;
	}
		
	currentPiece = pieceTracker[getIndexOfPiece(squareOne.xCoordinate, squareOne.yCoordinate)];
	
	move();
	
	resetSquareVariables();
	
	getPlayerPieceCounts();
	
	checkEndGame();
	
	if(isGameOver)
	{
		return;
	}
	
}

function completeMove() {

	currentPiece.xCoordinate = squareTwo.xCoordinate;
	currentPiece.yCoordinate = squareTwo.yCoordinate;
	currentPiece.divName = squareTwo.divName;
	
	displayPieceImage();

}

function checkTakingMove(xStep, yStep) {

	if(pieceTrackerHasPiece(squareOne.xCoordinate + (0.5 * xStep), squareOne.yCoordinate + (0.5 * yStep))
	&& !pieceTrackerHasPiece(squareOne.xCoordinate + xStep, squareOne.yCoordinate + yStep))
	{
		completeTakingMove((0.5 * xStep), (0.5 * yStep));						
	}
	
	else
	{
		illegalMove();
	}

}

function completeTakingMove(xStep, yStep) {
	
	var pieceIndex2 = getIndexOfPiece((squareOne.xCoordinate + xStep), (squareOne.yCoordinate + yStep));
	
	var takenPieceDiv = document.getElementById(pieceTracker[pieceIndex2].divName);
	takenPieceDiv.src = "";
	
	pieceTracker[pieceIndex2].pieceIsAlive = false;
	
	pieceTracker[pieceIndex2].xCoordinate = -1;
	pieceTracker[pieceIndex2].yCoordinate = -1;
	
	currentPiece.xCoordinate = squareTwo.xCoordinate;
	currentPiece.yCoordinate = squareTwo.yCoordinate;
	currentPiece.divName = squareTwo.divName;
	
	displayPieceImage();
	
}
	
function displayPieceImage() {
		
	checkForQueenPieces();
		
	var squareOneDiv = document.getElementById(squareOne.divName);
	var squareTwoDiv = document.getElementById(squareTwo.divName);
	squareOneDiv.src="";
	
	squareTwoDiv.src = currentPiece.image;
	
	if(player == "GreenPlayer")
	{
		player = "WhitePlayer";
	}
	
	else if(player == "WhitePlayer")
	{
		player = "GreenPlayer";
	}
	
	else
	{
		alert("displayPieceImage() - Unknown player?!");
	}
	
	outputMessage("Successful move - " + player + " turn.");
		
}

function gameStart() {
	
	isGameOver = false;
	
	outputDiv = document.getElementById("outputdiv");
	outputMessage("GreenPlayer goes first - click a piece to start.");
	
	greenPlayerPieceCount = 0;
	whitePlayerPieceCount = 0;
	
	pieceTracker = [];
	
	//Each player has 12 pieces at the start
	//12 green:
	pieceTracker.push(new square(0, 0, "GreenPlayer", "zeroZero", greenPlayerCounter));
	pieceTracker.push(new square(2, 0, "GreenPlayer", "twoZero", greenPlayerCounter));
	pieceTracker.push(new square(4, 0, "GreenPlayer", "fourZero", greenPlayerCounter));
	pieceTracker.push(new square(6, 0, "GreenPlayer", "sixZero", greenPlayerCounter));
	
	pieceTracker.push(new square(1, 1, "GreenPlayer", "oneOne", greenPlayerCounter));
	pieceTracker.push(new square(3, 1, "GreenPlayer", "threeOne", greenPlayerCounter));
	pieceTracker.push(new square(5, 1, "GreenPlayer", "fiveOne", greenPlayerCounter));
	pieceTracker.push(new square(7, 1, "GreenPlayer", "sevenOne", greenPlayerCounter));
	
	pieceTracker.push(new square(0, 2, "GreenPlayer", "zeroTwo", greenPlayerCounter));
	pieceTracker.push(new square(2, 2, "GreenPlayer", "twoTwo", greenPlayerCounter));
	pieceTracker.push(new square(4, 2, "GreenPlayer", "fourTwo", greenPlayerCounter));
	pieceTracker.push(new square(6, 2, "GreenPlayer", "sixTwo", greenPlayerCounter));
	
	//12 white
	pieceTracker.push(new square(1, 5, "WhitePlayer", "oneFive", whitePlayerCounter));
	pieceTracker.push(new square(3, 5, "WhitePlayer", "threeFive", whitePlayerCounter));
	pieceTracker.push(new square(5, 5, "WhitePlayer", "fiveFive", whitePlayerCounter));
	pieceTracker.push(new square(7, 5, "WhitePlayer", "sevenFive", whitePlayerCounter));
	
	pieceTracker.push(new square(0, 6, "WhitePlayer", "zeroSix", whitePlayerCounter));
	pieceTracker.push(new square(2, 6, "WhitePlayer", "twoSix", whitePlayerCounter));
	pieceTracker.push(new square(4, 6, "WhitePlayer", "fourSix", whitePlayerCounter));
	pieceTracker.push(new square(6, 6, "WhitePlayer", "sixSix", whitePlayerCounter));
	
	pieceTracker.push(new square(1, 7, "WhitePlayer", "oneSeven", whitePlayerCounter));
	pieceTracker.push(new square(3, 7, "WhitePlayer", "threeSeven", whitePlayerCounter));
	pieceTracker.push(new square(5, 7, "WhitePlayer", "fiveSeven", whitePlayerCounter));
	pieceTracker.push(new square(7, 7, "WhitePlayer", "sevenSeven", whitePlayerCounter));
	
	player = "GreenPlayer";
	
	getPlayerPieceCounts();
		
}

function getIndexOfPiece(xCoordinate, yCoordinate){
	
	var pieceIndex = -1;
		
	for(var i = 0; i < pieceTracker.length; i++)
	{
		if(pieceTracker[i].xCoordinate == xCoordinate
		&& pieceTracker[i].yCoordinate == yCoordinate
		&& pieceTracker[i].pieceIsAlive)
		{
			pieceIndex = i;
			break;
		}
		
	}
	
	return pieceIndex;
	
}

function getPlayerPieceCounts() {
		
		greenPlayerPieceCount = 0;
		whitePlayerPieceCount = 0;
			
		for(i = 0; i < pieceTracker.length; i++)
		{
			if(pieceTracker[i].pieceIsAlive)
			{
				if(pieceTracker[i].player == "GreenPlayer")
				{
					greenPlayerPieceCount++;
				}
				
				else if(pieceTracker[i].player == "WhitePlayer")
				{
					whitePlayerPieceCount++;
				}
				
				else
				{
					alert("getPlayerPieceCounts function - neither green nor white?!");
				}
				
			}
		}
	
}
	
function move() {
	
	if(currentPiece.pieceIsQueen)
	{
		if(currentPiece.player != player)
		{
			resetSquareVariables();
			illegalMove();
			return;
		}
		
		else
		{
			checkMoveCombinations(2, 2, -2, 2, 1, 1, -1, 1);
			
			if(outputDiv.innerHTML == "GreenPlayer illegal move"
			|| outputDiv.innerHTML == "WhitePlayer illegal move")
			{
				player = currentPiece.player;
				checkMoveCombinations(-2, -2, 2, -2, -1, -1, 1, -1);
			}
		}
		
	}
	
	else if(player == "GreenPlayer")
	{
		checkMoveCombinations(2, 2, -2, 2, 1, 1, -1, 1);
	}
	
	else if(player == "WhitePlayer")
	{
		checkMoveCombinations(-2, -2, 2, -2, -1, -1, 1, -1);
	}
	
}

function illegalMove() {
	
	if(!currentPiece.pieceIsQueen)
	{
		resetSquareVariables();
	}
	outputMessage(player + " illegal move");

}

function outputMessage(message) {

	outputDiv.innerHTML = message;

}

function pieceTrackerHasPiece(xCoordinate, yCoordinate) {

	var hasPiece = false;
	
	for(var i = 0; i < pieceTracker.length; i++)
	{
		if(pieceTracker[i].xCoordinate == xCoordinate && pieceTracker[i].yCoordinate == yCoordinate
		&& pieceTracker[i].pieceIsAlive)
		{
			hasPiece = true;
			break;
		}
	}
	
	
	return hasPiece;

}

function resetSquareVariables() {
	
	squareOne = null;
	squareTwo = null;
	currentPiece = -1;
	
}

function square(xCoordinate, yCoordinate, player, divName, image) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player = player;
  this.image = image;
  this.divName = divName;
  this.pieceIsAlive = true;
  this.pieceIsQueen = false;
}