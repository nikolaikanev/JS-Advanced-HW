const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
sortArrayByKey = (arr,priorityStr) => {
    let newArr = arr.map(el => {
        if (el[priorityStr] === 'high') {
            el.priorityNum = 3
            return el
        }
        if (el[priorityStr] === 'medium') {
            el.priorityNum = 2
            return el
        }
        if (el[priorityStr] === 'low') {
            el.priorityNum = 1
            return el
        }
       })

    let resultArr = newArr.sort(function(a, b) {
        var nameA = a.priorityNum
        var nameB = b.priorityNum
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
    });

    resultArr.filter(el => {delete el.priorityNum})
    return resultArr
}


/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log( sortArrayByKey(todos, 'priority'))

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]