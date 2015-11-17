/**
 * @param scene The scene to which this sphere belongs.
 * @param testureUrl Url of the texture
 * @param heightmapUrl Url of the heightmap texture
 * @constructor MyTerrain constructor.
 */
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

/** 
 * Display function of the scene to render this object.
 */
MyTerrain.prototype.display = function() {
    this.scene.setActiveShader(this.shader);

    this.texture.bind();
    this.heightmap.bind(1);
	
	this.plane.display();

    this.heightmap.unbind(1);
    this.texture.unbind();

	this.scene.setActiveShader(this.scene.defaultShader);
}

/**
 * texCoords scaling.
 * @param ampS Scaling along the S axis.
 * @param ampT Scaling along the T axis.
 */
MyTerrain.prototype.scaleTexCoords = function(ampS, ampT) {}