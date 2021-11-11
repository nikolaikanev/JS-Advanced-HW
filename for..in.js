const obj = {
    'C' :3,
    'A' :1,
    'B' :2,
}

console.log('for .. of')
for(const prop in obj) {
    console.log(obj[prop])
}

// OTPUT:
//3
//1
//2