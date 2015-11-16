/**
 * @param id The animation id.
 * @param span The animation's span
 * @param type The animation's type (circular/linear)
 * @constructor Animation constructor.
 */
function Animation(id, span, type) {
    this.id = id;
    this.span = span;
    this.type = type;
}

Animation.prototype.constructor = Animation;

/**
 * returns an identity matrix.
 */
Animation.prototype.calculateMatrix = function() {
    var matrix = mat4.create();
    mat4.identity(matrix);

    return matrix;
}