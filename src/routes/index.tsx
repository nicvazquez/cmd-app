import ArrowWave from "@/components/arrowWave/arrowWave";
import Form from "@/components/form/form";
import { dateTime } from "@/utils/";
import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const chatStore = useStore({
		commands: [],
		pushCommand: $(function (this, command) {
			this.commands.push(command);
		}),
	});
	const userMessage = useSignal("");

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

			<Form userMessage={userMessage} chatStore={chatStore} />
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
