function SceneGraphLeafPatch(id, order, partsU, partsV) {
    SceneGraphLeaf.call(this, id, "patch");
    this.order = order;
    this.partsU = partsU;
    this.partsV = partsV;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafPatch;