/**
 * @param id Node identification
 * @param v1x X Coordinate of top-left point
 * @param v1y Y Coordinate of top-left point
 * @param v2x X Coordinate of bottom-right point
 * @param v2y Y Coordinate of bottom-right point
 * @constructor SceneGraph rectangle leaf constructor
 */
function SceneGraphLeafRectangle(id, v1x, v1y, v2x, v2y) {
    SceneGraphLeaf.call(this, id, "rectangle");
    this.v1x = v1x;
    this.v1y = v1y;
    this.v2x = v2x;
    this.v2y = v2y;
}

SceneGraphLeaf.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;