function SceneGraphLeafPlane(id, parts) {
    SceneGraphLeaf.call(this, id, "plane");
    this.parts = parts;
}

SceneGraphLeafTerrain.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTerrain.prototype.constructor = SceneGraphLeafPlane;