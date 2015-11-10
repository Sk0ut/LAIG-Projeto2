function SceneGraphLeafTerrain(id, texture, heightMap) {
    SceneGraphLeaf.call(this, id, "terrain");
    this.texture = texture;
    this.heightMap = heightMap;
}

SceneGraphLeafTerrain.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTerrain.prototype.constructor = SceneGraphLeafTerrain;