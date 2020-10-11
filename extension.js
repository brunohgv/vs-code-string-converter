const vscode = require('vscode');
const utils = require('./lib/utils')
const {
	toLower,
	toUpper,
	toCamel,
	toKebab,
	toSnake,
	toTitle,
} = require ('./lib/stringOperations')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let camelToKebabDisposable = vscode.commands.registerCommand('extension.camelToKebab', function () {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toKebab(selectedText));
	});

	let camelToSnakeDisposable = vscode.commands.registerCommand('extension.camelToSnake', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toSnake(selectedText));
	})

	let camelToTitleDisposable = vscode.commands.registerCommand('extension.camelToTitle', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toTitle(selectedText));
	})

	let kebabToCamelDisposable = vscode.commands.registerCommand('extension.kebabToCamel', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toCamel(selectedText));
	})

	let kebabToSnakeDisposable = vscode.commands.registerCommand('extension.kebabToSnake', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toSnake(selectedText));
	})

	let kebabToTitleDisposable = vscode.commands.registerCommand('extension.kebabToTitle', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toTitle(selectedText));
	})

	let titleToCamelDisposable = vscode.commands.registerCommand('extension.titleToCamel', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toCamel(selectedText));
	})

	let titleToSnakeDisposable = vscode.commands.registerCommand('extension.titleToSnake', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toSnake(selectedText));
	})

	let titleToKebabDisposable = vscode.commands.registerCommand('extension.titleToKebab', function() {
		const selectedText = utils.getSelectedText();
		utils.writeInSelection(toKebab(selectedText));
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
		titleToSnakeDisposable,
		titleToKebabDisposable,
		toLowerDisposable,
		toUpperDisposable,
	);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
