/**
 * @param scene The scene to which this material belongs.
 * @param id Material identification.
 * @constructor SceneGraph material constructor.
 */
function SceneMaterial(scene, id) {
    CGFappearance.call(this, scene);
    this.id = id;
}

SceneMaterial.prototype = Object.create(CGFappearance.prototype);
SceneMaterial.prototype.constructor = SceneMaterial;