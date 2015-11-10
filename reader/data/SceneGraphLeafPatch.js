function SceneGraphLeafPatch(id, order, partsU, partsV, controlPoints) {
    SceneGraphLeaf.call(this, id, "patch");
    this.order = order;
    this.partsU = partsU;
    this.partsV = partsV;
    this.controlPoints = controlPoints;
}

SceneGraphLeafPatch.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafPatch.prototype.constructor = SceneGraphLeafPatch;