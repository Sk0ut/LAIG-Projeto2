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
	this.initialTranslation = vec4.create();
	vec4.identity(this.initialTranslation);
	vec4.translate(this.initialTranslation,this.initialTranslation, this.center);
	vec4.rotateY(this.initialTranslation, this.initialTranslation, this.startAngle);
	vec4.translate(this.initialTranslation, this.initialTranslation,
				   vec3.fromValues(0, 0, this.radius));
}

CircularAnimation.prototype.calculateMatrix = function(t) {
	var matrix = mat4.create();
	mat4.identity(matrix);

	mat4.translate(matrix, matrix, center);

	var rot = this.rotAngle * (this.t / this.span);
	mat4.rotateY(matrix, matrix, rot);

	var reverseCenter = vec3.clone(this.center);
	vec3.scale(reverseCenter, reverseCenter, vec3.fromValues(-1,-1,-1));
	mat4.translate(matrix, matrix, reverseCenter);

	mat4.multiply(matrix, matrix, this.initialTranslation);

	return matrix;
}