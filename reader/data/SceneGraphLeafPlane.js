function SceneGraphLeafPlane(id, parts) {
    SceneGraphLeaf.call(this, id, "plane");
    this.parts = parts;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafPlane;