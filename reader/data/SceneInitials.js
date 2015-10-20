/**
 * @constructor SceneGraph initials constructor.
 */
function SceneInitials() {
    this.frustum = {near: 0,
                    far: 0};

    this.transformationMatrix = mat4.create();
    mat4.identity(this.transformationMatrix);
    
    this.referenceLength = 0;
};

SceneInitials.prototype = Object.create(Object.prototype);
SceneInitials.prototype.constructor = SceneInitials;