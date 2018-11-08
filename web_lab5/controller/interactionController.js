function InteractionController() {
	this.model = new InteractionModel();
	this.drop = function() {
		this.model.drop();
	}.bind(this);
	this.pressedMoveButtonId = function() {
		// 0-left 3-bottom
		return this.model.pressedMoveButtonId();
	}.bind(this);
	this.pressButton = function(keyCode) {
		if (keyCode >= 37 && keyCode <= 40) { //arrows
			this.model.pressMoveButton(keyCode - 37);
		} else if (keyCode == 32) { //space
			this.model.pressSpace();
		}
	}.bind(this);
	this.bulletShot = function() {
		return this.model.isSpacePressed();
	}.bind(this);
}