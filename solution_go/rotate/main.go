package main

import "fmt"

func main() {
	// caseOne := []int{1, 2, 3, 4, 5, 6, 7}
	// rotateOne(caseOne, 4)

	// caseTwo := []int{-1, -100, 3, 99}
	// rotateOne(caseTwo, 2)

	// caseThree := []int{1, 2, 3}
	// rotateOne(caseThree, 2)

	// caseOne := []int{1, 2, 3, 4, 5, 6, 7}
	// rotateTwo(caseOne, 3)

	// caseTwo := []int{-1, -100, 3, 99}
	// rotateTwo(caseTwo, 2)

	// caseThree := []int{1, 2, 3}
	// rotateTwo(caseThree, 2)

	caseOne := []int{1, 2, 3, 4, 5, 6, 7}
	rotateThree(caseOne, 3)

	caseTwo := []int{-1, -100, 3, 99}
	rotateThree(caseTwo, 2)

	caseThree := []int{1, 2, 3}
	rotateThree(caseThree, 2)
}

// func rotateOne(nums []int, k int) {
// 	length := len(nums)
// 	lenK := length - (k % length)
// 	right := length - (k % length)
// 	left := 0
// 	if lenK == length {
// 		return
// 	}

// 	for {
// 		if right == length {
// 			break
// 		}

// 		reversePart(nums, left, right-1)
// 		left++
// 		right++
// 	}
// }

// func rotateTwo(nums []int, k int) {
// 	n := len(nums)
// 	if k >= n {
// 		k = k % n
// 	}
// 	fmt.Println(k)
// 	reversePart(nums, 0, n-1)
// 	reversePart(nums, 0, k-1)
// 	reversePart(nums, k, n-1)

// 	fmt.Println(nums)
// }

// func reversePart(nums []int, start int, end int) {
// 	for start < end {
// 		nums[start], nums[end] = nums[end], nums[start]
// 		start++
// 		end--
// 	}
// }

// in-place using pointers...
func rotateThree(nums []int, k int) {
	if k == 0 || k%len(nums) == 0 {
		return
	}
	// starting point
	startIdx := 0
	// current index
	curIdx := 0
	// Value being shifted - set to fist value
	curVal := nums[0]
	for range nums {
		nextIdx := (curIdx + k) % len(nums)
		tmp := nums[nextIdx]
		nums[nextIdx] = curVal
		curVal = tmp
		curIdx = nextIdx
		if startIdx == curIdx {
			// we are at the original point - advance one step
			startIdx++
			curVal = nums[startIdx]
			curIdx = startIdx
		}
	}
	fmt.Println(nums)
}
