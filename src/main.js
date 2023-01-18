import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import "bootswatch/dist/zephyr/bootstrap.min.css";


const app = HMR(App, { target: document.body }, "Policard");

export default app;
