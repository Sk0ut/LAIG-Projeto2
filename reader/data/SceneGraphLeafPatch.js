/**
 * @param id Node identification
 * @param order Patch curves degree
 * @param partsU Divisions across the U axis
 * @param partsV Divisions across the V axis
 * @param controlPoints Array of 3D coordinates for the NURBS controlPoints
 * @constructor SceneGraph patch leaf constructor
 */
function SceneGraphLeafPatch(id, order, partsU, partsV, controlPoints) {
    SceneGraphLeaf.call(this, id, "patch");
    this.order = order;
    this.partsU = partsU;
    this.partsV = partsV;
    this.controlPoints = controlPoints;
}

SceneGraphLeafPatch.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafPatch.prototype.constructor = SceneGraphLeafPatch;