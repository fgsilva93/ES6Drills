//Template Literals and Default Parameters Value//

/*function favMoive(movie, name) {
    if (movie === undefined) {
        movie = 'The Room'; 
    }
    if (name === undefined) {
        name = 'world'; 
    }
    console.log(`My name is ${name} and my favorite movie is ${movie}`); 
}

favMoive('LaLa Land', 'Franco'); 
favMoive();*/ 

//Arrow Functions//

let favMovie = (movie = 'The Room', name = 'World') => console.log(`My name is ${name} and my favorite movie is ${movie}`); 

favMovie('LaLa Land','Franco'); 
favMovie(); 

let person = "Franco Silva"; 
let words = person.split(" ");

// normal arrow function
let getFirstName = firstName => {
    console.log(firstName[0]); 
}

getFirstName(words);

// arrow function with concise body syntax

let getFirstNameConcise = firstName => console.log(firstName);

getFirstNameConcise(words[0]);

/*let getTheParameters = (x, y) => {
    let square = Math.pow(x, y);
    let multi = x * y; 
    console.log(square);
    console.log(multi);
}

getTheParameters(5,5);*/

let getTheParameters = (x, y) => ({
    square: Math.pow(x,y), 
    product: x * y,
})

let results = getTheParameters(5,5);
console.log(results);

//Spread Syntax// 

let things = (name,location,food) => {
    console.log(name); 
    console.log(location); 
    console.log(food); 
}

let arr = ['Frank', 'Birmingham', 'Burrito'];

things(...arr);

let aName = "Franco"; 

let loops = (word) => {
    let spreading = [...word];
    for(i=0; i < n.length; i++) {
        console.log(spreading[i]);
    }
}

loops(aName); 