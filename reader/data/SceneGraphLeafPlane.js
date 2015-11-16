/**
 * @param id Node identification
 * @param partsV Divisions across the U and V axis
 * @constructor SceneGraph plane leaf constructor
 */
function SceneGraphLeafPlane(id, parts) {
    SceneGraphLeaf.call(this, id, "plane");
    this.parts = parts;
}

SceneGraphLeafPlane.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafPlane.prototype.constructor = SceneGraphLeafPlane;