module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		["@babel/preset-react", { runtime: "automatic" }], // 自动引入 React
		"@babel/preset-typescript",
	],
};
