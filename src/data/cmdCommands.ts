import { type CommandType } from "@/types";

export const cmdCommands: CommandType = {
	help: "available commands: date, time, user",
	date: new Date().toLocaleDateString(),
	time: new Date().toLocaleTimeString(),
	user: "root",
};
