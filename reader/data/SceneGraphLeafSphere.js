/**
 * @param id {string} Node identification.
 * @param radius {string} Sphere radius.
 * @param slices {number} Number of divisions of each circle of the sphere.
 * @param stacks {number} Number of divisions of the sphere.
 * @constructor SceneGraph sphere leaf constructor.
 */

function SceneGraphLeafSphere(id, radius, slices, stacks) {
    SceneGraphLeaf.call(this, id, "sphere");
    this.radius = radius;
    this.slices = slices;
    this.stacks = stacks;
}

SceneGraphLeafSphere.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafSphere.prototype.constructor = SceneGraphLeafSphere;