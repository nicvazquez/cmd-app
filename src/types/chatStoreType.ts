import { type QRL } from "@builder.io/qwik";
import { type CommandType } from "./commandType";

export type ChatStoreType = {
	commands: CommandType[];
	pushCommand: QRL<(this: ChatStoreType, command: CommandType) => void>;
};
