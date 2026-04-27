const {readTasks} = require('./tasks');

const [,, cmd] = process.argv;

if (!cmd) {
    console.log('Taskmaster CLI - usage: node index.js <command>');
}