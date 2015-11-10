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
    this.controlPointsTime[0] = 0;

    this.controlPointsSpan = new Array(this.controlPoints.length - 1);

    for (var i = 1; i < this.controlPoints.length; ++i) {    
        this.controlPointsTime[i] = controlPointsTime[i - 1] +
                               vec3.length(this.translations[i-1]) / velocity;
        this.controlPointsSpan[i-1] = this.controlPointsTime[i] - this.controlPointsTime[i-1]; 
    }
}

LinearAnimation.prototype.calculateMatrix = function(t) {
    t = Math.min(Math.max(t, 0), this.span);
   
    var index;
    for (index = length - 1; index > 0; --index)
        if (this.controlPointsTime[index] < t)
            break;
    
    var matrix = mat4.create();
    mat4.identity(matrix);

    var tScale = (t - this.controlPointsTime[index]) / this.controlPointsSpan[index];
    var position = vec3.clone(this.controlPoints[index]);
    var translation_amount = vec3.create();
    vec3.scale(translation_amount, this.translations[index], vec3.fromValues(tScale, tScale, tScale));
    vec3.translate(position, position, translation_amount); 

    mat4.rotateY(matrix,matrix,this.rotations[index]);
    mat4.translate(matrix, matrix, position);

    return matrix;
}