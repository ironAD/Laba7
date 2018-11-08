function LevelController() {
	this.view = new LevelView();
	this.model = new LevelModel();
	this.interactionController = new InteractionController();
	this.addBullet = function(bulletController) {
		this.model.addBullet(bulletController);
	}.bind(this);
	this.addPanzer = function(panzerController) {
		this.model.addPanzer(panzerController);
	}.bind(this);

	// init
	this.init = function() {
		var playerController = new PanzerController();
		playerController.setIsHero(true);
		this.addPanzer(playerController);

		var enemyPanzer = new PanzerController();
		enemyPanzer.setPosition(100, 200);
		this.addPanzer(enemyPanzer);

		enemyPanzer = new PanzerController();
		enemyPanzer.setPosition(400, 340);
		enemyPanzer.setDirection(1);
		this.addPanzer(enemyPanzer);

	}.bind(this);
	//
	this.processKeyDown = function(event) {
		this.interactionController.pressButton(event.keyCode);
	}.bind(this);
	//
	this.dropKeys = function() {
		this.interactionController.drop();
	}.bind(this);
	//
	this.updateScene = function() {
		if (this.model.playerController) {
			var bullet = this.model.playerController.bulletShot(this.interactionController);
			if (bullet) {
				this.addBullet(bullet);
			}
		}
		for (var i = 0; i < this.model.panzerControllers.length; i++) {
			this.model.panzerControllers[i].updateWithLevelModel(this.model, this.interactionController);
		}
		for (var i = 0; i < this.model.bulletControllers.length; i++) {
			this.model.bulletControllers[i].updateWithLevelModel(this.model);
		}
	}.bind(this);
	//
	this.drawScene = function() {
		var context = this.view;
		context.clear();
		for (var i = 0; i < this.model.panzerControllers.length; i++) {
			this.model.panzerControllers[i].drawPanzer(context);
		}
		for (var i = 0; i < this.model.bulletControllers.length; i++) {
			this.model.bulletControllers[i].drawBullet(context);
		}
	}.bind(this);
	//
	this.processCollisions = function() {
		this.model.processCollisions();
	}.bind(this);
}

var levelController;

document.addEventListener("DOMContentLoaded", function() {
	levelController = new LevelController();
	levelController.init();
	document.addEventListener("keydown", levelController.processKeyDown);
	loop();
});

function loop() {
	levelController.updateScene();
	levelController.processCollisions();
	levelController.drawScene();
	levelController.dropKeys();
	setTimeout(loop, 50);
}