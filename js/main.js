const fs = require('fs');
 
fs.readFile('../data/txt/dictionary.txt', 'utf8', function(err, contents) {
    const dict = new Set();
    const dictArr = contents.split('\n').map(line => line.trim());
    dictArr.forEach(word => {
        word.split('').forEach(letter => {
            if (dict.has)
        })
    })
});