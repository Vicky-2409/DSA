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
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    print(node,curretWord="",result=[]){
        if(node.endOfWord){
            result.push(curretWord)
        }
        for(let char in node.children){
            this.print(node.children[char],curretWord+char,result)
        }
        return result
    }

    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return this.print(node,prefix)
    }
}


const trie = new Trie();

trie.insert("abin")
trie.insert("abinash")
trie.insert("akash")
trie.insert("abinaya")
trie.insert("abishek")
trie.insert("bala")
trie.insert("basha")

console.log(trie.search("basha"));
console.log(trie.search("bac"));
console.log(trie.print(trie.root));
console.log(trie.autoComplete("a"));
console.log();
