function SceneGraphLeafVehicle(id) {
    SceneGraphLeaf.call(this, id, "vehicle");
}

SceneGraphLeafVehicle.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafVehicle.prototype.constructor = SceneGraphLeafVehicle;