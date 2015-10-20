function MyDiamond(scene,slices){
    CGFobject.call(this,scene);

    this.scene = scene;
    this.slices = slices;
    this.initBuffers();
}

MyDiamond.prototype = Object.create(CGFobject.prototype);

MyDiamond.prototype.constructor = MyDiamond;

MyDiamond.prototype.initBuffers = function() {
    
    this.vertices = [];
    this.triangles = [];

    for(var i = 0; i < this.slices; ++i){
        this.vertices.push(0.5*Math.cos(i*angulo),0,0.5*Math.sin(slice*angulo));
    }

    this.vertices.push(0,1,0);
    this.vertices.push(0,-1,0)

    for(var i = 0; i < this.slices;++i){
        this.triangles.push(new MyTriangle(this.scene,this.vertices[i%this.slices],
                                                      this.vertices[(i+1)%this.slices],
                                                      this.vertices[this.vertices.length-1]));
        this.triangles.push(new MyTriangle(this.scene,this.vertices[i%this.slices],
                                                      this.vertices[(i+1)%this.slices],
                                                      this.vertices[this.vertices.length-2]));
    }

    for(var i = 0; i < this.triangles.length;++i){
        this.triangles[i].display();
    }

}