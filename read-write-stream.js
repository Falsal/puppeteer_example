const fs = require('fs');

const readableStream = fs.createReadStream('./file1.txt', {
    encoding : 'utf8',
    highWaterMark : 50  // chunks of 2 bites
});



const writableStream = fs.createWriteStream('./file2.txt', 'utf-8');


readableStream.on('data', function (chunk) {
    console.log(chunk);
    writableStream.write(chunk);
})