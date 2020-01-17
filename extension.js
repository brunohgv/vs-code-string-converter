const vscode = require('vscode');
const utils = require('./lib/utils')
const {
	camelToKebab
} = require ('./lib/stringOperations')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('extension.camelToKebab', function () {

		const selectedText = utils.getSelectedText();
		utils.writeInSelection(camelToKebab(selectedText));

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
