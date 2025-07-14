function timeout(){
    console.log("timer finished!")
}

console.log("Hi!");

setTimeout(timeout,1000);

console.log("Hello there");

let c=0;
for(i=0; i<20; i++){
    c=c+1;
}

console.log("expensive operation done 1!")

let d=0;
for(i=0; i<20; i++){
    d=d+1;
}

console.log("expensive operation done! 2")

/*out is :
Hi!
Hello there
expensive operation done!
timer finished!
*/

// thread is not free to call the call back function beacuse is running the for loop
//for -loop is cpu intensive task, only when for -loop is compelted, then it atatneds the callback queue
//even though call back is completly executed by web apis