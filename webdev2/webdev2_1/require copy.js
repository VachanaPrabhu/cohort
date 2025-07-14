const fs = require("fs");
const path = require("path");

const scriptDir = __dirname;
console.log("Your script is running from:", scriptDir); // Shows the directory of the current script file

// This is the path your code is trying to open
const targetPath = path.resolve(process.cwd(), "a.txt");
console.log("Node.js is looking for 'a.txt' at:", targetPath);

try {
    const contents = fs.readFileSync("a.txt", "utf-8"); // Your original line
    console.log(contents);
} catch (error) {
    console.error("Failed to read file:", error.message);
}
