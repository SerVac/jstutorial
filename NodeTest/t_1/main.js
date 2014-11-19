var fs = require('fs');
//console.log(fs);
fs.writeFile('testFile.txt', "test tedfgdfgdfgdfxt", function (err) {
    if (err) throw error;
    // after write
})

var fileName = "testFile.txt";
//Sync blocked methods
fs.exists(fileName, function (exists) {
    if (exists) {
        var contents = fs.readFileSync(fileName, '', function (err) {
            if (err)  throw err;
        });
        console.log("testBuffer: ", contents);
    }
});
