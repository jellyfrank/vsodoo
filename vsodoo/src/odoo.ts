
import * as vscode from "vscode";

export class Completion implements vscode.CompletionItemProvider {
    // provide completion items
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {

        // get the current word
        let wordAtPosition = document.getWordRangeAtPosition(position);
        var currentWord = '';
        if (wordAtPosition && wordAtPosition.start.character < position.character) {
            var word = document.getText(wordAtPosition);
            currentWord = word.substr(0, position.character - wordAtPosition.start.character);
        }

        // get suggestion results
        return new Promise(function (resolve, reject) {
            Promise.all([
                // getLuaKeywordsSuggestions(currentWord),
                // getXMakeCommandsSuggestions(currentWord)
                "odoo_test_funct"
            ]).then(function (results) {
                var suggestions = Array.prototype.concat.apply([], results);
                resolve(suggestions);
            }).catch(err => { reject(err); });
        });
    }
}