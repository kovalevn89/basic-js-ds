const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }


  //root
  root() {
    return this._root;
  }


  //add
  _addNode(node, data) {
    if (node === null) {
      node = new Node(data);
      return node;
    }

    if (node.data === data) {
      return node;
    }

    node.data < data ? node.right = this._addNode(node.right, data) : node.left = this._addNode(node.left, data);

    return node;
  }

  add(data) {
    this._root = this._addNode(this._root, data);
  }


  //has
  _hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return node.data < data ? this._hasNode(node.right, data) : this._hasNode(node.left, data);

  }

  has(data) {
    return this._hasNode(this._root, data);
  }


  //find
  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    return node.data < data ? this._findNode(node.right, data) : this._findNode(node.left, data);
  }

  find(data) {
    return this._findNode(this._root, data);
  }


  //remove
  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let currentData = this.min(node.right);

      node.data = currentData;

      node.right = this._removeNode(node.right, currentData);

      return node;
    }

    node.data < data ? node.right = this._removeNode(node.right, data) : node.left = this._removeNode(node.left, data);
    return node;

  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }


  //min
  min(rootNode = this._root) {
    if (rootNode === null) {
      return null
    }

    let minNode = rootNode.data
    let leftNode = rootNode.left

    while (leftNode) {
      minNode = leftNode.data
      leftNode = leftNode.left
    }

    return minNode
  }

  //max
  max() {
    if (this._root === null) {
      return null
    }

    let maxNode = this._root.data
    let rightNode = this._root.right

    while (rightNode) {
      maxNode = rightNode.data
      rightNode = rightNode.right
    }

    return maxNode
  }
}

module.exports = {
  BinarySearchTree
};