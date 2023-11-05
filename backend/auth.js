const bcrypt = require('bcrypt');

const salt = bcrypt.genSalt(10);

const pass = "mohssine";
pass = bcrypt.hash(pass, salt);

console.log("Pass hash : ",pass);
