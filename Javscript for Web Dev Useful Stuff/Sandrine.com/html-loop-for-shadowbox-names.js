
function logoLoop() {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  for (v = 0; v <= 8; v++) {
    //For each iteration, we must replace only the number 0 in the text. 
    var item = 'shadowbox'
    var itemcaps = item.charAt(0).toUpperCase() + item.slice(1, item.length);
    console.log(
    `    <div class="home-pic-div">
      <p class="home-pic-title">
        ${itemcaps} ${v}
      </p>
      <img class="home-img-1" src="pictures\\${item}es\\${item}${v}.jpg" alt="${item}${v}">
    </div>
    `
    );
  }
};
logoLoop();