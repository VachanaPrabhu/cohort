function greet(user){

console.log("Hello "+user.name+" You are "+user.age+" years old!!");
if(user.age>=18){
    console.log("You are eligible to Vote!!");
}
else{
    console.log("You are not eligible to Vote!!");
}

}

let user1={
    name: "Vachana",
    age: 26    
}

let user2={
    name: "Vijay",
    age: 26
}

greet(user1);
greet(user2);