//Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand"

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating


const stdin = process.stdin;
const standOut = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', keyPress => {

  if (keyPress === 'b') {
    process.stdout.write('.');
  }

  if (keyPress >= 1 && keyPress <= 9) {
    standOut.write(`Setting timer for ${keyPress} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('.');
    }, keyPress * 1000);
  }

  if (keyPress === '\u0003') {
    standOut.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  
});