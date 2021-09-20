const fs = require('fs');

const problem2 = () => {
    let path = 'lipsum.txt';
    // fs.readFile(path, 'utf8', (err, data)=> {
    //     if(err){
    //         console.log('error', err);
    //     }else{
    //         let upperCaseData = data.toUpperCase();
    //         fs.writeFile('upperCase.txt', upperCaseData, (err, data)=> {
    //             fs.writeFile('filenames.txt', 'upperCase.txt', (err, data)=> {
    //                 if (err){
    //                     console.log('error', err);
    //                 }
    //             });
    //             if (err){
    //                 console.log('error', err);
    //             }else{
    //                 fs.readFile('upperCase.txt', 'utf8', (err, data)=> {
    //                     if (err){
    //                         console.log('error', err);
    //                     }else{
    //                         let lowerCaseData = data.toLowerCase().replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").join("\n");
    //                         fs.writeFile('lowerCase.txt', lowerCaseData, (err, data)=> {
    //                             fs.appendFile('filenames.txt', ' lowerCase.txt', (err, data)=> {
    //                                 if (err){
    //                                     console.log('error', err);
    //                                 }
    //                             })
    //                             if (err){
    //                                 console.log('error', err);
    //                             }else{
    //                                 fs.readFile('lowerCase.txt', 'utf8', (err, data)=> {
    //                                     if (err){
    //                                         console.log('error', err);
    //                                     }else{
    //                                         let sortedData = data.split("\n").sort().join("\n");
    //                                         fs.writeFile('sorted.txt', sortedData, (err, data)=> {
    //                                             fs.appendFile('filenames.txt', ' sorted.txt', (err, data)=> {
    //                                                 if (err){
    //                                                     console.log('error', err);
    //                                                 }
    //                                             });
    //                                             if (err){
    //                                                 console.log('error', err);
    //                                             }else{
    //                                                 fs.readFile('filenames.txt', 'utf8', (err, data)=> {
    //                                                     if (err){
    //                                                         console.log('error', err);
    //                                                     }else{
    //                                                         let listOfNames = data.split(' ');
    //                                                         listOfNames.forEach((element)=> {
    //                                                             fs.unlink(element, (err)=> {
    //                                                                 if (err){
    //                                                                     console.log('error', err);
    //                                                                 }
    //                                                             })
    //                                                         });
    //                                                     }
    //                                                 });
    //                                             }
    //                                         });
    //                                     }
    //                                 });
    //                             }
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });
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