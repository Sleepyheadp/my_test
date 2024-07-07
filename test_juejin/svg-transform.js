export default {
	process() {
		return { code: "module.exports = {}" };
	},
	getCacheKey() {
		return "svg-transform"; // svg固定返回这个字符串
	},
};
