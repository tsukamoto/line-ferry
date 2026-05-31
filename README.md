# Line Ferry

Cursor / VSCode 拡張機能です。

カーソル行のテキストをアクティブなターミナルに貼り付けます（Enter は送らない）。  
Claude Code on Git Bash など、日本語入力がターミナル上でやり難い環境向けの拡張です。

## 使い方

1. エディタで送りたい行にカーソルを置く
2. `Ctrl+Shift+Enter` を押す
3. ターミナルにテキストが貼り付けられる（Enter は押されない）
4. 内容を目視確認してから `Enter`

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
