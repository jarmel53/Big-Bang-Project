//import in file system so boleh create read and write
const fs = require('fs'); 

//array untuk store string
let result = [];

//make it 1-100 but with condition following the, big,bang, big bang
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIG BANG");
    } else if (i % 3 === 0) {
        result.push("BIG");
    } else if (i % 5 === 0) {
        result.push("BANG");
    } else {
        result.push(i.toString());
    }
}

//make new file to store output and boleh push kat github
//convert ke format json
fs.writeFileSync('output.json', JSON.stringify(result, null, 2));

console.log("Output will be shown at output.json file");
