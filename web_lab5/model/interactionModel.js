function InteractionModel() {
	this.pressedMoveButton = -1;
	this.spacePressed = false;
	this.drop = function() {
		this.pressedMoveButton = -1;
		this.spacePressed = false;
	}.bind(this);
	this.pressMoveButton = function(id) {
		this.pressedMoveButton = id;
	}.bind(this);
	this.pressedMoveButtonId = function() {
		return this.pressedMoveButton;
	}.bind(this);
	this.pressSpace = function() {
		this.spacePressed = true;
	}.bind(this);
	this.isSpacePressed = function() {
		return this.spacePressed;
	}.bind(this);
}