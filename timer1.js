// node timer1.js 10 3 5 15 9 //beep at 3sec, 5sec, ...

//process.stdout.write('\x07');


const timer = function(item) {

  //let delay = 0;
  for (let i of item) {
    // if (i < 0 && typeof i !== "number") {
    //   return;
    // }  // didn't work
    
    const time = parseInt(i); //if it's not a number wont return anything

    if (time > 0) {
      setTimeout(() => {
        process.stdout.write('.');
        //process.stdout.write('\n');
      }, time * 1000); //it's ms ( 2, 3 , ... are sec)
    }
  }
};

timer(process.argv.slice(2));
