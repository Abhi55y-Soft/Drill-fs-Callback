/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. 
        Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. 
        Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

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