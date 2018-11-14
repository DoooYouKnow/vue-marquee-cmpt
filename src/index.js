import Marquee from "./components/Marquee.vue";

var MarqueePulgin = {};
MarqueePulgin.install = function(Vue, options) {
	Vue.component("vue-marquee-cmpt", Marquee);
};

if (typeof window !== undefined && window.Vue) {
	Vue.component(Marquee.name, Marquee);
}

export default MarqueePulgin;
