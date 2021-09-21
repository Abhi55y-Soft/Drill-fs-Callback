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
    fs.readFile(path, 'utf8', (err, data)=> {
        if(err){
            console.log('error', err);
        }else{
            let upperCaseData = data.toUpperCase();
            fs.writeFile('upperCase.txt', upperCaseData, (err, data)=> {
                fs.writeFile('filenames.txt', 'upperCase.txt', (err, data)=> {
                    if (err){
                        console.log('error', err);
                    }
                });
                if (err){
                    console.log('error', err);
                }else{
                    fs.readFile('upperCase.txt', 'utf8', (err, data)=> {
                        if (err){
                            console.log('error', err);
                        }else{
                            let lowerCaseData = data.toLowerCase().replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").join("\n");
                            fs.writeFile('lowerCase.txt', lowerCaseData, (err, data)=> {
                                fs.appendFile('filenames.txt', ' lowerCase.txt', (err, data)=> {
                                    if (err){
                                        console.log('error', err);
                                    }
                                })
                                if (err){
                                    console.log('error', err);
                                }else{
                                    fs.readFile('lowerCase.txt', 'utf8', (err, data)=> {
                                        if (err){
                                            console.log('error', err);
                                        }else{
                                            let sortedData = data.split("\n").sort().join("\n");
                                            fs.writeFile('sorted.txt', sortedData, (err, data)=> {
                                                fs.appendFile('filenames.txt', ' sorted.txt', (err, data)=> {
                                                    if (err){
                                                        console.log('error', err);
                                                    }
                                                });
                                                if (err){
                                                    console.log('error', err);
                                                }else{
                                                    fs.readFile('filenames.txt', 'utf8', (err, data)=> {
                                                        if (err){
                                                            console.log('error', err);
                                                        }else{
                                                            let listOfNames = data.split(' ');
                                                            listOfNames.forEach((element)=> {
                                                                fs.unlink(element, (err)=> {
                                                                    if (err){
                                                                        console.log('error', err);
                                                                    }
                                                                })
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

module.exports = problem2;