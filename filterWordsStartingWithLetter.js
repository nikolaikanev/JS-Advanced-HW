// Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols

let quote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools"

function writeWords(string) {
    return string.split(' ').filter(el => el.startsWith("t")).filter(el => el.length > 2)
}


console.log(writeWords(quote))
