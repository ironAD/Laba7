function LevelView() {
	var canvas = document.querySelector("#battlefield");
	this.context = canvas.getContext('2d');
	this.context.fillStyle = "rgb(128, 255, 128)";
	this.clear = function(levelModel) {
		this.context.clearRect(0, 0, levelModel.width, levelModel.height);
		this.context.fillRect(0, 0, levelModel.width, levelModel.height);
	}.bind(this);
	this.appendChild = function(view) {
		if (view.type == "image") {
			var image = new Image();
			image.src = view.path;
			if (view.needRotate) {
				this.context.save();
				this.context.translate(view.x + view.w / 2, view.y + view.h / 2);
				this.context.rotate(view.angle);
				this.context.drawImage(image, - view.w / 2, - view.h / 2, view.w, view.h);
				this.context.restore();
			}
			else {
				this.context.drawImage(image, view.x, view.y, view.w, view.h);
			}
		}
	}.bind(this);
}