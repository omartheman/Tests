const listItems = String.raw`Beatrice, Geraldine & Franck, Celine, Florence, Philippe, Mary, Gisele, Pere Siffert, Julien, Delphine, Yael, Wendy, Golriz, Marion, Ev, Ona, Nina, Keira, BM, Julienne & Curtis, Daria, Tatiana, AFSF, Nicolas, Kathy, Angela, Connie, Janet, Tawnya, Alison, Jean-Marie, cousine Isa, Antoine, Christian, Tiffany, cousin Bruno, Bob, Kevin, Lynne, Maryse & Jean-Michel, Jipe & Raffi, Roberto, Sharmila, Omar et bien sur Barry!`;

// const commaMatchRegex = /(?<=\s*)(\w.*?,)/g;
//This regex matches everything that is preceded by zero or more spaces and followed by a comma.
//Adding the \w+ made it so that the regex woudln't include the space at the beggining. The exclude the commma at the end, the '?,' had to be replaced, with '(?=,)', because i think just a question mark on it's own just turns the preceding item into a lazy quanitfier. 
// const commaMatchRegex = /(?<=\s*)(\w.*)(?=,)/g;
// const commaMatchRegex = /(?<=\s)(\w+.*\w+)(?=,)/g;
// const commaMatchRegex = /.+(?=,\s)/g;
// const commaMatchRegex = /.+(?=,)/g;
const commaMatchRegex = /(?<=\s*)(\w.*?,)/g;

const itemsArray = listItems.match(commaMatchRegex);

console.log(listItems.match(commaMatchRegex));

let wrappedItems = listItems;

for (let i = 0; i < itemsArray.length; i++) {
  //This loops creates a regex out of each item in the array, matches that regex with the original string, and replaces it with the item wrapped in the proper html tags.
  let itemsArrayRegexI = new RegExp(itemsArray[i],"g");
  wrappedItems = wrappedItems.replace(itemsArrayRegexI, `<li>\n\t${itemsArray[i]}\n</li>\n`)
};

console.log(wrappedItems);