/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require('fs');

const  problem1 = (cb) => {
    fs.mkdir("./jsonFiles", cb);
}

module.exports = problem1;

