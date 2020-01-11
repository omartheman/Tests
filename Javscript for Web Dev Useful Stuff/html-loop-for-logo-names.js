
function logoLoop() {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= 128; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    console.log(
    `
    <div class="home-pic-div">
      <img class="home-img-1" src="resized-logos\\logo${v}.jpg" alt="logo${v}">
    </div>`
    );
  }
};
logoLoop();