var str = "I learned to play the Ukulele in Lebanon."
var regex = /le/gi,
    result, indices = [];
while ((result = regex.exec(str))) {
    indices.push(result.index);
}
const sales = String.raw `labels Preview the new My eBay Sold pageWe’re making the experience better for you.Streamlined navigation helps you manage your sold listings more easilyNew quick links at the top take you directly to our shipping tips and Resolution CenterTry it out and let us know what you think.Ok, got it!Ready to ship?Save time and money by printing your label on eBay.Get more tips on shippingHave a problem to resolve?Whether it’s a return or an unpaid item, we’re here to help.Resolution centerReturnsSoldPeriod:Last 60 daysLast 60 daysLast 24 hoursLast 7 daysLast 30 daysCurrent monthLast monthSort:Most recently soldMost recently soldHighest priceEditAll (9)Waiting for payment (1)Shipped (8)Select all itemsDeleteDelete listingAre you sure you want to permanently delete these sold listing?Yes, deleteNo, cancelSHIPPEDSHIPPEDChi Energizer CY-106 Vitality Swing Cardio Exercise Vitalizer Massager Machine ShippedChi Energizer CY-106 Vitality Swing Cardio Exercise Vitalizer Massager Machine Item ID: 362845187770$102.00+ Shipping (buyer paid $17.00)$0.41 refundedSold on: Jan 3Buyer: Dev SperberYour funds will be available by: Jan 18* Learn moreView order detailsMark not shippedView PayPal transactionUnmark as paidContact buyerSell similarAdd noteView trackingEdit trackingUPI_CONTACT_BUYERBuyer hasn't paid yetWe've reminded the buyer to pay, but you can also contact them directly.Contact buyerAWAITING_PAYMENTLouis Garneau Superleggera / Triathlon Helmet, Medium SizeWaiting for paymentLouis Garneau Superleggera / Triathlon Helmet, Medium SizeItem ID: 362861017856$29.00Sold on: Dec 30Buyer: kelemen janosSend invoiceCancel orderMark as payment receivedSell similarResolve a problemAdd noteDELIVEREDDELIVEREDOfficial Nintendo Wii Remote White- Brand New, Factory SealedDeliveredOfficial Nintendo Wii Remote White- Brand New, Factory SealedItem ID: 362852854177$26.50+ Shipping (buyer paid $7.85)Sold on: Dec 25Buyer: Tommy ChanView order detailsView PayPal transactionUnmark as paidContact buyerSell similarAdd noteView trackingEdit trackingDELIVEREDDELIVEREDKessil A350 Controllable LED Fan Aquarium Light - Tuna Blue Spectrum-Specific DeliveredKessil A350 Controllable LED Fan Aquarium Light - Tuna Blue Spectrum-Specific Item ID: 362848922288Positive feedback received$194.00+ Shipping (buyer paid $23.58)Sold on: Dec 15Buyer: Patrick G. ByrneView order detailsView PayPal transactionUnmark as paidContact buyerSell similarAdd noteView trackingEdit trackingDELIVEREDDELIVEREDHayward SP1070 Pool Skimmer Skim-Master New Out of Box, White, Never Used, FreshDeliveredHayward SP1070 Pool Skimmer Skim-Master New Out of Box, White, Never Used, FreshItem ID: 362817379055Positive feedback received$44.99+ Shipping (buyer paid $23.92)Sold on: Dec 9Buyer: Mikhail MineevView order detailsView PayPal transactionUnmark as paidContact buyerSell similarAdd noteView trackingEdit trackingDELIVEREDDELIVEREDNinja Express Chop Elite 200 Watts 4 Blade Food Chopper/Processor Model NJ100GRDeliveredNinja Express Chop Elite 200 Watts 4 Blade Food Chopper/Processor Model NJ100GRItem ID: 362813735658$13.00+ Shipping (buyer paid $12.50)$1.64 refundedSold on: Dec 9Buyer: James A BrookerView order detailsView PayPal transactionUnmark as paidContact buyerSell similarAdd noteView trackingEdit trackingSHIPPEDSHIPPEDDewalt DC970 18V 1/2'' (13mm) Cordless Drill Driver (Tool Only) (No Battery)ShippedDewalt DC970 18V 1/2'' (13mm) Cordless Drill Driver (Tool Only) (No Battery)Item ID: 362817367726$27.00+ Shipping (buyer paid $8.30)Sold on: Dec 6Buyer: Katherine StoutView order detailsAdd tracking numberMark not shippedView PayPal transactionUnmark as paidContact buyerSell similarAdd noteSHIPPEDSHIPPEDSony WF-SP700N Truly Wireless Headphones Left Side Ear Bud WF-SP700NL SilverShippedSony WF-SP700N Truly Wireless Headphones Left Side Ear Bud WF-SP700NL SilverItem ID: 362817345708Positive feedback received$10.00+ Shipping (buyer paid $4.06)Sold on: Nov 27Buyer: williiam f luchtView order detailsAdd tracking numberMark not shippedView PayPal transactionUnmark as paidContact buyerSell similarAdd noteSHIPPEDSHIPPEDVirgin Voyages "AHOY" Mug, Dark Blue, Coffee/Tea, Virgin Airlines/Cruises, BeachShippedVirgin Voyages "AHOY" Mug, Dark Blue, Coffee/Tea, Virgin Airlines/Cruises, BeachItem ID: 362816947862Positive feedback received$10.00+ Shipping (buyer paid $14.20)$3.34 refundedSold on: Nov 18Buyer: Brian T. ZollwegView order detailsAdd tracking numberMark not shippedView PayPal transactionUnmark as paidContact buyerSell similarAdd note*The estimated funds availability date may change because of eBay or PayPal policies.Learn moreNote to self0/255SaveDelete `
/*
//The following is an example from SO
var str = "I learned to play the Ukulele in Lebanon."
var regex = /le/gi, result, indices = [];
while ( (result = regex.exec(str)) ) {
    indices.push(result.index);
}
*/
var str1 = sales;
regex1 = /\$\d+\.\d\d/gi;
var pricesArray = str1.match(regex1);
console.log(pricesArray);
/*
var regex = /"\$\d+\.\d\d/gi, result, indicies = [];
while ( (result = regex.exec(str)) ) {
    indices.push(result.index);
}
console.log(indicies);
*/
/*
const testS = "buttstuff";
const testName = /.+/gi;
const itemNamesArray2 = testS.match(testName);
console.log(itemNamesArray2);
//(.+)text:"(.+)"
const regexName = /DELIVEREDDELIVERED/;
const itemNamesArray = sales.match(regexName);
console.log(itemNamesArray);
//this regex not working, returning the whole sales string after first deliverdelivererd.

const strTest = "DELIVEREDDELIVERED 33 DELIVEREDDELIVERED fdfdf dasfDELIVEREDDELIVEREDsfdasdfasdfDELIVEREDDELIVERED";
const itemNamesArray1 = strTest.match(regexName);
console.log(itemNamesArray1);
//The problem was that I was not using g. The regex was worknig, but the array returned only one match, and i mistook 'input' for the match.
*/
/*
const regexName = /DELIVEREDDELIVERED|SHIPPEDSHIPPED/g;
const itemNamesArray = sales.match(regexName);
console.log(itemNamesArray);
*/
//This one matches, but the problem comes when i add .+Sold, and it does match the whole string after the first delivereddelivered:
/*
const str2 = 'my sale is going south for the sale int the spring';
const regTest = /sale.+?s/g;
const test = str2.match(regTest);
console.log(test);
*/
const regexName = /DELIVEREDDELIVERED.+?Sold|SHIPPEDSHIPPED.+?Sold/g;
const itemNamesArray = sales.match(regexName);
console.log(itemNamesArray);

