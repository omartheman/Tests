/*
function show() {
	document.querySelectorAll('div ~ div')
	//Queryselector selects an element, not a css.... right? No, queryselector selects a css selector. 
};
*/

//QuerySelector brings up an object, that contains all the elements which are selected by the class selector 'div ~ div'

//What do we want to do with this function? 
//We want to make it so that the hearts are visible, and the circle and text go away or change.
//We need to toggle a class, or toggle a style of an element.

//use selector div~div to select all the divs you want for hearts. 

// firstHeart.style.visibility = 'visible';
//But we need ALL hearts to be visible. 
//Loop. 
/*
for (i = 0; i <= 25; i++) {
	document.getElementById(`heart${i}`).style.visibility = 'visible';
}
*/

function show() {
	document.querySelector('.heart').style.visibility = 'visible';
	for (i = 0; i <= 25; i++) {
		document.getElementById(`heart${i}`).style.visibility = 'visible';
	}
};