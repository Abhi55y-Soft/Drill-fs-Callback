/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require('fs');

const  problem1 = () => {
    fs.promises.mkdir("./jsonFiles")
    .then((res)=> {
        for (let i= 0; i< 9; i+=1){
            let path = `jsonFiles/${i}.json`;
            fs.promises.writeFile(path, "Data")
            .then((res)=> {
                fs.promises.unlink(path);
            });  
        }
    })
    .catch((err)=> {
        console.log(err);
    });
}

module.exports = problem1;

