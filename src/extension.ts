import * as vscode from 'vscode';

// 元の行の位置を記憶する
let lastPosition: { uri: vscode.Uri; line: number } | null = null;

function getOrCreateTerminal(): vscode.Terminal {
  return vscode.window.activeTerminal ?? vscode.window.createTerminal();
}

export function activate(context: vscode.ExtensionContext) {

  // Ctrl+Enter: 送信のみ、フォーカスはエディタに残す
  const cmdSend = vscode.commands.registerCommand('lineFerry.send', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const line = editor.document.lineAt(editor.selection.active.line).text;
    const terminal = getOrCreateTerminal();
    terminal.show(true); // preserveFocus=true でエディタのフォーカスを保持
    terminal.sendText(line, false); // false = Enter を送らない
  });

  // Ctrl+Alt+Enter: 送信＋ターミナルへフォーカス移動、元の行を記憶
  const cmdSendAndFocus = vscode.commands.registerCommand('lineFerry.sendAndFocus', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    // 元の位置を記憶
    lastPosition = {
      uri: editor.document.uri,
      line: editor.selection.active.line,
    };

    const line = editor.document.lineAt(editor.selection.active.line).text;
    const terminal = getOrCreateTerminal();
    terminal.show(false); // preserveFocus=false でターミナルへフォーカス移動
    terminal.sendText(line, false); // false = Enter を送らない
  });

  context.subscriptions.push(cmdSend, cmdSendAndFocus);
}

export function deactivate() {}
