const problem1 = require('../problem1');
const fs = require('fs');

const cb = () => {
    for (let i= 0; i< 9; i+=1){
        let path = `jsonFiles/${i}.json`;
        fs.writeFile(path, "Data", (err) => {
            if(err) throw err;
        });
        fs.unlink(path, (err) => {
            if (err) throw err;
        });
    }
}
problem1(cb);