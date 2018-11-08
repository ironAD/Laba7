function BulletController(panzerModel) {
	this.view = new BaseDrawableView();
	this.model = new BulletModel(panzerModel);
	this.isActive = true;
	this.drawBullet = function(context) {
		if (this.active())
			context.appendChild(this.view.get(this.model));
	}.bind(this);
	this.updateWithLevelModel = function(levelModel) {
		if (!this.active())
			return;
		var outside = !this.model.updateWithLevelModel(levelModel);
		if (outside) {
			this.deactivate();
		}
	}.bind(this);
	this.deactivate = function() {
		this.isActive = false;
	}.bind(this);
	this.active = function() {
		return this.isActive;
	}.bind(this);
	this.processCollisionWithPanzer = function(panzerController) {
		if (this.active() && panzerController.active() && !panzerController.isHero()) {
			if (this.model.intersectPanzer(panzerController.model)) {
				this.deactivate();
			}
		}
	}.bind(this);
}