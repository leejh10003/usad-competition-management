import moment from "moment";

var timezone = moment.tz.guess();
var timezoneFormatted = timezone
	.split('/')
	.map((t) => t.replace('_', ' '))
	.reverse()
	.join(', ');
export { timezone, timezoneFormatted };