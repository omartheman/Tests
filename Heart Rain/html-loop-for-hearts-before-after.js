
function logoLoop(reps) {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= reps; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    const a = 0 + v;
    const b = 3 + 0.3*v;
    console.log(
    `    #heartA${a} {
      left: ${50 + 100*v}px;
      animation-delay: ${b}s;
    }
    #heartA${a}::before {
      animation-delay: ${b}s;
    }
    #heartA${a}::after {
      animation-delay: ${b}s;
    }`
    );
  }
};

logoLoop(25);