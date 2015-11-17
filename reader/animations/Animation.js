/**
 * Animation constructor.
 * @constructor 
 * @param id The animation id.
 * @param span The animation's span
 * @param type The animation's type (circular/linear)
 */
function Animation(id, span, type) {
    this.id = id;
    this.span = span;
    this.type = type;
}

Animation.prototype.constructor = Animation;

/**
 * Ŕeturns an identity matrix. Template function.
 * @returns {mat4} Identity matrix.
 */
Animation.prototype.calculateMatrix = function() {
    var matrix = mat4.create();
    mat4.identity(matrix);

    return matrix;
}