const fs = require('fs');

const os = require('os');

const callback = function (err) {
    if (err) throw err;
    console.log('Saved!');
}

var user = os.userInfo();

/*console.log(user)*/

fs.appendFile('mynewfile1.txt', 'Hello content!', callback);

fs.appendFile('grettings.txt', `Hello ${user.username}`, callback);