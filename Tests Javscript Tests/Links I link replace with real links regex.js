var str = "I learned to play the Ukulele in Lebanon."
var regex = /le/gi, result, indices = [];
while ( (result = regex.exec(str)) ) {
    indices.push(result.index);
}
const sales = String.raw`
<div id="homepage-title-main-content" class="textWhite">Cannelle la Demoiselle</div>
		<div id="homepage-intro-text" class="textWhite links-i-like-text">
			<p>
				Je vous recommande vivement ces liens dessous.
			<p>
				Links I like:
			</p>
			</p>
			<p>
				Soit leur mission de vie me touche beaucoup ou alors des amis que je soutiens:
			</p>
			<p>
			 	Friends I support, or people with a mission of life that is INCREDIBLE to me.
			</p>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** www.bijouxdemail.fr 
				</h3>
					Creatrice de bijoux. Une amie de longue date partagee entre la France et l’Inde.
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
				*** leonardpitt.com
				</h3>
				<p>
					Ecrivain(et plus!) Un homme d’esprit et de Coeur (Berkeley, Californie)
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
				*** https://www.facebook.com/julienperonofficiel/
				</h3>
				<p>
					“L’ecole de la vie” (et de demain), Realisateur, conferencier, Visionnaire je dirais! (France)
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** https://davidlaroche.fr
				</h3>
				<p>
					Jeune Homme talentueux, humaniste et inspirant!! Un veritable coach.(France)
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** Barbara Pueller Illustrations - Home | Facebook
				</h3>
				<p>
					Drole, du talent et une copine…qui devait etre la 1ere illustratrice de Cannelle :((
					(dans mon livre, je mentionne sa fille Paloma…et oui, on etait enceinte ensemble) Paris, France.
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** http://le-relais-st-germain.com
				</h3>
				<p>
					Restaurant d’une tres bonne amie, dans la Sarthe, France. Allez-y! 
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** Warren MacMillan - Sculptor/Visual Artist/Poet 
				</h3>
				<p>
					Un artiste et ami de la baie de San Francisco, talentueux et TRES artiste!!
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** Hartl-Meyer Photography » Paris Theatres
				</h3>
				<p>
					Extremement talentueuse photographe et amie, en France.
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** https://bouquinistequaisdeparis.jimdofree.com/
				</h3>
				<p>
					Un vrai parisien…et ami. Bouquiniste, oui il en reste, et sur les quais!! A voir!
				</p>
			</div>
			<div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** https://www.sudouest.fr/2017/05/03/jean-marie-tarance-un-explorateur-de-l-eveil-3412283-4398.php
				</h3>
				<p>
					…un tres bon ami de longtemps, de Dax et bien sur un GRAND talent!!
				</p>
      </div> 


      <div class="links-i-like-divs">
				<h3 class="links-i-like-titles">
					*** I win
				</h3>
				<p>
					…un tres bon ami de longtemps, de Dax et bien sur un GRAND talent!!
				</p>
			</div>`;

const regexName = /(?<=\*\*\*\s)(.*)(?=\s*.*\n)/g;
// const regexName = /(?<=h)(.*)(?=p)/g;
const itemNamesArray = sales.match(regexName);
console.log(itemNamesArray);

const regexHTTP = /(?<=http)(.*)/g;

console.log(itemNamesArray[1].match(regexHTTP));
console.log(itemNamesArray[2].match(regexHTTP));
if (itemNamesArray[1].match(regexHTTP) === null) {
  console.log('its nullnull');
}
if (itemNamesArray[2].match(regexHTTP) === null) {
  console.log('2 its nullnull');
}

const regexSpaces = /(\s.*\s)/g;
//This works, but probably not for a name with just one space. No, it doesnt'. Do a regex that detects one space, discluding an optional space at the end.

const regexSpaces2 = /(\s.*)(?=\s*)/g;
console.log('DIS DA  ONE');
console.log(itemNamesArray[itemNamesArray.length-1].match(regexSpaces2));

console.log(itemNamesArray[4].match(regexSpaces));

for (let i = 0; i < itemNamesArray.length; i++) {
  if (itemNamesArray[i].match(regexHTTP) === null && itemNamesArray[i].match(regexSpaces) === null) {
  //The regexHTTP checks for HTTP at the beggining, the regexSpaces checks if there's at least two spaces in the name.
    // console.log(itemNamesArray[i]);
    itemNamesArray[i] = `http://${itemNamesArray[i]}`;
  }
}

console.log(itemNamesArray);