//Now that we have a regex that pulls the info from all of the sold listings, we need to loop through the array, and extract all of the information, and place it into a format (an array?) that can be easily copied and pasted into excel
//How would this array look? Or maybe it would be even better if it was just a string, then it could be moved into excel easier? Maybe an object? Probably an object should be easiest for Excel to interpret........?

const salesObj = {};
const itemNameRegex = /((?<=SHIPPEDSHIPPED)(.*)(?=Shipped))|((?<=DELIVEREDDELIVERED)(.*)(?=Delivered))/g;
//Following code actually wasnt needed. Dynamic numbers can be entered directly into object using bracket notation and es6 backticks (template literals);
/*
//The following code creates an array of numbers to use to dynamically name the item name key value pair thats going to be in our sales object. 
const numberArr = [];
for (i = 0; i < itemNamesArray.length; i++) {
  numberArr.push(i + 1);
}
*/
/*
for (i = 0; i < itemNamesArray.length; i++) {
  //This for is looping through the elements of the array. 
  //Find each peice of relevant info from each array, and push it to an object. 
  //Use regex to remove each peice of relevant info
  let match1 = itemNamesArray[i].match(itemName);
  //The above code matches the item names, and the below code adds them to the salesObj.
  salesObj.itemObj = {};
  console.log(salesObj);
  salesObj[`Item ${itemNamesArray.length - i}`] = match1; //match1 is a string
  console.log(match1);
  //Do another push to the object. make it so that item3 has multiple key-values. it should be like:
  /*
  {item 3:
    {name: ...
    price: ...
    date sold: ...
    cost of shipping: ...
    paypal cut: ....
    }
  }
  */
