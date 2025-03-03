package longestzigzag

import "fmt"

type TreeNode struct {
	Value int
	Left  *TreeNode
	Right *TreeNode
}

func (n *TreeNode) SetLeft(v *TreeNode) {
	n.Left = v
}

func (n *TreeNode) SetRight(v *TreeNode) {
	n.Right = v
}

func main() {
	testCase := TreeNode{
		Value: 1,
	}
	testCase1 := &TreeNode{
		Value: 1,
	}
	testCase2 := &TreeNode{
		Value: 1,
	}
	testCase3 := &TreeNode{
		Value: 1,
	}
	testCase4 := &TreeNode{
		Value: 1,
	}
	testCase5 := &TreeNode{
		Value: 1,
	}
	testCase6 := &TreeNode{
		Value: 1,
	}

	testCase.SetLeft(testCase1)

	testCase.SetRight(testCase2)

	testCase2.SetLeft(testCase3)
	testCase3.SetRight(testCase4)

	testCase4.SetRight(testCase5)

	testCase4.SetLeft(testCase6)

	fmt.Println(longestZigZag(&testCase))
}

func longestZigZag(root *TreeNode) int {
	return compare(getMax(root.Left, getNumber(0, true), "left"), getMax(root.Right, getNumber(0, true), "right"))
}

func getMax(value *TreeNode, number int, direction string) int {
	if value != nil {
		return compare(getMax(value.Left, getNumber(number, direction == "left"), "left"), getMax(value.Right, getNumber(number, direction == "right"), "right"))
	}
	return number
}

func getNumber(number int, isDuplicate bool) int {
	if isDuplicate {
		return 0
	}
	return number + 1
}

func compare(a, b int) int {
	if a > b {
		return a
	}
	return b
}
