class Adjelist {
  constructor() {
    this.listItems = {};
  }

  addVertex(vertex) {
    if (!this.listItems[vertex]) {
      this.listItems[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.listItems[v1].push(v2);
    this.listItems[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.listItems[v1] = this.listItems[v1].filter((v) => v !== v2);
    this.listItems[v2] = this.listItems[v2].filter((v) => v !== v1);
  }
}

let graph = new Adjelist();
graph.addVertex("francecisco");
graph.addVertex("Dallas");

graph.addEdge("francecisco", "Dallas");
graph.removeEdge("francecisco", "Dallas");
console.log(graph.listItems);
