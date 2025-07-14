const fs = require("fs"); ///importing library fs

///readFile -> reads file asynchronously
///read file is running simultaneouly for both tasks, once its done with a task its calls back the given function
///in this case the call back function is print

function print(err,data){
    console.log(data)
}

fs.readFile("/Users/vachanavijay/Developer/vachana/cohort/webdev2/webdev2_1/a.txt", "utf-8",print);

fs.readFile("/Users/vachanavijay/Developer/vachana/cohort/webdev2/webdev2_1/b.txt","utf-8",print)

console.log("done!");