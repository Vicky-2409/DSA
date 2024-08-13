class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(Vertex){
        if(!this.adjacencyList[Vertex]){
            this.adjacencyList[Vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacencyVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex ," -> ",...this.adjacencyList[vertex]);
        }
    }

    hasEdge(vertex1,vertex2){
        return(this.adjacencyList[vertex1].has(vertex2) &&
               this.adjacencyList[vertex2].has(vertex1))
    }

    bfs(start){
        let queue = [start]
        let result = []
        let visited = {}
        let currentVertex ;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            for (let adjacentVertex of this.adjacencyList[currentVertex]){
                if(!visited[adjacentVertex]){
                    visited[adjacentVertex] = true
                    queue.push(adjacentVertex)
                }
            }
        }

        return result
    }

    dfs(start, visited = new Set()){
        visited.add(start)
        let adjacencyList = this.adjacencyList[start]
        for(let adjacentVertex of adjacencyList){
            if(!visited.has(adjacentVertex)){
                visited.add(adjacentVertex)
                this.dfs(adjacentVertex,visited)
            }
        }
        return [...visited]
    }
}

const graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addVertex("H")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("B","E")
graph.addEdge("B","F")
graph.addEdge("C","G")
graph.addEdge("D","H")

console.log(graph.dfs("A"));    

graph.display() 