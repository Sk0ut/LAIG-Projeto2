/**
 * @param id Node identification.
 * @param radius Sphere radius.
 * @param slices Number of divisions of each circle of the sphere.
 * @param stacks Number of divisions of the sphere.
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