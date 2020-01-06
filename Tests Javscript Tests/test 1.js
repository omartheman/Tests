function ebaySold(string1) {
  const priceLine = string1.match(/"displayPrice":{"_type":"TextualDisplayValue","textSpans":\[{"text":"\$(.+)",/);
  console.log(priceLine);
  return (priceLine);
};

const string102 = '"displayPrice":{"_type":"TextualDisplayValue","textSpans":[{"text":"$13.00",';

ebaySold(string102);

