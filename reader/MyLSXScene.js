/**
 * @constructor MyLSXScene constructor.
 */
function MyLSXScene() {
    CGFscene.call(this);
}

MyLSXScene.prototype = Object.create(CGFscene.prototype);
MyLSXScene.prototype.constructor = MyLSXScene;

/**
 * Initializes the scene.
 * @param application Application this scene belongs to.
 */
MyLSXScene.prototype.init = function (application) {
    CGFscene.prototype.init.call(this, application);

    this.myinterface = null;
    this.graph = null;

    this.initCameras();

    this.initLights();

    this.initObjects();

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.enableTextures(true);
};

/**
 * Interface setter.
 * @param myinterface Interface to set.
 */
MyLSXScene.prototype.setInterface = function(myinterface) {
	this.myinterface = myinterface;
}

/**
 * Initializes scene objects.
 */
MyLSXScene.prototype.initObjects = function() {
	this.primitives = [];
}

/**
 * Initializes scene lights.
 */
MyLSXScene.prototype.initLights = function () {
	this.lightsEnabled = [];
};

/**
 * Initializes scene cameras.
 */
MyLSXScene.prototype.initCameras = function () {
    this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
};

/**
 * Applies the default appearance to the scene.
 */
MyLSXScene.prototype.setDefaultAppearance = function () {
    this.setAmbient(0.2, 0.2, 0.2, 1.0);
    this.setDiffuse(0.4, 0.4, 0.4, 1.0);
    this.setSpecular(0.2, 0.2, 0.2, 1.0);
    this.setShininess(10.0);	
};

/**
 * Handler called when the graph is finally loaded.
 * As loading is asynchronous, this may be called already after the application has started the run loop
 */
MyLSXScene.prototype.onGraphLoaded = function () 
{
	this.camera.near = this.graph.initials.frustum.near;
	this.camera.far = this.graph.initials.frustum.far;

    if (this.graph.initials.referenceLength > 0)
	   this.axis = new CGFaxis(this, this.graph.initials.referenceLength);
	   
	this.gl.clearColor(this.graph.illumination.background[0],this.graph.illumination.background[1],this.graph.illumination.background[2],this.graph.illumination.background[3]);
	this.setGlobalAmbientLight(this.graph.illumination.ambient[0],this.graph.illumination.ambient[1],this.graph.illumination.ambient[2],this.graph.illumination.ambient[3]);

	this.lights = [];

    for (var i = 0; i < this.graph.lights.length; ++i) {
    	this.lights.push(this.graph.lights[i]);
    	this.lights[i].setVisible(true);
    	this.lightsEnabled[this.lights[i].id] = this.lights[i].enabled;
    }

	if (this.myinterface != null)
	    this.myinterface.onGraphLoaded();

    for (key in this.graph.leaves) {
    	var leaf = this.graph.leaves[key];
    	switch (leaf.type) {
    		case "rectangle":
    			this.primitives[key] = new MyRectangle(this, leaf.v1x, leaf.v1y, leaf.v2x, leaf.v2y);
    			break;
    		case "triangle":
    			this.primitives[key] = new MyTriangle(this, leaf.v1[0], leaf.v1[1], leaf.v1[2], leaf.v2[0], leaf.v2[1], leaf.v2[2], leaf.v3[0], leaf.v3[1], leaf.v3[2]);
    			break;
    		case "cylinder":
				this.primitives[key] = new MyCylinder(this, leaf.height, leaf.bottomRadius, leaf.topRadius, leaf.slices, leaf.stacks);
				break;
			case "sphere":
				this.primitives[key] = new MySphere(this, leaf.radius, leaf.slices, leaf.stacks);
				break;
    	}
    }
};

/**
 * Display the scene elements.
 */
MyLSXScene.prototype.display = function () {
	// ---- BEGIN Background, camera and axis setup
    this.shader.bind();
	
	// Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation
	this.updateProjectionMatrix();
    this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();
	
	// ---- END Background, camera and axis setup

	// it is important that things depending on the proper loading of the graph
	// only get executed after the graph has loaded correctly.
	// This is one possible way to do it
	if (this.graph != null && this.graph.loadedOk)
	{	
		this.multMatrix(this.graph.initials.transformationMatrix);
	
		for (var i = 0; i < this.lights.length; ++i)
			this.lights[i].update();

		this.setDefaultAppearance();
		// Draw axis
		if (this.axis)
	   		this.axis.display();

	   	// Draw objects
		this.setDefaultAppearance();

		this.drawSceneGraph();
	}	

    this.shader.unbind();
};

/**
 * Draws the scene elements represented in the SceneGraph.
 */
MyLSXScene.prototype.drawSceneGraph = function() {
	this.drawNode(this.graph.root, "null", "clear");
	this.setDefaultAppearance();
}

/**
 * Draws the nodes represented in the SceneGraph.
 * @param node Node to draw.
 * @param parentMaterial Parent node's material.
 * @param parentTexture Parent texture's material.
 */
MyLSXScene.prototype.drawNode = function(node, parentMaterial, parentTexture) {
	if (node in this.primitives) {
		if (parentMaterial != "null")
			this.graph.materials[parentMaterial].apply();
		else
			this.setDefaultAppearance();
	
		var texture;

		if (parentTexture != "clear")
		{
			texture = this.graph.textures[parentTexture];
			this.primitives[node].scaleTexCoords(texture.amplifyFactor.s, texture.amplifyFactor.t);
			texture.bind();
		}
					
		this.primitives[node].display();

		if (texture)
			texture.unbind();
		return;
	}

	this.pushMatrix();
	
	this.multMatrix(this.graph.nodes[node].transformationMatrix);

	var material = this.graph.nodes[node].material;
	if (material == "null")
		material = parentMaterial;

	var texture = this.graph.nodes[node].texture;
	if (texture == "null")
		texture = parentTexture;

	var descendants = this.graph.nodes[node].descendants;
	for (var i = 0; i < descendants.length; ++i) {
		this.drawNode(descendants[i], material, texture);
	}

	this.popMatrix();
}

/**
 * Updates the scene's lights.
 * @param lightId Identification of the light to update.
 * @param enable Whether the light is enabled or not.
 */
MyLSXScene.prototype.updateLight = function(lightId, enable) {
	for (var i = 0; i < this.lights.length; ++i) {
		if (this.lights[i].id == lightId) {
			var light = this.lights[i];
			enable ? light.enable() : light.disable();
			return;
		}
	}
}