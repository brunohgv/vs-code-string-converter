const vscode = require('vscode');

function getSelectedText() {
    let editor = vscode.window.activeTextEditor;
    let selection = editor.selection;
    return editor.document.getText(selection).trim();
}

function writeInSelection(text) {
    let editor = vscode.window.activeTextEditor;
    let selection = editor.selection;
    
    editor.edit(editBuilder => {
        editBuilder.replace(selection, text);
    });
}

module.exports = {
    getSelectedText,
    writeInSelection,
}