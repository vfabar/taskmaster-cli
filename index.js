const {readTasks} = require('./tasks');

const [,, cmd] = process.argv;

if (cmd=== 'list') {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log('No hay tareas.');
    } else {
        tasks.forEach((t, i) => {
            const icon = t.done ? '✅' : '❌';
            console.log('\${icon} [\${i+1}] \${t.title}');
        });
    }
}