/**
 * @param id Node identification
 * @param height Cylinder height
 * @param bottomRadius Cylinder bottom radius
 * @param topRadius Cylinder top radius
 * @param slices Number of divisions of each circle
 * @param stacks Number of divisions of the cylinder
 * @constructor SceneGraph cylinder leaf constructor
 */

function SceneGraphLeafCylinder(id, height, bottomRadius, topRadius, slices, stacks) {
    SceneGraphLeaf.call(this, id, "cylinder");
    this.height = height;
    this.bottomRadius = bottomRadius;
    this.topRadius = topRadius;
    this.slices = slices;
    this.stacks = stacks;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafCylinder;