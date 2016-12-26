'use strict';

function Node(parent, name) {
  this.name = name;
  if (parent) {
    this.parent = parent;
    parent[name] = this;
  }
}

let root = new Node(null, 'root');
let n1 = new Node(root, 'n1' );
let n2 = new Node(root, 'n2' );
let n3 = new Node(root, 'n3' );

console.dir(root, { depth: null });

function find(tree, query, nodeName){
	
	for(let node in tree){
		if( typeof tree[node] === 'object'){
			
			if(!nodeName)return tree[node];
			else if(node==nodeName)return tree[node];
			
			var res = find(tree[node], query, nodeName);
			if(res)return res;
		}
	}
}
