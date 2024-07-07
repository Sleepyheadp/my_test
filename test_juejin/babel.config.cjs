module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }], // 把代码转换为当前node版本支持的代码,支持ESModule
		["@babel/preset-react", { runtime: "automatic" }], // 自动引入 React
		"@babel/preset-typescript",
	],
};
