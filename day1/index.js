const fs = require('fs')


// part 1
fs.readFile('data.txt', 'utf8' , (err, data) => {
    const leftColumn = [];
    const rightColumn = [];

    [...data.replace(/[\r]/g, '').split('\n')].forEach((data) => {
        if (data) {
            const [left, right] = data.split('   ');
            leftColumn.push(parseInt(left));
            rightColumn.push(parseInt(right));
        }
    });

    leftColumn.sort();
    rightColumn.sort();

    let totals = [];

    leftColumn.forEach((el, idx) => {
        totals.push(Math.abs(el - rightColumn[idx]));
    });


    const total = totals.reduce((prev, cur) => prev  + cur);
    console.log(total);
});


// part 2
fs.readFile('data.txt', 'utf8' , (err, data) => {
    const leftColumn = [];
    const rightColumn = [];

    [...data.replace(/[\r]/g, '').split('\n')].forEach((data) => {
        if (data) {
            const [left, right] = data.split('   ');
            leftColumn.push(parseInt(left));
            rightColumn.push(parseInt(right));
        }
    });

    let totals = [];

    leftColumn.forEach((el) => {
        totals.push(el * rightColumn.filter(rEl => el === rEl).length);
    });

    const total = totals.reduce((prev, cur) => prev  + cur);
    console.log(total);
});
