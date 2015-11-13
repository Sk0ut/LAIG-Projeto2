function SceneGraphLeafPlane(id, parts) {
    SceneGraphLeaf.call(this, id, "plane");
    this.parts = parts;
}

SceneGraphLeafPlane.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafPlane.prototype.constructor = SceneGraphLeafPlane;