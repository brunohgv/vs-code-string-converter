const vscode = require('vscode');

function applyToAllSelections(replaceFunction) {
    let editor = vscode.window.activeTextEditor;
    let selections = editor.selections;
    let selectionContent = selections.map(selection => editor.document.getText(selection).trim())

    editor.edit(editBuilder => {
        selections.forEach((selection,index) => {
            editBuilder.replace(selection, replaceFunction(selectionContent[index]));
        });
    });
}

module.exports = {
    applyToAllSelections
}