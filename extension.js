const vscode = require('vscode');
const utils = require('./lib/utils')
const {
	camelToKebab,
	camelToSnake,
	camelToTitle,
	kebabToTitle,
	kebabToSnake,
	kebabToCamel,
	titleToCamel,
	titleToKebab,
	toLower,
	toUpper,
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

	let kebabToCamelDisposable = vscode.commands.registerCommand('extension.kebabToCamel', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(kebabToCamel(selectedText));
	})

	let kebabToSnakeDisposable = vscode.commands.registerCommand('extension.kebabToSnake', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(kebabToSnake(selectedText));
	})

	let kebabToTitleDisposable = vscode.commands.registerCommand('extension.kebabToTitle', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(kebabToTitle(selectedText));
	})

	let titleToCamelDisposable = vscode.commands.registerCommand('extension.titleToCamel', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(titleToCamel(selectedText));
	})

	let titleToKebabDisposable = vscode.commands.registerCommand('extension.titleToKebab', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(titleToKebab(selectedText));
	})

	let toLowerDisposable = vscode.commands.registerCommand('extension.toLower', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toLower(selectedText));
	})

	let toUpperDisposable = vscode.commands.registerCommand('extension.toUpper', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toUpper(selectedText));
	})

	context.subscriptions.push(
		camelToKebabDisposable,
		camelToSnakeDisposable,
		camelToTitleDisposable,
		kebabToCamelDisposable,
		kebabToSnakeDisposable,
		kebabToTitleDisposable,
		titleToCamelDisposable,
		titleToKebabDisposable,
		toLowerDisposable,
		toUpperDisposable
	);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
