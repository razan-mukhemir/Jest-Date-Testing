const add = (dateObj, mount) => {
	mount = mount.toLowerCase();
	if(mount.indexOf('d') >= 0) {
		var daysNum = mount.match(/(\d+)/)
		dateObj.setTime(dateObj.getTime() + daysNum[0] * 86400000);
		return dateObj.getDate();
	} else if(mount.indexOf('h') >= 0) {
		var hoursNum = mount.match(/(\d+)/)
		dateObj.setTime(dateObj.getTime() + (hoursNum[0] * 60 * 60 * 1000));
		return dateObj.getHours();
	}
}
module.exports = add;