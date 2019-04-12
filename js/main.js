const fs = require('fs');
 
fs.readFile('../data/txt/dictionary.txt', 'utf8', function(err, contents) {
    const dict = {};
    const dictArr = contents.split('\n').map(line => line.trim().replace(' ', ''));
    const dictMatrix = dictArr.map(word => word.split(''));

    dictMatrix.forEach(word => {
        add(dict, 0);
        function add(object, index) {
            const property = word[index];
            if (index === word.length - 1) {
                object[property] = {
                    end: true
                };
                return;
            } else if (object.hasOwnProperty(property)) {
                add(object[property], index+1);
            } else {
                object[property] = {};
                add(object[property], index+1);
            }
        }
    });

    fs.readFile('../data/txt/comments.txt', 'utf8', function(err, contents) {
        const comments = contents.split('\n').map(line => line.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase().split(' '));
        console.log(comments[189]);

        const blya = comments[189].some(word => {
            const letters = word.split('');

            function check(object, index) {
                const property = letters[index];
                if (object.hasOwnProperty(property)) {
                    if (object[property].end) {
                        return true;
                    } else {
                        check(object[property], index+1);
                    }
                } else {
                    return false;
                }
            }

            const flag = check(dict, 0);
            console.log(flag);

            return flag;
        });

        console.log(blya);
    });
});