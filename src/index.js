module.exports = function toReadable (number) {
    const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if (number < 20){
    return ones[number];
    } else if (number < 100 && number % 10 === 0) {
    	return tens[number / 10]
    } else if (number < 100) {
        return tens[Math.floor(number/10)] + ' ' + ones[number % 10];
    } else if (number % 100 === 0) {
    	return ones[number / 100] + ' hundred';
	} else if (number % 10 === 0) {
    	return ones[Math.floor(number / 100)] + ' hundred ' + tens[number % 100 / 10];	
    } else if (number % 100 < 20) {
    	return ones[Math.floor(number / 100)] + ' hundred ' + ones[number % 100];	
	} else if (number < 1000) {
		return ones[Math.floor(number/100)] + ' hundred ' + tens[Math.floor(number % 100 / 10)] + ' ' + ones[(number % 100) % 10];
  }
return number;
}