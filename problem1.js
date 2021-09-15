const fs = require('fs');

const  problem1 = (cb) => {
    fs.mkdir("./jsonFiles", cb);
}

module.exports = problem1;

