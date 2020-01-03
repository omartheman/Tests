
function logoLoop(reps) {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= reps; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    console.log(
    `<div class="heart" id="heart${v}"></div>`
    );
  }
};

logoLoop(25);