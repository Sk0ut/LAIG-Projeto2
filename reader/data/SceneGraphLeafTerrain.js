function SceneGraphLeafTerrain(id, texture, heightMap) {
    SceneGraphLeaf.call(this, id, "terrain");
    this.texture = texture;
    this.heightMap = heightMap;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafTerrain;