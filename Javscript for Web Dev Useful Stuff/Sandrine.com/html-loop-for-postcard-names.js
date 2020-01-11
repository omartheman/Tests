
function logoLoop() {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= 17; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    console.log(
    `    <div class="home-pic-div">
      <p class="home-pic-title">
        Postcard ${v}
      </p>
      <img class="home-img-1" src="pictures\\postcards\\postcard${v}.jpg" alt="postcard${v}">
    </div>
    `
    );
  }
};
logoLoop();