function greet(name) {
    console.log(`Hello ${name}`);
};

function greetFcnMaker(name, greetFcn){
    greetFcn(name);
}

greetFcnMaker('Abas', greet);
greetFcnMaker("AbdRabu", greet);

// Higher order function is : greetFcnMaker()
// callback function is : greet()