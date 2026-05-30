import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const cmd = vscode.commands.registerCommand('sendLineToTerminal.send', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const line = editor.document.lineAt(editor.selection.active.line).text;

    // アクティブなターミナルがなければ新規作成
    const terminal = vscode.window.activeTerminal ?? vscode.window.createTerminal();
    terminal.show(true); // preserveFocus=true でエディタのフォーカスを保持
    terminal.sendText(line, false); // false = Enterを送らない
  });

  context.subscriptions.push(cmd);
}

export function deactivate() {}
