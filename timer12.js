var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    var d = new Date();
    document.getElementById("12hrs").innerHTML = d.toLocaleTimeString();
}
