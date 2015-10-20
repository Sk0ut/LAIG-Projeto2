/**
 * @param id Node identification
 * @param v1x First point x coordinate
 * @param v1y First point y coordinate
 * @param v1z First point z coordinate
 * @param v2x Second point x coordinate
 * @param v2y Second point y coordinate
 * @param v2z Second point z coordinate
 * @param v3x Third point x coordinate
 * @param v3y Third point y coordinate
 * @param v3z Third point z coordinate
 * @constructor SceneGraph triangle leaf constructor
 */
function SceneGraphLeafTriangle(id, v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z) {
    SceneGraphLeaf.call(this, id, "triangle");
    this.v1 = vec3.fromValues(v1x, v1y, v1z);
    this.v2 = vec3.fromValues(v2x, v2y, v2z);
    this.v3 = vec3.fromValues(v3x, v3y, v3z);
}

SceneGraphLeafTriangle.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTriangle.prototype.constructor = SceneGraphLeafTriangle;