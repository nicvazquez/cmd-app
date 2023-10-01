import ArrowWave from "@/components/arrowWave/arrowWave";
import Form from "@/components/form/form";
import { dateTime } from "@/utils/";
import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

interface Command {
	command: string;
	description: string;
}

export default component$(() => {
	const chatStore = useStore({
		commands: [] as Command[],
		pushCommand: $(function (this: { commands: Command[] }, command: Command) {
			this.commands.push(command);
		}),
	});

	return (
		<>
			<p>Last login: {dateTime} on ttys800</p>

			{chatStore.commands.map((command, index) => (
				<div class="my-5px" key={index}>
					<div class="d-flex align-center g-05">
						<ArrowWave /> {command.command}
					</div>
					<p>{command.description}</p>
				</div>
			))}

			<Form chatStore={chatStore} />
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
