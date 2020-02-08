const proverbs = String.raw`
*«Etre vert de rage» signifie : s’emporter, être en colère vivement.

*«Décrocher la lune» signifie : être capable de tout faire pour quelqu’un ou quelque chose.

*«Faire les 400 coups» signifie : faire des bêtises. En relation avec les 400 coups de canon à Montauban aussi.

*«Donner sa langue au chat» : cette expression est très connue pour dire que l’on ne connait pas la réponse.

*«Chanter comme une casserole» signifie : chanter mal.

*«Serres comme des sardines» signifie : être très serres, très proches les uns des autres.

*«Attendre 107 ans ici» : l’expression signifie un temps d’attente très long. Notre Dame de Paris aurait été́ construite en 107 ans (et même plus, environ 200 ans).

*«A un de ces quatre !» : cette expression signifie une durée courte. Raccourci de «à bientôt !».

*«Casser la Croute» : cette expression signifie prendre un encas rapidement et simplement.

*«En rang d’oignons» veut dire : Ranger sur une même ligne, les uns derrière les autres, et bien organises.

*«Sage comme une image» veut dire : Sans bouger, calme et bien éduqué.

* «Comme sa poche» signifie : Connaitre très bien un lieu, une ville, un pays, etc.

* «Oh purée! » signifie : Oh la la! C’est une exclamation qui exprime la stupeur, l’étonnement.

* «Pleuvoir des cordes» signifie : il pleut très fort beaucoup et d’un seul coup.

*«Prendre la poudre d’Escampette» signifie : fuir ou partir vite.

*«Etre dans la lune» signifie : rêver ou ne pas entendre.

*«Se tenir à carreau» veut dire : être sage, pas de bêtises atteindre son objectif.

*«Sous le nez» signifie que l’on rate quelque chose.

*«Rester bouche bée» signifie : garder la bouche grande ouverte de surprise, d’étonnement.

*«Se mettre martel en tête» signifie : être préoccupé et fait penser à des coups de marteau qui résonneraient dans la tête. Le martel est une ancienne forme de marteau.
`;

const quoteMatchRegex = /(?<=\*)(.*?»)/g;
// const quoteMatchRegex = /(?<=\*)(.*)(?=»)/g;
// Was using the one above, but i could just use the regex that matches the quote that comes at END, doesent have to be string that PRECEDES the quote. =)
const quoteArray = proverbs.match(quoteMatchRegex);

// console.log(quoteArray);

//Create a loop that turns each item in the array into its own regex. 
let spanProverbs = proverbs;
const regexArray = [];
for (let i = 0; i < quoteArray.length; i++) {
  //Create a regex out of each item in the array.
  //Create this regex using an array.
  // regexArray[i] = quoteArray[i];
  //This is redundant. Just use the appropriate number of the quoteArray for each regex.
  //Make a for loop that matches and replaces each quote in quoteArray, using each quote in quoteArray as a regex, and replacing it with itself wrapped in span.
  let quoteArrayRegexI = new RegExp(quoteArray[i],"g");
  spanProverbs = spanProverbs.replace(quoteArrayRegexI, `<span class="proverb-quotes">${quoteArray[i]}</span>`)

};
// console.log(spanProverbs); 
//The last quote is included here, but not in divArray.... seems like it's because of the second newline. We probably only need one anyway?

//It works! Now repeat the process, putting each quote and explanation inside its own div. 

// const divRegex = /(?<=\n)(.+)(?=\n)/g;
// Adding the star to the above regex fixed the problem of the last quote being excluded. =)
const divRegex = /(?<=\n)(.+)(?=\n*)/g;

const divArray = spanProverbs.match(divRegex);

// console.log(divArray);

let divProverbs = spanProverbs;
for (let i = 0; i < divArray.length; i++) {
  divArray [i] = divArray[i].replace(/\*/g, '\\*');
  //These following regexes don't seem to do anything, since the double backslash is ommited.
  //Maybe if I change the upper replace. function with a second regex instead of quotes, it would sove the not-matching-all-spans-problem.

  //Didn't work. It's almost as if the program doesn't register all of the stars as symbols. I think this because it seems like the stars are what throws the error when I'm trying to match the spans in the spanProverbs. But some of the stars don't seem to throw the error. It's like the program doesn't even see them, like they don't exist. 

  divArray [i] = divArray[i].replace(/\</g, '\<');
  divArray [i] = divArray[i].replace(/\=/g, '\=');
  divArray [i] = divArray[i].replace(/\>/g, '\>');
  divArray [i] = divArray[i].replace(/\//g, '\/');
};
// console.log(divArray);

for (let i = 0; i < divArray.length; i++) {
  //Make a for loop that matches and replaces each quote in quoteArray, using each quote in quoteArray as a regex, and replacing it with itself wrapped in span.
  let divArrayRegexI = new RegExp(divArray[i],"g");
  divProverbs = divProverbs.replace(divArrayRegexI, `<div class="proverb-divs">\n\t${divArray[i]}\n</div>`)
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ERROR MAY BE HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};
// console.log(divProverbs);
// !!! !!! Some of the proverbs in divArray don't seem to get matched by the \\* regex. also, the fact that only the \\* regex is needed out of all four regexes is weird. I guess it is the star at the beggining that throws the error....?

//Try replacing the backslash using regex, and indenting using \t

// console.log(divProverbs);

//Replace the backslash now, in divProverbs, with regex...

const backslashRegex = /\\/g;
divProverbsFinal = divProverbs.replace(backslashRegex, '');
console.log(divProverbsFinal);
//That worked!
//Now the only error in this program, is that the regex '  divArray [i] = divArray[i].replace(/\*/g, '\\*');' seems to skip a few spans for some reason...

//It's almost as if the program doesn't register all of the stars as symbols. I think this because it seems like the stars are what throws the error when I'm trying to match the spans in the spanProverbs. But some of the stars don't seem to throw the error. It's like the program doesn't even see them, like they don't exist. 

//A hint might exist in the string after the spans have been added: spanProverbs

//What is also strange is that there should be no irregularities in the spans, as they are added automatically after the stars. One thing that could be an issue is maybe the blank newline between one span segment and the next...

// console.log(spanProverbs);

//**************************************************************** */
// console.log(proverbs.replace(quoteMatchRegex, `${quoteMatchRegex}</span>`));
// This replace function wasn't working, becasue it replaced each match with the direct regex characters, not the match.

//Match each set of quotes in the beggining
//Wrap each quote with a span tag.
//Use the matched quotes to create a loop, that makes each of the matched quotes in the array into it's own regex. Use this then, to replace each individual quote with itself wrapped in span =) 