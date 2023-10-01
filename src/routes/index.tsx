import ArrowWave from "@/components/arrowWave/arrowWave";
import Form from "@/components/form/form";
import { type ChatStoreType } from "@/types/chatStoreType";
import { dateTime } from "@/utils/";
import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const chatStore = useStore<ChatStoreType>({
		commands: [],
		pushCommand: $(function (this, command) {
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
					<p class="mt-5px">{command.description}</p>
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
