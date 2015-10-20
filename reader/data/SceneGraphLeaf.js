/**
 * @param id Node identification
 * @param type Type of primitive
 * @constructor SceneGraph leaf constructor
 */

function SceneGraphLeaf(id, type) {
    this.id = id;
    this.type = type;
}

SceneGraphLeaf.prototype = Object.create(Object.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;