const vscode = require('vscode');
const utils = require('./lib/utils')
const operations = require ('./lib/stringOperations')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let camelToKebabDisposable = vscode.commands.registerCommand('extension.camelToKebab', function () {
		utils.applyToAllSelections(operations.camelToKebab);
	});

	let camelToSnakeDisposable = vscode.commands.registerCommand('extension.camelToSnake', function() {
		utils.applyToAllSelections(operations.camelToSnake);
	})

	let camelToTitleDisposable = vscode.commands.registerCommand('extension.camelToTitle', function() {
		utils.applyToAllSelections(operations.camelToTitle);
	})

	let kebabToCamelDisposable = vscode.commands.registerCommand('extension.kebabToCamel', function() {
		utils.applyToAllSelections(operations.kebabToCamel);
	})

	let kebabToSnakeDisposable = vscode.commands.registerCommand('extension.kebabToSnake', function() {
		utils.applyToAllSelections(operations.kebabToSnake);
	})

	let kebabToTitleDisposable = vscode.commands.registerCommand('extension.kebabToTitle', function() {
		utils.applyToAllSelections(operations.kebabToTitle);
	})

	let titleToCamelDisposable = vscode.commands.registerCommand('extension.titleToCamel', function() {
		utils.applyToAllSelections(operations.titleToCamel);
	})

	let titleToSnakeDisposable = vscode.commands.registerCommand('extension.titleToSnake', function() {
		utils.applyToAllSelections(operations.titleToSnake);
	})

	let titleToKebabDisposable = vscode.commands.registerCommand('extension.titleToKebab', function() {
		utils.applyToAllSelections(operations.titleToKebab);
	})

	let titleToDotDisposable = vscode.commands.registerCommand('extension.titleToDot', function() {
		utils.applyToAllSelections(operations.titleToDot);
	})

	let snakeToCamelDisposable = vscode.commands.registerCommand('extension.snakeToCamel', function() {
		utils.applyToAllSelections(operations.snakeToCamel);
	})

	let snakeToTitleDisposable = vscode.commands.registerCommand('extension.snakeToTitle', function() {
		utils.applyToAllSelections(operations.snakeToTitle);
	})

	let snakeToKebabDisposable = vscode.commands.registerCommand('extension.snakeToKebab', function() {
		utils.applyToAllSelections(operations.snakeToKebab);
	})

	let toLowerDisposable = vscode.commands.registerCommand('extension.toLower', function() {
		utils.applyToAllSelections(operations.toLower);
	})

	let toUpperDisposable = vscode.commands.registerCommand('extension.toUpper', function() {
		utils.applyToAllSelections(operations.toUpper);
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
		titleToDotDisposable,
		snakeToCamelDisposable,
		snakeToTitleDisposable,
		snakeToKebabDisposable,
		toLowerDisposable,
		toUpperDisposable
	);
}
exports.activate = activate;
