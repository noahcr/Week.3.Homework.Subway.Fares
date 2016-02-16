var userRides;
var fare;
var cost;

function myMTA(){
	userRides = document.getElementById("rides").value;
	fare = 2.75;
	cost = userRides * fare;
	
tellMe();

}

function tellMe(){

	if (cost > 116.5){
		alert("Definitely Buy An Unlimited Card!");
	}
		else{
			alert("Nah, don't bother.");
		}
	
}