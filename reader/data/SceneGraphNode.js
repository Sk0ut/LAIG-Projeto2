/**
 * @param id Node identification.
 * @constructor SceneGraph node constructor.
 */
function SceneGraphNode(id) {
    this.id = id;
    this.material = "null";
    this.texture = "clear";
    this.transformationMatrix = mat4.create();
    mat4.identity(this.transformationMatrix);
    this.descendants = [];
}

SceneGraphNode.prototype = Object.create(Object.prototype);
SceneGraphNode.prototype.constructor = SceneGraphNode;

/**
 * Material setter.
 * @param material Material to set.
 */
SceneGraphNode.prototype.setMaterial = function(material) {
    this.material = material;
}

/**
 * Texture setter.
 * @param texture Texture to set.
 */
SceneGraphNode.prototype.setTexture = function(texture) {
     this.texture = texture;
}

/**
 * Adds a descendant to the descendants array.
 * @param descendant Descendant to add.
 */
SceneGraphNode.prototype.addDescendant = function(descendant) {
    this.descendants.push(descendant);
}

/**
 * Applies a rotation to the node around the X axis.
 * @param rad Rotation angle in radians.
 */
SceneGraphNode.prototype.rotateX = function(rad) {
    mat4.rotateX(this.transformationMatrix, this.transformationMatrix, rad);
}

/**
 * Applies a rotation to the node around the Y axis.
 * @param rad Rotation angle in radians.
 */
SceneGraphNode.prototype.rotateY = function(rad) {
    mat4.rotateY(this.transformationMatrix, this.transformationMatrix, rad);
}

/**
 * Applies a rotation to the node around the Z axis.
 * @param rad Rotation angle in radians.
 */
SceneGraphNode.prototype.rotateZ = function(rad) {
    mat4.rotateZ(this.transformationMatrix, this.transformationMatrix, rad);
}

/**
 * Applies scaling to the node.
 * @param sx X scale factor.
 * @param sy Y scale factor.
 * @param sz Z scale factor.
 */
SceneGraphNode.prototype.scale = function(sx, sy, sz) {
    mat4.scale(this.transformationMatrix, this.transformationMatrix, vec3.fromValues(sx,sy,sz));
}

/**
 * Applies a translation to the node.
 * @param x X translation value.
 * @param y Y translation value.
 * @param z Z translation value.
 */

SceneGraphNode.prototype.translate = function(x, y, z) {
    mat4.translate(this.transformationMatrix, this.transformationMatrix, vec3.fromValues(x, y, z));
}
