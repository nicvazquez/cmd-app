import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
	return (
		<header class={styles.header}>
			<div>
				<div class={`${styles.circle} ${styles.redCircle}`}></div>
				<div class={`${styles.circle} ${styles.yellowCircle}`}></div>
				<div class={`${styles.circle} ${styles.greenCircle}`}></div>
			</div>

			<p>user -- user@root - ~ - -zsh</p>
		</header>
	);
});
