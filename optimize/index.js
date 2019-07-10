#!/usr/bin/env node
const colors = require('colors');
const args = require('yargs')
    .alias('h', 'help')
    .help('help')
    .describe({
        'C': '{path} c:\\',
        'S': '{path} c:\\TruCare\\TruCare\\apache-tomcat\\webapps\\casenet-server',
        'U': '{path} c:\\Users\\kmurphy',
        'raw': '{path} raw absolute path',
        'js': '{type} Run the JS Gulp function ie scripts()',
        'images': '{type} Run the JS Gulp function ie images()',
        'destFolder': 'The folder for the destination of the source file',
        'sourceFile': 'Source you want modified',
    })
    .usage('Usage: $0 -path --type --destFolder --sourceFile')
    .showHelpOnFail(false, "Specify --help for available options")
    .argv;

const _ = require('lodash');
// const args = yargs.argv;
const gulpFunctions = require('./gulp/gulpFunctions');

const _destFolder = args.destFolder;
const _sourceFile = args.sourceFile;
const _type = args.type;
const _config = {};
let _cDrive;

let _raw = args.raw;
let _trucareServer;
let _userFolder;
// let _raw;
let _fullDestFolder;
let _fullSourceFile;

console.log(_sourceFile);
console.log(_raw);
console.log(_type);

// if (_.isEmpty(_destFolder) || _.isEmpty(_sourceFile)) {
//     console.log('You need to have at least one destFolder and on destFile!');
//     process.exit(0);
// }

if (_.isEmpty(_type)) {
    console.log('You need to add a function type');
    process.exit(0);
}

// Just check if they want to jump to a folder
if (args.C) {
     _cDrive = 'C:\\';
     _fullDestFolder = `${_cDrive}\/${_destFolder}`;
     _fullSourceFile = `${_cDrive}\/${_sourceFile}`;
} else if (args.S) {
     _trucareServer = "C:/TruCare/TruCare/apache-tomcat/webapps/casenet-server";
    _fullDestFolder = `${_trucareServer}/${_destFolder}`;
    _fullSourceFile = `${_fullDestFolder}/${_sourceFile}`;
} else if (args.U) {
     _userFolder = 'c:\\Users\\kmurphy';
    _fullDestFolder = `${_userFolder}\/${_destFolder}`;
    _fullSourceFile = `${_userFolder}\/${_sourceFile}`;
} else {
    // @todo need to figure out folder and file
     _raw = args.raw;
    _fullDestFolder = _raw;
	_fullSourceFile = _sourceFile;
}

_config.fullDestFolder = _fullDestFolder;
_config.fullSourceFile = _fullSourceFile;
_config.type = _type;
// console.log(_cDrive);
// console.log(_trucareServer);
// console.log(_userFolder);
// console.log(_raw);
// console.log(_fullDestFolder);
// console.log(_fullSourceFile);

gulpFunctions(_config);


