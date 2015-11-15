function MyTerrain(scene, textureUrl, heightmapUrl){
    CGFobject.call(this,scene);

	this.plane = new MyPlane(this.scene, 100);
	this.texture = new CGFtexture(this.scene, textureUrl);
	this.heightmap = new CGFtexture(this.scene, heightmapUrl);
	this.shader = new CGFshader(this.scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
    this.shader.setUniformsValues({uSampler2: 1});
}

MyTerrain.prototype = Object.create(CGFobject.prototype);
MyTerrain.prototype.constructor = MyTerrain;

MyTerrain.prototype.display = function() {
    this.scene.setActiveShader(this.shader);

    this.texture.bind();
    this.heightmap.bind(1);
	
	this.plane.display();

    this.heightmap.unbind(1);
    this.texture.unbind();

	this.scene.setActiveShader(this.scene.defaultShader);
}

MyTerrain.prototype.scaleTexCoords = function(ampS, ampT) {}