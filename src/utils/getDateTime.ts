const now = new Date();
const options: Intl.DateTimeFormatOptions = {
	weekday: "short",
	month: "short",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false,
};
export const dateTime = now
	.toLocaleString("en-US", options)
	.replaceAll(",", "");
