const stringToDateFormat = (stringDate, dateFormat) => {
	const monthNames1 = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	const monthNames2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dateFormat = dateFormat.toLowerCase();
	var delimiter, monthIndex, dayIndex, yearIndex, formatItems;
	if(dateFormat.indexOf('mmmm') >= 0) {
		delimiter = dateFormat.charAt(4);
		formatItems = dateFormat.split(delimiter);
		monthIndex = formatItems.indexOf("mmmm");
	} else if(dateFormat.indexOf('mmm') >= 0) {
		delimiter = dateFormat.charAt(3);
		formatItems = dateFormat.split(delimiter);
		monthIndex = formatItems.indexOf("mmm");
	} else if(dateFormat.indexOf('mm') >= 0) {
		delimiter = dateFormat.charAt(2);
		formatItems = dateFormat.split(delimiter);
		monthIndex = formatItems.indexOf("mm");
	} else if(dateFormat.indexOf('m') >= 0) {
		delimiter = dateFormat.charAt(1);
		formatItems = dateFormat.split(delimiter);
		monthIndex = formatItems.indexOf("m");
	}
	if(dateFormat.indexOf('dd') >= 0) { //days rols
		dayIndex = formatItems.indexOf("dd");
	} else if(dateFormat.indexOf('d') >= 0) {
		dayIndex = formatItems.indexOf("d");
	}
	//years rols
	if(dateFormat.indexOf('yyyy') >= 0) {
		yearIndex = formatItems.indexOf("yyyy");
	} else if(dateFormat.indexOf('yy') >= 0) {
		yearIndex = formatItems.indexOf("yy");
	} else if(dateFormat.indexOf('y') >= 0) {
		yearIndex = formatItems.indexOf("y");
	}
	var dateItems = stringDate.split(delimiter);
	for(i = 0; i < dateItems.length; i++) {
		for(j = 0; j < monthNames1.length; j++) {
			if(dateItems[i] == monthNames1[j]) {
				dateItems[i] = j + 1;
			}
		}
	}
	for(i = 0; i < dateItems.length; i++) {
		for(j = 0; j < monthNames2.length; j++) {
			if(dateItems[i] == monthNames2[j]) {
				dateItems[i] = j + 1;
			}
		}
	}
	var month = parseInt(dateItems[monthIndex]);
	month -= 1;
	var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
	return formatedDate;
}
module.exports = stringToDateFormat;