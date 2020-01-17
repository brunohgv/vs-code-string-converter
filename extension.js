const vscode = require('vscode');
const utils = require('./lib/utils')
const {
	camelToKebab,
	camelToSnake
} = require ('./lib/stringOperations')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let camelToKebabDisposable = vscode.commands.registerCommand('extension.camelToKebab', function () {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(camelToKebab(selectedText));
	});

	let camelToSnakeDisposable = vscode.commands.registerCommand('extension.camelToSnake', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(camelToSnake(selectedText));
	})

	context.subscriptions.push(
		camelToKebabDisposable,
		camelToSnakeDisposable
	);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
