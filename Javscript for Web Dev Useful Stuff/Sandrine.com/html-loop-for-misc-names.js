
function logoLoop() {
  //Write a loop that repeats the text below, but changing the source and the alt code. 
  //Start at 0, go to 128.
  let v;

  var item = 'misc'
  var path = `pictures\\${item}\\${item}${v}`;
  var numberItems = 48;

  for (v = 0; v <= numberItems; v++) {
    var itemcaps = item.charAt(0).toUpperCase() + item.slice(1, item.length);
    console.log(
    `      <div class="home-pic-div">
        <p class="home-pic-title">
          ${itemcaps} ${v}
        </p>
        <img class="home-img-1" src="${path}.jpg" alt="${item}${v}">
      </div>
    `
    );
  }
};
logoLoop();