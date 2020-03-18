module.exports = {
	"*.{ts,js,json,yml,yaml}": "prettier --write",
	"cancel-redundant/**/*.*": [
		() => "pnpm run build --filter ./cancel-redundant",
		"git add ./cancel-redundant",
	],
	"search-replace-file/**/*.*": [
		() => "pnpm run build --filter ./search-replace-file",
		"git add ./search-replace-file",
	],
	"setup-dart/**/*.*": [
		() => "pnpm run build --filter ./setup-dart",
		"git add ./setup-dart",
	],
};
