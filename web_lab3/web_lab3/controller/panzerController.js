function PanzerController() {
	this.view = new BaseDrawableView();
	this.model = new PanzerModel();
	this.isActive = true;
	//
	this.drawPanzer = function(context) {
		if (this.active())
			context.appendChild(this.view.get(this.model));
	}.bind(this);
	this.updateWithLevelModel = function(levelModel, interactionController) {
		if (!this.active())
			return;
		this.model.updateWithLevelModel(levelModel, interactionController);
	}.bind(this);
	//
	this.bulletShot = function(interactionController) {
		if (!this.active())
			return;
		if (interactionController.bulletShot()) {
			var bullet = new BulletController(this.model);
			return bullet;
		}
		return undefined;
	}.bind(this);
	//
	this.setIsHero = function(isHero) {
		this.model.isHero = isHero;
	}.bind(this);
	//
	this.isHero = function() {
		return this.model.isHero;
	}.bind(this);
	//
	this.deactivate = function() {
		this.isActive = false;
	}.bind(this);
	this.active = function() {
		return this.isActive;
	}.bind(this);
	this.setPosition = function(x, y) {
		this.model.x = x;
		this.model.y = y;
	}.bind(this);
	this.setDirection = function(dir) {
		this.model.direction = dir;
	}.bind(this);
	//
}