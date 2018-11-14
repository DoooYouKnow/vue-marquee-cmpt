<template>
    <div class="marquee-container" :style="{width: width+'px'}">
        <div class="scroll-text" :style="styleObject">
            <span ref="content">
                {{content}}
            </span>
            <span v-if="isContentMore">
                {{content}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vue-marquee-cmpt',
    props: ['width', 'content'],
    data() {
        return {
            styleObject: {
                width: ''
            },
            isContentMore: false,
        };
    },
    mounted() {
        let clientWidth = this.$refs.content.clientWidth;
        this.isContentMore = clientWidth >= this.width;
        this.styleObject.width = clientWidth * 2 + 'px';
    }
};
</script>

<style scoped lang="less">
.marquee-container {
	margin: 50px auto;
	padding: 10px 0;
	color: #ee4000;
	background-color: #f0f8ff;
	white-space: nowrap;
	overflow: hidden;
	@keyframes scrollText {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-304px);
		}
	}
	.scroll-text {
		font-size: 0;
		> span {
			font-size: 16px;
			display: inline-block;
		}
		animation: scrollText 5s infinite linear;
	}
}
</style>