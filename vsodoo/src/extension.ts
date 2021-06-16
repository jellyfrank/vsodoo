// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Completion } from './odoo';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let log = vscode.window.createOutputChannel("vsodoo/log");
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	log.show(true);
	log.appendLine('loading vsodoo extensions...');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.odoo', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		
		// console.log("启动调试...");
		// let editor = new vscode.WorkspaceEdit();
		// let uri = new vscode.Uri();
		// editor.createFile(new vscode.Uri());
		// vscode.commands.executeCommand("fileExplorer.copy",[".","."]);
		// vscode.commands.executeCommand("explorer.newFile","test.file");

		// vscode.window.showInformationMessage("123");


	});

	context.subscriptions.push(disposable);

	//add icons
	let odoobutton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 5);
	odoobutton.text = `$(mark-github)`;
	odoobutton.tooltip = "odoo extension ready.";
	odoobutton.show();

	//register completion
	// vscode.languages.registerCompletionItemProvider("python",new Completion());

}

// this method is called when your extension is deactivated
export function deactivate() { }
