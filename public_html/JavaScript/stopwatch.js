function stopwatchFunction() {
	
	if(runStopwatch)
	{
		hours = stopwatchTime.getHours();
		minutes = stopwatchTime.getMinutes();
		seconds = stopwatchTime.getSeconds();
		milliseconds = stopwatchTime.getMilliseconds();
		
		if(hours < 10)
		{
			hours = "0" + hours;
		}
		
		if(minutes < 10)
		{
			minutes = "0" + minutes;
		}
		
		if(seconds < 10)
		{
			seconds = "0" + seconds;
		}
		
		if(milliseconds < 10)
		{
			milliseconds = "00" + milliseconds;
		}
		
		if(milliseconds < 100 && milliseconds > 10)
		{
			milliseconds = "0" + milliseconds;
		}
		
		stopwatchHereDiv.innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + "." + milliseconds.toString();
		setTimeout("stopwatchFunction()", 123);
		stopwatchTime.setMilliseconds(stopwatchTime.getMilliseconds() + 123);
	}	
}

function startStopwatch() {
	if(!runStopwatch)
	{
		runStopwatch = true;
		stopwatchFunction();
	}
}

function stopStopwatch() {
	runStopwatch = false;
}

function resetStopwatch() {
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	stopwatchTime = new Date(2015, 12, 11, 0, 0, 0, 0);
	runStopwatch = false;
	stopwatchHereDiv.innerHTML = "00:00:00.000";
}

var hours;
var minutes;
var seconds;
var milliseconds;

var stopwatchTime;
var runStopwatch;
var stopwatchHereDiv = document.getElementById("stopwatchhere");
resetStopwatch();