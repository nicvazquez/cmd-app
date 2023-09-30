import { component$ } from "@builder.io/qwik";
import styles from "./input.module.css";

export default component$(() => {
	return (
		<div class={styles.container}>
			<span class={styles.arrow}>➜</span> <span class={styles.wave}>~</span>{" "}
			<input autoFocus type="text" />
		</div>
	);
});
