import Input from "@/components/input/input";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const now = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: "short",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	};
	const dateTime = now.toLocaleString("en-US", options).replaceAll(",", "");

	return (
		<>
			<p>Last login: {dateTime} on ttys800</p>

			<Input />
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
