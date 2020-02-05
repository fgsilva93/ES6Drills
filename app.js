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
let getFirstName = (firstName) => {
    console.log(firstName[0]); 
}

getFirstName(words);

// arrow function with concise body syntax
let getFirstNameConcise = (firstName) => console.log(firstName[0]);

getFirstNameConcise(words);

let getTheParameters = (x, y) => console.log(x * y); 

getTheParameters(5,5);