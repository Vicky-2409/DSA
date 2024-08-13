class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root;
        for( let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true;
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    delete(word){
         this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node,word,index){
        if(word.length === index){
            if(!node.endOfWord){
                return false
            }
            node.endOfWord = false
            return Object.keys(node.children).length === 0;
        }

        const char = word[index];
        if(!node.children[char]){
            return false
        }

        const shouldDeleteCurrentNode = this.deleteHelper(node.children[char],word,index+1)
        if(shouldDeleteCurrentNode){
            delete node.children[char]
            return Object.keys(node.children).length === 0;
        }

        return false
    }
}

const trie = new Trie();

trie.insert("hello")
trie.insert("hell")
trie.delete("hell")
console.log(trie.search("hell"));
console.log(trie.search("hello"));