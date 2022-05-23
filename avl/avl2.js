
// Node Declaration //
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

};

// Declaration of Class avlTree and Declaration of various functions within the Class //
class AvlTree {
  constructor() {
    this.root = null;
  }

  height() {
    return this.height(this.root);
  }
  // Function to calculate height of tree //
  height(root) {
    let h = 0;
    if (root)							// if input parameter pointer is null height = 0 //
    {
      let left_height = this.height(root.left) ? this.height(root.left) : 0; 		// calculates recursively height of left sub tree //
      let right_height = this.height(root.right) ? this.height(root.right) : 0;		// calculates recursively height of right sub tree //
      h = this.max(left_height, right_height) + 1;				// height of tree = height of the sub tree which has more height + 1 //
    }
    return h;
  }

  // Calculation to check balance which is difference in height of left and right subtrees //
  check_balance(x) {
    let balance = this.height(x.left) - this.height(x.right);			// difference in height of left and right sub tree is the balance //
    return balance;
  }

  // Right- Right Rotation //

  rotate_rightright(parent) {
    let x;					// temporary node type pointer x declared which will be the new parent node//
    x = parent.right;				// right sub-node of old parent assigned to x //
    parent.right = x.left;			// left sub- node of x assigned to right sub-node of old parent//
    x.left = parent;				// modified old parent assigned to left sub-node of x resulting in new balanced parent node//
    return x;
  }

  // Left- Left Rotation //

  rotate_leftleft(parent) {
    let x;					// temporary node type pointer x declared which will be the new parent node//
    x = parent.left;				// left sub-node of old parent assigned to x //
    parent.left = x.right;			// right sub- node of x assigned to left sub-node of old parent//
    x.right = parent;				// modified old parent assigned to right sub-node of x resulting in new balanced parent node//
    return x;
  }


  // Left - Right Rotation //
  rotate_leftright(parent) {
    let x;					// temporary node type pointer x declared which will be the new parent node//
    x = parent.left;				// left sub-node of old parent assigned to x //
    parent.left = this.rotate_rightright(x);	// rightright rotation applied on x and is assigned to left sub-node of parent//
    return this.rotate_leftleft(parent);		// leftleft rotation applied on modified old parent resulting in new balanced parent node//
  }

  // Right- Left Rotation //

  rotate_rightleft(parent) {
    let x;					// temporary node type pointer x declared which will be the new parent node //
    x = parent.right;				// right sub-node of old parent assigned to x //
    parent.right = this.rotate_leftleft(x);	// leftleft rotation applied on x and is assigned to right sub-node of parent //
    return this.rotate_rightright(parent);		// rightright rotation applied on modified old parent resulting in new balanced parent node //
  }

  // Balancing AVL Tree //

  balance(x) {
    let balance = this.check_balance(x);   		// variable balance stores balance of a node //
    if (balance > 1)				// left sub-tree height more than right sub-tree //
    {
      if (this.check_balance(x.left) > 0)	// left sub-tree of left sub-tree height more than right sub-tree of left sub-tree //
        x = this.rotate_leftleft(x);           // perform leftleft rotation //
      else				       // right sub-tree of left sub-tree height more than left sub-tree of left sub-tree //
        x = this.rotate_leftright(x);	       // perform leftright rotation //
    }
    else if (balance < -1)			// right sub-tree height more than left sub-tree //
    {
      if (this.check_balance(x.right) > 0)	// left sub-tree of right sub-tree more than right sub-tree of right sub-tree //
        x = this.rotate_rightleft(x);		// perform rightleft rotation//
      else					// right sub-tree of right sub-tree more than left sub-tree of right sub-tree //
        x = this.rotate_rightright(x);		// perform rightright rotation//
    }
    return x;
  }

  // Insert Element into the tree //
  insert(value) {
    return this.insert(this.root, value)
  }
  insert(root, value) {
    if (root == null)				// if tree is empty root will be null //
    {
      root = new Node(value);			// new node type pointer is created and assigned as root //
      return root;
    }
    else if (value < root.data)		// value to be inserted less than root value //
    {
      root.left = this.insert(root.left, value);	// value inserted recursively to left sub-node //
    }
    else if (value > root.data)		// value to be inserted more than root value //
    {
      root.right = this.insert(root.right, value); // value inserted recursively to right sub-node //

    }
    else {
      // cout << " This value " << value << " already exists in tree. Enter a different value" << endl;
      // file << " This value " << value << " already exists in tree. Enter a different value" << endl;
    }
    root = this.balance(root);				// perform tree balancing to ensure tree is avl tree //
    return root;
  }

