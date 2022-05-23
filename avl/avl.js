class Node {
  constructor(d) {
    this.data = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // A utility function to get
  // the height of the tree
  height(N) {
    if (N == null) return 0;

    return N.height;
  }

  // A utility function to get
  // maximum of two integers
  max(a, b) {
    return a > b ? a : b;
  }

  // A utility function to right
  // rotate subtree rooted with y
  // See the diagram given above.
  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;
    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left),
    this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left),
    this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // A utility function to left
  // rotate subtree rooted with x
  // See the diagram given above.
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left),
    this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left),
    this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(data) {this.insert(this.root, data)}
    insert(node, data) {
    /* 1. Perform the normal BST insertion */
    if (node == null) return new Node(data);

    if (data < node.data)
    node.left = this.insert(node.left, data);
    else if (data > node.data)
    node.right = this.insert(node.right, data);
    // Duplicate datas not allowed
    else return node;

    /* 2. Update height of this ancestor node */
    node.height =
      1 + this.max(this.height(node.left),
          this.height(node.right));

    /* 3. Get the balance factor of this ancestor
      node to check whether this node became
      unbalanced */
    let balance = this.getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && data < node.left.data)
    return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && data > node.right.data)
      return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  // Get successor node for subsequent deletion function //
  getSuccessor(root) {
    let x = root.right;		  // left sub-node of node assigned to temporary node pointer x //
    while (x.left) {
      x = x.left;		// replace x recursively with right right sub-node of x //
    }
    return x;
  }
  // Delete element from tree //
  deleteNode(value) { this.deleteNode(this.root, value) }
  deleteNode(root, value) {
    if (!root)				// if no root is found deletion is not performed //
    {
      // cout << "Node to be deleted not found" << endl;
      // file << "Node to be deleted not found" << endl;
      return root;
    }
    if (value < root.data)				// value to be deleted is less than root vale //
    {
      root.left = this.deleteNode(root.left, value);	// performs deletion recursively to left sub-node //
    }
    else if (value > root.data)			// value to be deleted is more than root value //
    {
      root.right = this.deleteNode(root.right, value);   // recursively performs deletion to right sub-node //
    }
    else {
      if ((root.left) && (root.right))     // for both the left and right sub-nodes not equal to null //
      {
        let x = this.getSuccessor(root);		// immediate ancestor of root assigned to temporary node pointer x //
        root.data = x.data;			// root value is replaced with value of x which is value of ancestor //
        root.right = this.deleteNode(root.right, x.data); // perform deletion recursively to left sub-node //
      }
      else					// for one sub-node, either left or right //
      {
        let x = root.left ? root.left : root.right; // only sub-node, either left or right, assigned to temporary node pointer x //
        if (!x)                           // for both the sub-nodes equalling to null //
        {
          x = root;           // empty root is created //
          root = null;
        }
        else {
          root = x;  // replace root with x which is the only sub-node of the deleted node //
        }

      }
    }
    if (!root) return root;
    /* 3. Get the balance factor of this ancestor
    node to check whether this node became
    unbalanced */
    let balance = this.getBalance(root);

    // If this root becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && data < root.left.data)
    return this.rightRotate(root);

    // Right Right Case
    if (balance < -1 && data > root.right.data)
      return this.leftRotate(root);

    // Left Right Case
    if (balance > 1 && data > root.left.data) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    // Right Left Case
    if (balance < -1 && data < root.right.data) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    /* return the (unchanged) root pointer */
    return root;
  }


  // Inorder Traversal of AVL Tree which is the left-node-right case //
  inorder() { return this.inorder(this.root) }
  inorder(root) {
    let str = "( "

    if (root == null)		// for empty tree no traversal is done //
      return "@";

    str += this.inorder(root.left) + " ";	       // recursively performs inorder traversal to the left sub-node //
    str += root.data + " ";	// prints the node value //
    str += this.inorder(root.right);      // recursively performs inorder traversal to the right sub-node //
    str += " )"
    return str;
  }

  // Preorder Traversal of AVL Tree which is the node-left-right case //

  preorder() { return this.preorder(this.root) }

  preorder(root) {
    let str = "( "
    if (root == null)		// for empty tree no traversal is done //
      return "@";

    str += root.data + " ";	// prints the node value //
    str += this.preorder(root.left) + " ";		// recursively performs preorder traversal to the left sub-node //
    str += this.preorder(root.right);		// recursively performs preorder traversal to the right sub-node //
    str += " )"
    return str;
  }

  // Postorder Traversal of AVL Tree which is the left-right-node case //
  postorder() { return this.postorder(this.root) }

  postorder(root) {
    let str = "( "

    if (root == null)	   	// for empty tree no traversal is done //
      return "@";

    str += this.postorder(root.left) + " "; 	// recursively performs postorder traversal to the left sub-node //
    str += this.postorder(root.right) + " ";	// recursively performs postorder traversal to the right sub-node //
    str += root.data;	// prints the node value //
    str += " )"
    return str;


  }
}
// Driver code
let tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);
console.log(tree.preorder(tree.root));
console.log(tree.inorder(tree.root));
console.log(tree.postorder(tree.root));
tree.root = tree.deleteNode(tree.root, 25);
console.log(tree.inorder(tree.root));


