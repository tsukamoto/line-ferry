# Line Ferry

Cursor / VSCode 拡張機能です。

カーソル行のテキストをアクティブなターミナルに貼り付けます（Enter は送らない）。  
Claude Code on Git Bash など、日本語入力がターミナル上でやり難い環境向けの拡張です。

## キーバインド

| キー | 動作 |
|---|---|
| `Ctrl+Enter` | 送信のみ（フォーカスはエディタに残る） |
| `Ctrl+Alt+Enter` | 送信＋ターミナルへフォーカス移動 |

## 使い方

### 確認してから実行したい場合

```
Ctrl+Enter          送信のみ、エディタに留まる
（内容を目視確認）
Ctrl+`              ターミナルへフォーカス移動（VSCode 標準）
Enter               実行
Ctrl+1              エディタへ戻る（VSCode 標準）
```

### 即座にターミナルへ移りたい場合

```
Ctrl+Alt+Enter      送信＋ターミナルへフォーカス移動
Enter               実行
Ctrl+1              エディタへ戻る（VSCode 標準）
```

## インストール

[Releases](https://github.com/tsukamoto/line-ferry/releases) から `line-ferry-x.x.x.vsix` をダウンロードして、以下いずれかの方法で導入します。

### 方法1：コマンドパレット（最も手堅い）

```
Ctrl+Shift+P
  └ 「install vsix」と入力
    └ Extensions: Install from VSIX... を選択
      └ .vsix ファイルを選択
```

### 方法2：ターミナル

```bash
cursor --install-extension line-ferry-x.x.x.vsix
```

`cursor` コマンドが効かない場合は、コマンドパレットで `Shell Command: Install 'cursor' command in PATH` を先に実行します。ファイル名はフルパスでも、`.vsix` があるフォルダでターミナルを開けば相対パスでも通ります。

### 方法3：右クリック

`.vsix` を含むフォルダを Cursor で開いている状態で、エクスプローラーのファイル一覧から `.vsix` を右クリックして導入します。

### 方法4：拡張タブのメニュー

Cursor のバージョンによってメニューの位置が異なるか、項目が見当たらない場合があります。見つからない場合は方法1のコマンドパレットを使ってください。

```
拡張タブ（Ctrl+Shift+X）
  └ 右上「…」→ Install from VSIX...
    └ .vsix ファイルを選択
```

どの方法でも、導入後に再起動を促されたら従い、INSTALLED 一覧に Line Ferry が表示されれば成功です。

## ビルド方法（開発者向け）

```bash
npm install
npm run compile   # out/extension.js が生成される
vsce package      # line-ferry-x.x.x.vsix が生成される
```
