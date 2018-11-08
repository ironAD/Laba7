function BaseDrawableView() {
	this.get = function(model) {
		var img = document.createElement("img");
		img.classList.add("drawable-view");
		img.style.width = model.width + "px";
		img.style.height = model.height + "px";
		img.style.left = model.x + "px";
		img.style.top = model.y + "px";
		img.setAttribute("src", model.picturePath);
		if (model.direction !== undefined)
			img.style.transform = "rotate(" + (model.direction * 90) + "deg)";
		return img;
	}.bind(this);
}