/**
 * @param id Node identification
 * @param textureUrl Url for the terrain texture
 * @param heightmapUrl Url for the terrain heightmap
 * @constructor SceneGraph terrain leaf constructor
 */
function SceneGraphLeafTerrain(id, textureUrl, heightmapUrl) {
    SceneGraphLeaf.call(this, id, "terrain");
    this.textureUrl = textureUrl;
    this.heightmapUrl = heightmapUrl;
}

SceneGraphLeafTerrain.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTerrain.prototype.constructor = SceneGraphLeafTerrain;