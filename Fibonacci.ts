<!DOCTYPE html>
<html>
<head>
  <script>
  function calculate(x){
    //alert("calculate function called " + x);  
    var Display = document.getElementById("output");
    var Log = document.getElementById("log");
    var first = 1;
    var second = 1;
    var orig = 0;
    Display.innerHTML =first + ", " + second;
    for (i=3; i<=x; i++){
  //  	Log.innerHTML = Log.innerHTML + "<br>Entering Loop:" + i;
  //      Log.innerHTML = Log.innerHTML + "<br>First:"+first+"<br>Second:" +second+ "<br>orig:" +orig;
    	orig = first;
        first = second;
        second = second+orig;
	    Display.innerHTML = Display.innerHTML +", " + second;
        
//        Log.innerHTML = Log.innerHTML + "<br>Exiting Loop:" + i;
//        Log.innerHTML = Log.innerHTML + "<br>First:"+first+"<br>Second:" +second+ "<br>orig:" +orig;
      }
    }
  </script>
</head>
<body>
  <h1> Fibonacci Example </h1>
  <form>
    How many sequences would you like to display?
    <input type="text" name="seq_count"><br>
    <button type="button" onclick="calculate(seq_count.value)">Calculate!</button>
  </form>
  <div id="output">
  </div>
  <div id="log">
  </div>
</body>
</html>
