const { src, dest, watch, series, parallel } = require('gulp');

function helloGulp (done){
    console.log ('hello, gulp world!');
    done();
}

exports.hello = helloGulp;