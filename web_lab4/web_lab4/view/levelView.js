function LevelView() {
	this.scene = document.querySelector("#battlefield");
	this.clear = function() {
		this.scene.innerHTML = "";
	}.bind(this);
	this.appendChild = function(childNode) {
		this.scene.appendChild(childNode);
	}.bind(this);
}