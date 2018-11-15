import Marquee from "./components/Marquee.vue";

var MarqueePulgin = {};
MarqueePulgin.install = function(Vue, options) {
	Vue.component("vue-marquee-cmpt", Marquee);
};

export default MarqueePulgin;
