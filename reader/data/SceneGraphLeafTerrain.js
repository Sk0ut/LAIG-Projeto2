function SceneGraphLeafTerrain(id, textureUrl, heightmapUrl) {
    SceneGraphLeaf.call(this, id, "terrain");
    this.textureUrl = textureUrl;
    this.heightmapUrl = heightmapUrl;
}

SceneGraphLeafTerrain.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTerrain.prototype.constructor = SceneGraphLeafTerrain;