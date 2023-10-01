import { component$, $, useSignal } from "@builder.io/qwik";
import { cmdCommands } from "@/data";
import { type CommandType } from "@/types";
import ArrowWave from "../arrowWave/arrowWave";
import { type ChatStoreType } from "@/types/chatStoreType";

interface Props {
	chatStore: ChatStoreType;
}
export default component$<Props>(({ chatStore }) => {
	const message = useSignal("");

	const handleSubmit = $(() => {
		if (message.value.length === 0) return;

		const commandDescription: string =
			cmdCommands[message.value as keyof CommandType];

		const command: CommandType = {
			command: message.value,
			description:
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				commandDescription ?? `zsh: command not found: ${message.value}`,
		};

		chatStore.pushCommand(command);

		message.value = "";
	});

	return (
		<form
			class={`d-flex align-center g-05 my-5px`}
			onSubmit$={handleSubmit}
			preventdefault:submit
		>
			<ArrowWave />
			<input
				bind:value={message}
				onChange$={(e) => (message.value = e.target.value)}
				autoFocus
				type="text"
			/>
		</form>
	);
});
