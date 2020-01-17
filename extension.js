const vscode = require('vscode');
const utils = require('./lib/utils')
const {
	camelToKebab,
	camelToSnake,
	camelToTitle
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

	let camelToTitleDisposable = vscode.commands.registerCommand('extension.camelToTitle', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(camelToTitle(selectedText));
	})

	context.subscriptions.push(
		camelToKebabDisposable,
		camelToSnakeDisposable,
		camelToTitleDisposable
	);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
