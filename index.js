const {readTasks, writeTasks} = require('./tasks');

const [,, cmd] = process.argv;

const title = process.argv.slice(3).join(' ');

if (cmd === 'list') {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log('No hay tareas.');
  } else {
    tasks.forEach((t, i) => {
      const icon = t.done ? '✔' : '○';
      console.log(`${icon} [${i+1}] ${t.title}`);
    });
  }
}

if (cmd === 'add') {
    if (!title) {
        console.log('Usa: node index.js add "<título>"');
        process.exit(1);
    }
    const tasks = readTasks();
    tasks.push({ id: Date.now(), title, done: false});
    writeTasks(tasks);
    console.log(' Tarea '+ title +' añadida.');
}

