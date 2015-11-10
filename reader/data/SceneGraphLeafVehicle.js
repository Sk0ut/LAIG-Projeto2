function SceneGraphLeafVehicle(id) {
    SceneGraphLeaf.call(this, id, "vehicle");
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafVehicle;