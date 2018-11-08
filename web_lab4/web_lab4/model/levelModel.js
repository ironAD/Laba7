function LevelModel() {
	this.playerController;
	this.panzerControllers = [];
	this.bulletControllers = [];
	this.width = 800;
	this.height = 600;
	this.addBullet = function(bulletController) {
		this.bulletControllers.push(bulletController);
	}.bind(this);
	this.addPanzer = function(panzerController) {
		this.panzerControllers.push(panzerController);
		if (panzerController.isHero()) 
			this.playerController = panzerController;
	}.bind(this);
	this.removeBullet = function(bulletController) {
		var index = -1;
		for (var i = 0; i < this.bulletControllers.length; i++) {
			if (this.bulletControllers[i] === bulletController) {
				index = i;
				break;
			}
		}
		if (index != -1)
			this.bulletControllers.slice(i, 1);
	}.bind(this);
	this.removePanzer = function(panzerController) {
		var index = -1;
		for (var i = 0; i < this.panzerControllers.length; i++) {
			if (this.panzerControllers[i] === panzerController) {
				index = i;
				break;
			}
		}
		if (index != -1) {
			if (panzerController.isHero)
				this.playerController = undefined;
			this.panzerControllers.slice(i, 1);
		}
	}.bind(this);
	this.processCollisions = function() {
		for (var i = 0; i < this.bulletControllers.length; i++) {
			var bullet = this.bulletControllers[i];
			for (var j = 0; j < this.panzerControllers.length; j++) {
				var panzer = this.panzerControllers[j];
				bullet.processCollisionWithPanzer(panzer);
			}
		}
	}.bind(this);

}