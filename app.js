//find the body tag and store it in a variable called 'body'

var body = document.querySelector("body");

//listen for the keydown event
body.onkeydown = function(e){

//     e.keyCode - will capture the key codes
      var KeyNames = keyCodeName(e.num);
      	// var locationClass = createLocationClass(e.num);
 			displayMessage(taxiLocationCounter);
 				moveForward();
};

		var taxiLocationCounter = 1;
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
	 else if (num === 2) {
		return "slot-two-of-nine";
	}
	   else if (num === 3) {
			return "slot-three-of-nine";
		}
			else if (num === 4) {
				return "slot-four-of-nine";
			}
				else if (num === 5) {
					return "slot-five-of-nine";
				}
					else if (num === 6) {
						return "slot-six-of-nine";
					}
						else if (num === 7) {
							return "slot-seven-of-nine";
						}
							else if (num === 8) {
								return "slot-eight-of-nine";
							}
								else if (num === 9) {
									return "slot-nine-of-nine";
									}
};

function moveForward() {
	var currentLocation = createLocationClass(taxiLocationCounter);
		var newLocation = createLocationClass(taxiLocationCounter);
			moveTaxi(currentLocation, newLocation);
}




