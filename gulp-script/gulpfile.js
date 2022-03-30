const { src, dest, watch, series, parallel } = require('gulp');

function helloGulp (done){
    console.log ('hello, gulp world!');
    cb();
}

exports.hello = helloGulp;