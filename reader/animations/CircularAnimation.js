function CircularAnimation(id, span, rot) {
    Animation.call(this, id, span, "circular");

    this.rot = rot;
}

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;