var body = document.querySelector("body");

body.onkeydown = function(e){
//     e.keyCode - will capture the key codes
      var KeyNames = keyCodeName(e.keyCode);
 			displayMessage(taxiLocationCounter);
};

		var taxiLocationCounter = 0;
			taxiLocationCounter++;


var keyCodeName = function(keycode) {
	if(keycode === 39) {
		return "right";
	   }
	if(keycode === 37) {
		return "left";
	   }
	if(keycode === 38) {
		return "up";
	   }
	if(keycode === 40) {
		return "down";
	   }
	else {
	    return "";
	   }
};

function createLocationClass(num) {
if (num === 1) {
	return "slot-one-of-nine";
}

};



