function BaseDrawableView() {
	this.get = function(model) {
		var object = {
			"x" : model.x,
			"y" : model.y,
			"w" : model.width,
			"h" : model.height,
			"type" : "image",
			"path" : model.picturePath,
			"needRotate" : false
		};
		if (model.direction != undefined) {
			object.needRotate = true;
			object.angle = model.direction * 1.5707;
		}
		return object;
	}.bind(this);
}