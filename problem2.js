const fs = require('fs');

const problem2 = () => {
    let path = 'lipsum.txt';
    fs.promises.readFile(path, 'utf8')
    .then((res)=> {
        let upperCaseData = res.toUpperCase();
        fs.promises.writeFile('upperCase.txt', upperCaseData);
    })
    .then((res)=> {
        fs.promises.writeFile('filenames.txt', 'upperCase.txt');
    })
    .then((res)=> {
        return fs.promises.readFile('upperCase.txt', 'utf8');
    })
    .then((res)=> {
        let lowerCaseData = res.toLowerCase().split(".").join("\n");
        fs.promises.writeFile('lowerCase.txt', lowerCaseData);
    })
    .then((res)=> {
        fs.promises.appendFile('filenames.txt', ' lowerCase.txt');
    })
    .then((res)=> {
        return fs.promises.readFile('lowerCase.txt', 'utf8');
    })
    .then((res)=> {
        let sortedData = res.split("\n").sort().join("\n");
        fs.promises.writeFile('sorted.txt', sortedData);
    })
    .then((res)=> {
        fs.promises.appendFile('filenames.txt', ' sorted.txt');
    })
    .then((res)=> {
        return fs.promises.readFile('filenames.txt', 'utf8');
    })
    .then((res)=> {
        let listOfNames = res.split(' ');
        listOfNames.map((element)=> {
            fs.promises.unlink(element);
        });
    })
    .catch((err)=> {
        console.log(err);
    })

}

module.exports = problem2;