/* eslint-disable */    //disabled all warnings in a file
export function processCalculation(fullString){
    let result 

    //considering numbers and signs divided by spaces
    
    //filter the string
    fullString = fullString.value
    const literals = fullString.match(/\S+/g)    //matches strings but spaces
    console.log ("literals ", literals)

    //const operations = literals.map((literal, index) => ({literal, index})).filter(({literal, index}) => isNaN(literal))
    //console.log ("operations ", operations)

    //Declarative programming approach
    const sum = (x, y) => parseFloat(x) + parseFloat(y)
    const sub = (x, y) => x - y
    const mult = (x, y) => x * y
    const dif = (x, y) => x / y 

    const validString = !isNaN(literals[0]) && !isNaN(literals[literals.length-1])
    
    if(!validString){
        result = "invalid sequence"
        console.log("result is = ", result)
        return result
    }
    
    while(literals.filter((literal) => literal == "/" || literal == "*").length > 0){  //while there are / of * left
        literals.forEach((literal) => {  
            if(literal == "/"){
                let index = literals.indexOf(literal)
                literals.splice(index-1, 3, dif(literals[index-1], literals[index+1]))
            }
            else if(literal == "*"){
                let index = literals.indexOf(literal)
                literals.splice(index-1, 3, mult(literals[index-1], literals[index+1]))
            }
            console.log(literals)
        }) 
    }
    while(literals.filter((literal) => literal == "+" || literal == "-").length > 0){ //while there are + of - left
        literals.forEach((literal) => {  
            if(literal == "+"){
                let index = literals.indexOf(literal)
                literals.splice(index-1, 3, sum(literals[index-1], literals[index+1]))
            }
            else if(literal == "-"){
                let index = literals.indexOf(literal)
                literals.splice(index-1, 3, sub(literals[index-1], literals[index+1]))
            }
            console.log(literals)
        })  
    }

    //--------------------
    //result checking
 
    if(literals == null)
        {result = "nothing to say"}
    else if(literals[0] == "Infinity")
        {result = "can not divide by 0"}
    else if(!isNaN(literals[0]))
       {result = literals[0]}

    console.log("result is = ", result)

    return result
}