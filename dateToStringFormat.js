const dateToStringFormat = (dateObj, dateFormat) => {
	const monthNames1 = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	const monthNames2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var month, days, year, delimiter1, delimiter2;
	let formatted_date;
	dateFormat = dateFormat.toLowerCase();
	//month rols
	if(dateFormat.indexOf('mmmm') >= 0) {
		month = monthNames2[dateObj.getMonth()].toLowerCase();
		delimiter1 = dateFormat.charAt(4);
	} else if(dateFormat.indexOf('mmm') >= 0) {
		month = monthNames1[dateObj.getMonth()].toLowerCase();
		delimiter1 = dateFormat.charAt(3);
	} else if(dateFormat.indexOf('mm') >= 0) {
		delimiter1 = dateFormat.charAt(2);
		if(dateObj.getMonth() + 1 <= 9) {
			month = '0' + (dateObj.getMonth() + 1);
		} else {
			month = dateObj.getMonth() + 1;
		}
	} else {
		month = dateObj.getMonth() + 1;
		delimiter1 = dateFormat.charAt(1);
	}
	if(dateFormat.indexOf('dd') >= 0) { //days rols
		delimiter2 = dateFormat.charAt(dateFormat.indexOf('d') + 2);
		if(dateObj.getDate() <= 9) {
			days = '0' + (dateObj.getDate());
		} else {
			days = dateObj.getDate();
		}
	} else {
		days = dateObj.getDate();
		delimiter2 = dateFormat.charAt(dateFormat.indexOf('d') + 1);
	}
	//years rols
	if(dateFormat.indexOf('yyyy') >= 0) {
		year = dateObj.getFullYear();
	} else if(dateFormat.indexOf('yy') >= 0) {
		year = dateObj.getFullYear() % 100;
	} else if(dateFormat.indexOf('y') >= 0) {
		year = dateObj.getFullYear();
	}
	formatted_date = month + delimiter1 + days + delimiter2 + year;
	return formatted_date;
}
module.exports = dateToStringFormat;