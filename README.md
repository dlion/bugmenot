Bugmenot
============

A node [Bugmenot](http://bugmenot.com) library to find username and password for various sites

## Install
You can install this library from [npmjs](http://npmjs.org) typing `npm install bugmenot`

## Usage
```js
var bugmenot = require('bugmenot');

bugmenot.getAccounts('example.org', function(err, data) {
    if(!err) {
        for(var i in data) {
            console.log("Username: "+data[i].username+"\nPassword: "+data[i].password+"\nPerc: "+data[i].stat+"\nVote: "+data[i].vote+"\n\n");
        }
    }
});
```
## Author
Domenico Luciani (http://dlion.it)

## LICENSE
MIT
