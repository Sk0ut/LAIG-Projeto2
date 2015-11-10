function CircularAnimation(id, span, center, startAngle, rotAngle, radius) {
    Animation.call(this, id, span, "circular");
    this.id = id;
    this.span = span;
    this.center = center;
    this.startAngle = startAngle;
    this.rotAngle = rotAngle;
    this.radius = radius;
}

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;

CircularAnimation.prototype.init = function() {
	var x = this.center.x + Math.cos(this.startAngle+Math.PI/2)*this.radius;
	var y = this.center.y;
	var z = this.center.z + Math.sin(this.startAngle+Math.PI/2)*this.radius;

	var translationVector = vec3.fromValues(x,y,z);

	this.initialTranslation = mat4.create;
	mat4.identity(this.initialTranslation);
	mat4.translate(this.initialTranslation, this.initialTranslation, translationVector);
}

CircularAnimation.prototype.calculateMatrix = function(t) {
	var matrix = mat4.create();
	mat4.identity(matrix);

	var reverseCenter = vec3.clone(this.center);
	vec3.scale(reverseCenter, reverseCenter, vec3.fromValues(-1,-1,-1));
	mat4.translate(matrix, matrix, reverseCenter);

	var rot = this.rotAngle * (this.t / this.span);
	mat4.rotateY(matrix, matrix, rot);

	mat4.translate(matrix, matrix, center);

	mat4.multiply(matrix, matrix, this.initialTranslation);

	return matrix;
}