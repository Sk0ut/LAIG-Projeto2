function LinearAnimation(id, span, controlPoints) {
    Animation.call(this, id, span, "linear");

    this.controlPoints = controlPoints;
}

LinearAnimation.prototype = Object.create(Animation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

LinearAnimation.prototype.init = function() {
    var vector = vec3.create();
    var distance = 0;

    this.translations = new Array(this.controlPoints.length - 1);
    this.rotations = new Array(this.controlPoints.length - 1);

    for (var i = 1; i < this.controlPoints.length; ++i) {
        vec3.sub(vector, this.controlPoints[i], this.controlPoints[i - 1]);
        this.translations[i - 1] = vector;

        var projectionXZ = vec3.fromValues(vector[0], 0, vector[2]);

        this.rotations[i - 1] = projectionXZ[0] / Math.abs(projectionXZ[0]) *
                                Math.acos(vec3.dot(projectionXZ, vec3.fromValues(0, 0, 1))/
                                          vec3.length(projectionXZ));

        distance += vec3.length(vector);
    }

    var velocity = distance / span;

    this.controlPointsTime = new Array(controlPoints.length);
    controlPoints[0] = 0;

    for (var i = 1; i < this.controlPoints.length; ++i) {    
        this.controlPointsTime[i] = controlPointsTime[i - 1] +
                               vec3.length(this.translations[i-1]) / velocity; 
    }
}

LinearAnimation.prototype.calculateMatrix = function(t) {
    var matrix = mat4.create();
    mat4.identity(matrix);

    var index;

    for (index = length - 1; index >= 0; --index)
        if (this.controlPointsTime[index] < t)
            break;

    var translation = this.controlPoints[index] + this.translations[index]
                                                 * (t - this.controlPointsTime[index]) /
                                                 (this.controlPointsTime[index + 1] - this.controlPointsTime[index]);
}