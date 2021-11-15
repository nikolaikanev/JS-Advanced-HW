// Given is next Array of Objects:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------------------------------------------------------- */
/*                                   TASK2:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPriceByCategory function, so that it will return the
// price sum of all products matching the given catgory
function calcTotalPriceByCategory(products, category) {
	// YOUR CODE HERE
    return products.filter(el => el.category === category).map(el => el.price).reduce((a, b) => a + b, 0)
}

// TEST
let totalPriceByCategory = calcTotalPriceByCategory(products,'books')
console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5