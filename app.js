//find the body tag and store it in a variable called 'body'

var body = document.querySelector("body");
var taxiLocationCounter = 1;
//listen for the keydown event
body.onkeydown = function(e){

//     e.keyCode - will capture the key codes
      var KeyNames = keyCodeName(e.keyCode);
      	var locationClass = createLocationClass(taxiLocationCounter);
      	var trafficLight = new TrafficLight(taxiLocationCounter); {
      		if(e.keyCode === 38) {
      			trafficLight.makeRed();
      		}
      		else if(e.keyCode === 40) {
      			trafficLight.makeGreen();
      		}
      	};
 			
 				taxiLocationCounter++;
 					if(KeyNames === "left") {
 						moveBackward();
 					}
 				 		else if(KeyNames === "right") {
 				 			moveForward();
 				 		}
 displayMessage(locationClass);
};

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

function createTrafficLightClass(nmbr) {
if (nmbr === 1) {
	return ".one-of-nine";
}
	 else if (nmbr === 2) {
		return ".two-of-nine";
	}
	   else if (nmbr === 3) {
			return ".three-of-nine";
		}
			else if (nmbr === 4) {
				return ".four-of-nine";
			}
				else if (nmbr === 5) {
					return ".five-of-nine";
				}
					else if (nmbr === 6) {
						return ".six-of-nine";
					}
						else if (nmbr === 7) {
							return ".seven-of-nine";
						}
							else if (nmbr === 8) {
								return ".eight-of-nine";
							}
								else if(nmbr === 9) {
									return ".nine-of-nine";
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
								else if(num === 9) {
									return "slot-nine-of-nine";
									}
};

 function moveForward() {
 	var currentLocation = createLocationClass(taxiLocationCounter);
 			taxiLocationCounter ++;
 		var newLocation = createLocationClass(taxiLocationCounter);
 				taxiLocationCounter --;
 			moveTaxi(currentLocation, newLocation)
};

	function moveBackward() {
		var currentLocation = createLocationClass(taxiLocationCounter);
 			taxiLocationCounter --;
 		var newLocation = createLocationClass(taxiLocationCounter);
 				taxiLocationCounter --;
 			moveTaxi(currentLocation, newLocation)
	} 


function TrafficLight(x) {

   var className = createTrafficLightClass(x);
   var trafficLightElement = document.querySelector(className);

	this.makeGreen = function() {
		trafficLightElement.classList.add("lights-go");
		trafficLightElement.classList.remove("lights-slowdown");
		trafficLightElement.classList.remove("lights-stop");
		
	}
	this.makeOrange = function() {
		trafficLightElement.classList.remove("lights-stop");
		trafficLightElement.classList.remove("lights-go");
		trafficLightElement.classList.add("lights-slowdown");
	}	
	this.makeRed = function() {
		trafficLightElement.classList.remove("lights-go");
		trafficLightElement.classList.remove("lights-slowdown");
		trafficLightElement.classList.add("lights-stop");
	}
	this.color = function() {
		if (trafficLightElement.classList.contains("lights-go")){
    return 'green';
		}
		else if (trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
		}
		else if (trafficLightElement.classList.contains("lights-stop")){
    return 'red';
		}
};
};



 // var red = new TrafficLight('lights-stop');
 // var orange = new TrafficLight('lights-slowdown');
 // var green = new TrafficLight('lights-go');






