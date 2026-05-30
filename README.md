# Send Line to Terminal

カーソル行のテキストをアクティブなターミナルに貼り付けます（Enterは送らない）。  
Claude Code on Git Bash など、日本語入力がターミナル上でやり難い環境向けの拡張です。

## 使い方

1. エディタで送りたい行にカーソルを置く
2. `Ctrl+Shift+Enter` を押す
3. ターミナルにテキストが貼り付けられる（Enterは押されない）
4. 内容を目視確認してから `Enter`

## インストール（開発モード）

```bash
cd line-ferry
npm install
npm run compile
```

その後 Cursor で `F5` を押すか、`Extensions: Install from VSIX...` でパッケージして導入。

## VSIX としてパッケージする場合

```bash
npm install -g @vscode/vsce
vsce package
# → line-ferry-0.0.1.vsix が生成される
```

Cursor の拡張タブ右上メニュー → `Install from VSIX...` で導入。