  // Inorder Traversal of AVL Tree which is the left-node-right case //
  inorder() { return this.inorder(this.root) }
  inorder(root) {
    let str = "("

    if (root == null)		// for empty tree no traversal is done //
      return "@";

    str += this.inorder(root.left);	       // recursively performs inorder traversal to the left sub-node //
    str += root.data + "  ";	// prints the node value //
    str += this.inorder(root.right);      // recursively performs inorder traversal to the right sub-node //
    str += ")"
    return str;
  }

  // Preorder Traversal of AVL Tree which is the node-left-right case //

  preorder() { return this.preorder(this.root) }

  preorder(root) {
    let str = "("
    if (root == null)		// for empty tree no traversal is done //
      return "@";

    str += root.data + "  ";	// prints the node value //
    str += this.preorder(root.left);		// recursively performs preorder traversal to the left sub-node //
    str += this.preorder(root.right);		// recursively performs preorder traversal to the right sub-node //
    str += ")"
    return str;
  }

  // Postorder Traversal of AVL Tree which is the left-right-node case //
  postorder() { return this.postorder(this.root) }

  postorder(root) {
    let str = "("

    if (root == null)	   	// for empty tree no traversal is done //
      return "@";

    str += this.postorder(root.left); 	// recursively performs postorder traversal to the left sub-node //
    str += this.postorder(root.right);	// recursively performs postorder traversal to the right sub-node //
    str += root.data + "  ";	// prints the node value //
    str += ")"
    return str;


  }

  // Get Ancestor node for subsequent deletion function //
  get_ancestor(root) {
    let x = root.left;		  // left sub-node of node assigned to temporary node pointer x //
    while (x.right) {
      x = x.right;		// replace x recursively with right right sub-node of x //
    }
    return x;
  }

  // Get successor node for subsequent deletion function //
  get_succestor(root) {
    let x = root.right;		  // left sub-node of node assigned to temporary node pointer x //
    while (x.left) {
      x = x.left;		// replace x recursively with right right sub-node of x //
    }
    return x;
  }
  // Delete element from tree //
  delete_node(value) { return this.delete_node(this.root, value) }
  delete_node(root, value) {
    if (!root)				// if no root is found deletion is not performed //
    {
      // cout << "Node to be deleted not found" << endl;
      // file << "Node to be deleted not found" << endl;
      return root;
    }
    if (value < root.data)				// value to be deleted is less than root vale //
    {
      root.left = this.delete_node(root.left, value);	// performs deletion recursively to left sub-node //
    }
    else if (value > root.data)			// value to be deleted is more than root value //
    {
      root.right = this.delete_node(root.right, value);   // recursively performs deletion to right sub-node //
    }
    else {
      if ((root.left) && (root.right))     // for both the left and right sub-nodes not equal to null //
      {
        let x = this.get_succestor(root);		// immediate ancestor of root assigned to temporary node pointer x //
        root.data = x.data;			// root value is replaced with value of x which is value of ancestor //
        root.right = this.delete_node(root.right, x.data); // perform deletion recursively to left sub-node //
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
    root = this.balance(root);   // perform balancing after each deletion to ensure tree is avl tree //
    return root;
  }

  //Delete entire tree //
  delete_tree() {
    if (this.root == null)			// if this.root is null , tree already empty, no deletion is performed //
      return;
    if ((this.root.left) != null)              // for left sub-node not equal to null //
    this.delete_tree(this.root.left);       // perform deletion recursively to left sub-node //
    if ((this.root.right) != null)	       // for right sub-node not equal to null //
    this.delete_tree(this.root.right);      // perform deletion recursively to right sub-node //
    this.root = null;                          // delete root node once the immediate sub-nodes are deleted //
  }

  // Search a value in the avl Tree to return height of the node containing that value //

  search_node(value) { return this.search_node(this.root, value) }
  search_node(root, value) {
    if (root == null) 			// for root equal to null //
      return -1;			// return a negative value //
    if (value < root.data)		// value to be searched is less than root value //
    {
      if (root.left)                // if left sub-node of root exists //
      {
        return this.search_node(root.left, value); // perform search operation recursively to left sub-node//
      }
    }
    else if (value > root.data)		// value to be searched is more than root value //
    {
      if (root.right)		// if right sub-node of root exists //
      {
        return this.search_node(root.right, value);  // perform search operation recursively to right sub-node //
      }
    }
    else if (value == root.data)		// value to be searched matches wih node value //
    {
      return this.height(root);		// perform height calculation on this node //
    }
  }
}
let tree = new AvlTree()
tree.insert(10);
tree.insert(20);
tree.insert(30);