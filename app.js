var body = document.querySelector("body");

body.onkeydown = function(e){
//     e.keyCode - will capture the key codes
      var KeyNames = keyCodeName(e.keyCode);
 			displayMessage(KeyNames);
   
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

