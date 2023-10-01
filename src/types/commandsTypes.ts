export type CommandType = {
	[key in "default" | "help" | "ping"]: string;
};
