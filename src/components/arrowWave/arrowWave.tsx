import { component$ } from "@builder.io/qwik";
import styles from "./arrowWave.module.css";

export default component$(() => {
	return (
		<>
			<span class={styles.arrow}>➜</span> <span class={styles.wave}>~</span>
		</>
	);
});
