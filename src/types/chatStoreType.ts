import { type QRL } from "@builder.io/qwik";
import { type CommandType } from "./commandsTypes";

export type ChatStoreType = {
	commands: CommandType[];
	pushCommand: QRL<(this: ChatStoreType, command: CommandType) => void>;
};
