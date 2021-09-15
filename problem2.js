const fs = require('fs');

const problem2 = () => {
    let path = 'lipsum.txt';
    fs.readFile(path, 'utf8', function (err, data) {
        let upperCaseData = data.toUpperCase();
        fs.writeFile('upperCase.txt', upperCaseData, function(err, result) {
            if(err) console.log('error', err);
            const lowerCaseData = upperCaseData.toLowerCase();
            let sentences = lowerCaseData.split('.');
            sentences.forEach(element => {
                fs.appendFile('lowerCase.txt', element+"\n", function(err, result) {
                    if(err) console.log('error', err);
                });
            });
            fs.readFile('lowerCase.txt', 'utf8', function (err, data){
                sentences.sort();
                sentences.forEach(element => {
                    fs.appendFile('sorted.txt', element+"\n", function(err, result) {
                        if(err) console.log('error', err);
                    });
                });
            });
            fs.readFile('sorted.txt', 'utf8', function (err, data){
                fs.unlink('upperCase.txt', (err) => {
                    if (err) throw err;
                    fs.unlink('lowerCase.txt', (err) => {
                        if (err) throw err;
                    });
                });
            });
        });
    });
}

module.exports = problem2;