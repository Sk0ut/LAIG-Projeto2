function MyPlane(scene, parts){
	var nurbsSurface = new CGFnurbsSurface(1, 1, [0,0,1,1], [0,0,1,1], [[[0.5,0,-0.5,1],[0.5,0,0.5,1]], [[-0.5,0,-0.5,1], [-0.5,0,0.5,1]]]);
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

    CGFnurbsObject.call(this,scene, getSurfacePoint, parts, parts);
    this.fixTexCoords();
}

MyPlane.prototype = Object.create(CGFnurbsObject.prototype);
MyPlane.prototype.constructor = MyPlane;

MyPlane.prototype.fixTexCoords = function() {
	for (var i = 0; i < this.texCoords.length; i += 2)
		this.texCoords[i] = 1 - this.texCoords[i];

	this.initGLBuffers();
}

MyPlane.prototype.scaleTexCoords = function(ampS, ampT) {}