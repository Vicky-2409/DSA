class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
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

    remove(vertex){
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacentVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex , " -> " , [...this.adjacencyList[vertex]]);  
        }
    }

    bfs(node){
        let queue = []
        queue.push(node)
        let result = new Set()
        let visited = {} 
        visited[node] = true
        while(queue.length){
            let curr = queue.shift()
            result.add(curr)
            for(let adjacencyVertex of this.adjacencyList[curr]){
                if(!visited[adjacencyVertex]){
                    visited[adjacencyVertex] = true;
                    queue.push(adjacencyVertex)
                }
                
            }
        }
        return result
    }

    dfs(node,visited = new Set()){
        visited.add(node)
        for(let adjacencyVertex of this.adjacencyList[node]){
            if(!visited.has(adjacencyVertex)){
                visited.add(adjacencyVertex)
                this.dfs(adjacencyVertex,visited)
            }
        }
        return[...visited]
    }
}

const graph = new Graph()

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

// graph.remove("A")

graph.print()