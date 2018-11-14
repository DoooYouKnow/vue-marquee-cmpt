import Vue from "vue";
import MarqueePulgin from "../src/index.js";
import App from "./dev.vue";

Vue.use(MarqueePulgin);

new Vue({
	el: "#app",
	render: h => h(App)
});
