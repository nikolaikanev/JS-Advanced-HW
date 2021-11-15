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
/*                                   TASK1:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPrice function, so that it will return the sum of all
// products price
// function calcTotalPrice(products) {
// }
    
    // YOUR CODE HERE
    function calcTotalPrice(products) {
        return products.map(el => el.price).reduce((a, b) => a + b, 0)
    }

// TEST
let totalPrice = calcTotalPrice(products)
console.log(totalPrice);

// EXPECTED OUTPUT:
// 10