//So each item should have an object inside of it.
/*
};
console.log(salesObj);
*/
const salePriceRegex = /(?<=Item ID.*)(\$\d+\.\d\d)(?=\+)/g;
for (i = 0; i < itemNamesArray.length; i++) {
    //This for is looping through the elements of the array. 
    //Find each peice of relevant info from each array, and push it to an object. 
    //Use regex to remove each peice of relevant info
    let match1 = itemNamesArray[i].match(itemNameRegex);
    //The above code matches the item names, and the below code adds them to the salesObj.
    salesObj.itemObj = {};
    let z = `Item ${itemNamesArray.length - i}`;
    salesObj[z] = {}; //match1 is a string
    const SO = salesObj[z]; //Used to not have to write out salesObj
    salesObj[z].Name = match1[0]; //Match1 seems to return an array, so [0] needed
    // SO.Price = 1;
    //Create a regex to match the price of each item.
    //Done, process is below, outside loop.
    // const salePriceRegex = /(?<=Item ID.*)(\$\d+\.\d\d)(?=\+)/g;

    SO.Price = sales.match(salePriceRegex)[i];
    //Now make a shipping price regex 
    const shippingCostRegex = /(?<=Shipping.*)(\$\d+\.\d\d)(?=\))/g;
    SO['Shipping Cost'] = sales.match(shippingCostRegex)[i];
    //Sale date regex.

    const salesDateRegex = /(?<=Sold on: )(.*?)(?=B)/g;
    SO['Sale Date'] = sales.match(salesDateRegex)[i];


    const shippingRefundRegex = /(\d+.\d\d?)(?= refunded)/g;
    SO['Shipping Refund'] = `$${itemNamesArray[i].match(shippingRefundRegex)}`;
    //Didnt need below code.
    // for (let j = 0; j < itemNamesArray.length;  j++) {
    //   console.log(itemNamesArray[j].match(shippingRefundRegex));
    //   SO['Shipping Refund'] = itemNamesArray[i].match(shippingRefundRegex);
    // };

    //Works!
    //Do another push to the object. make it so that item3 has multiple key-values. it should be like:
    /*
    {item 3:
      {name: ...
      price: ...
      date sold: ...
      cost of shipping: ...
      paypal cut: ....
      }
    }
    */
    //So each item should have an object inside of it.
};
console.log(salesObj);
// console.log(sales.match(salePriceRegex));
// //having touble making greedy matching again.
// const salePriceRegex = /(?<=SHIPPEDSHIPPED)(.*\$)(\d+\.\d\d)/g;
// //having touble making greedy matching again.
// console.log(sales.match(salePriceRegex));

// const salePriceRegex = /(?<=\$)(\d+\.\d\d)/g;
// console.log(sales.match(salePriceRegex));

// const salePriceRegex = /(?<=Item ID.*)(\$\d+\.\d\d\+)/g;
// console.log(sales.match(salePriceRegex));
// //Works!

// const salePriceRegex = /(?<=Item ID.*)(\$\d+\.\d\d)(?=\+)/g;
// console.log(sales.match(salePriceRegex));
// //Works!

// const shippingCostRegex = /(?<=Shipping.*)(\$\d+\.\d\d)(?=\))/g;
// console.log(sales.match(shippingCostRegex));
// // Works!

// const shippingCostRegex = /(?<=Sold on: )(.*?)(?=B)/g;
// console.log(sales.match(shippingCostRegex));
// // // Works!
// const shippingRefundRegex = /(\d+.\d\d?)(?= refunded)/g;
// for (let j = 0; j < itemNamesArray.length;  j++) {
//   console.log(itemNamesArray[j].match(shippingRefundRegex));
// };


//refunded