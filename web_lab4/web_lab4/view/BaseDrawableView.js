function BaseDrawableView() {
	this.svgNS = "http://www.w3.org/2000/svg";
	this.svgLink = "http://www.w3.org/1999/xlink";
	this.get = function(model) {
		var img = document.createElementNS(this.svgNS, "image");
		img.setAttributeNS(null, "x", model.x);
		img.setAttributeNS(null, "y", model.y);
		img.setAttributeNS(null, "width", model.width);
		img.setAttributeNS(null, "height", model.height);
		img.setAttributeNS(this.svgLink, "href", model.picturePath);
		if (model.direction !== undefined)
			img.setAttributeNS(null, "transform", "rotate(" + (model.direction * 90) + ", " + (model.x + model.width / 2)+ ", " + (model.y + model.height / 2) + ")");
		return img;
	}.bind(this);
}