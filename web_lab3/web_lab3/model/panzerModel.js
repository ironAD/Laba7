function PanzerModel() {
	this.x = 0;
	this.y = 0;
	this.width = 64;
	this.height = 64;
	this.picturePath = "data/panzer1.png";
	this.isHero = false;
	this.step = 10;
	this.direction = 0;
	this.active = true;
	this.updateWithLevelModel = function(levelModel, interactionController) {
		if (this.isHero) {
			var direction = interactionController.pressedMoveButtonId();
			if (direction != -1) {
				switch (direction) {
					case 0:
						this.x -= this.step;
						break;
					case 1:
						this.y -= this.step;
						break;
					case 2:
						this.x += this.step;
						break;
					case 3:
						this.y += this.step;
						break;
				}
				this.direction = direction;
			}
		}
		if (this.x < 0)
				this.x = 0;
		if (this.x + this.width > levelModel.width)
			this.x = levelModel.width - this.width;

		if (this.y < 0)
			this.y = 0;
		if (this.y + this.height > levelModel.height)
			this.y = levelModel.height - this.height;

	}.bind(this);
}