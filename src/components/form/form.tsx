import { type Signal, component$, $, useSignal } from "@builder.io/qwik";
import { cmdCommands } from "@/data";
import { type CommandType } from "@/types";
import ArrowWave from "../arrowWave/arrowWave";

interface Props {
	userMessage: Signal<string>;
	chatStore: any;
}
export default component$<Props>(({ userMessage, chatStore }) => {
	const message = useSignal("");

	const handleSubmit = $(() => {
		const commandDescription: string =
			cmdCommands[message.value as keyof CommandType];

		userMessage.value = message.value;

		const command = {
			command: message.value,
			description: commandDescription,
		};

		chatStore.pushCommand(command);
	});

	return (
		<form
			class={`d-flex align-center g-05 my-5px`}
			onSubmit$={handleSubmit}
			preventdefault:submit
		>
			<ArrowWave />{" "}
			<input
				bind:value={message}
				onChange$={(e) => (message.value = e.target.value)}
				autoFocus
				type="text"
			/>
		</form>
	);
});
