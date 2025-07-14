const fs = require("fs"); ///importing library fs

///readFileSync -> reads file synchronously
/// IO bound tasks
const contents = fs.readFileSync("/Users/vachanavijay/Developer/vachana/cohort/webdev2/webdev2_1/a.txt", "utf-8");
console.log(contents);

const contents1 = fs.readFileSync("/Users/vachanavijay/Developer/vachana/cohort/webdev2/webdev2_1/b.txt","utf-8")
console.log(contents1);