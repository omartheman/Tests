
function logoLoop(reps) {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= reps; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    console.log(
    `
    #heart${0+v} {
      left: ${150 + 100*v}px;
      animation-delay: ${0.3 + 0.3*v}s;
    }
    #heart${0+v}::before {
      animation-delay: ${0.3 + 0.3*v}s;
    }
    #heart${0+v}::after {
      animation-delay: ${0.3 + 0.3*v}s;
    }
    `
    );
  }
};