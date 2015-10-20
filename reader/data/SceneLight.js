/**
 * @param scene The scene to which this light belongs.
 * @param an Shader light array index.
 * @param id Light identification.
 * @constructor SceneGraph lights constructor.
 */
function SceneLight(scene, an, id) {
    CGFlight.call(this, scene, an);
    this.id = id;
}

SceneLight.prototype = Object.create(CGFlight.prototype);
SceneLight.prototype.constructor = SceneLight;