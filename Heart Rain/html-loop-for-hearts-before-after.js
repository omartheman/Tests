
function logoLoop(reps) {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= reps; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    const a = v;
    const b = 4.5 + 0.3*v;
    const c = 'C';
    console.log(
    `    #heart${c + a} {
      left: ${100*v}px;
      animation-delay: ${b}s;
    }
    #heart${c + a}::before {
      animation-delay: ${b}s;
    }
    #heart${c + a}::after {
      animation-delay: ${b}s;
    }`
    );
  }
};

logoLoop(25);