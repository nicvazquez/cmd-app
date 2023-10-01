import { type CommandType } from "@/types";

const getCurrentDate = () => new Date().toLocaleDateString();
const getCurrentTime = () => new Date().toLocaleTimeString();

export const cmdCommands: CommandType = {
	help: "available commands: date, time, datetime, user",
	date: getCurrentDate(),
	time: getCurrentTime(),
	datetime: `${getCurrentDate()} ${getCurrentTime()}`,
	user: "root",
};
