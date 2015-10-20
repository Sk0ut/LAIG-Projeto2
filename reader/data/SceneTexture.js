/**
 * @param scene The scene to which this texture belongs.
 * @param url Path to the texture image.
 * @param id Texture identification.
 * @constructor SceneGraph texture constructor.
 */
function SceneTexture(scene, url, id) {
    CGFtexture.call(this, scene, url);
    this.id = id;
    this.amplifyFactor = {s: 1,
                          t: 1};
};

SceneTexture.prototype = Object.create(CGFtexture.prototype);
SceneTexture.prototype.constructor = SceneTexture;

/**
 * AmplifyFactor setter.
 * @param s S value to set.
 * @param t T value to set.
 */
SceneTexture.prototype.setAmplifyFactor = function(s, t) {
    this.amplifyFactor.s = s;
    this.amplifyFactor.t = t;
}