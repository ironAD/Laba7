function BulletModel(panzerModel) {
	this.width = 16;
	this.height = 16;
	this.calculatePositions = function(panzerModel) {
		var xCenterOfPanzer = panzerModel.x + panzerModel.width / 2;
		var yCenterOfPanzer = panzerModel.y + panzerModel.height / 2;
		var xNew = xCenterOfPanzer - this.width / 2;
		var yNew = yCenterOfPanzer - this.height / 2;
		this.x = xNew;
		this.y = yNew;
	}.bind(this);
	this.calculatePositions(panzerModel);
	this.active = false;
	this.picturePath = "data/bullet.png";
	this.flightDirection = panzerModel.direction;
	this.flightSpeed = 20;
	this.updateWithLevelModel = function(levelModel) {
		switch (this.flightDirection) {
			case 0:
				this.x -= this.flightSpeed;
				break;
			case 1:
				this.y -= this.flightSpeed;
				break;
			case 2:
				this.x += this.flightSpeed;
				break;
			case 3:
				this.y += this.flightSpeed;
				break;
		}
		if (this.x < 0 || this.y < 0) {
			return false;
		}
		if (this.x + this.width > levelModel.width || this.y + this.height > levelModel.height) {
			return false;
		}
		return true;
		// true if inside level zone, else if outside
	}.bind(this);
	this.intersectPanzer = function(panzerModel) {
		var corners = [{"x" : this.x, "y" : this.y}, 
					   {"x" : this.x + this.width, "y" : this.y}, 
					   {"x" : this.x, "y" : this.y + this.height}, 
					   {"x" : this.x + this.width, "y" : this.y + this.height}];
		var x = panzerModel.x;
		var y = panzerModel.y;
		var xwidth = panzerModel.x + panzerModel.width;
		var yheight = panzerModel.y + panzerModel.height;
		for (var i = 0; i < 4; i++) {
			var corner = corners[i];
			if (corner.x >= x && corner.x <= xwidth && corner.y >= y && corner.y <= yheight) {
				return true;
			}
		}
		return false;
	}.bind(this);
}