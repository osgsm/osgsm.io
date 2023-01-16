---
title: "既存の Next.js プロジェクトに Prettier を導入する"
date: "2023-01-06"
---

[前回は ESLint を導入した](./set-up-eslint)ので、今回は Prettier を導入していきます。

Prettier と ESLint を併用する際のコンフリクトの解消や、 Visual Studio Code での自動フォーマット設定も行っていきます。

## パッケージのインストール

ESLint にはコードフォーマット用のルールも含まれていて、 Prettier と併用するときに、コンフリクトが生じることがあります。

このコンフリクトを解消するためには、 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) を使います。これは Prettier とコンフリクトする可能性のある ESLint ルールを無効にするためのものです。

なので、今回は Prettier 本体である `prettier` と、コンフリクト解消用の `eslint-config-prettier` の2つのパッケージをインストールします。

```shell title="Terminal"
yarn add -D prettier eslint-config-prettier
```

## `eslint-config-prettier` の設定

 次に、コンフリクトするルールを無効にするために、 `.eslintrc.json` の `"extends"` に `"prettier"` を追加します。

```json title=".eslintrc.json"
{
 "extends": ["next/core-web-vitals", "prettier"]
}
```

`"prettier"` は最後に書く必要があるので要注意。なぜなら、他の設定を上書きするからです。

### コンフリクトがないかをチェックする

`eslint-config-prettier` は、 CLI ツールも提供しており、これを使うことでコンフリクトの有無をチェックできます。

```shell title="Terminal"
yarn eslint-config-prettier '**/*.{js,jsx,ts,tsx}'
```

現状では、特にルールの追加などを行っていないので、コンフリクトは見つかりません。コンフリクトがない場合、次のように表示されます。

```shell title="Terminal"
No rules that are unnecessary or conflict with Prettier were found.
```

### コンフリクトがある場合

それでは、試しにコンフリクトするルールを追加してみましょう。 `.eslintrc.json` に次のルールを追加します。

```json title=".eslintrc.json" {3-5}
{
 "extends": ["next/core-web-vitals", "prettier"],
 "rules": {
  "indent": "error"
 }
}
```

もう一度 `eslint-config-prettier` を実行してみます。

```shell title="Terminal"
% yarn eslint-config-prettier '**/*.{js,jsx,ts,tsx}'
The following rules are unnecessary or might conflict with Prettier:

- indent
```

すると、コンフリクトするルールがリストアップされます。このルールは不要なので、 `.eslintrc.json` から削除しておきましょう。

これで `eslint-config-prettier` に関する設定は完了です。次は Prettier の設定に進みます。

## Prettier の設定

Prettier の設定には、 `.prettierrc.json` と `.prettierignore` というファイルを使います。前者は設定ファイルで、後者はフォーマットしたくないファイルを指定するものです。

まずは、それらのファイルを作成します。

```shell title="Terminal"
touch .prettierrc.json .prettierignore
```

### `.prettierrc.json`

`.prettierrc.json` の内容は、次のようにします。

```json title=".prettierrc.json"
{
  "singleQuote": true
}
```

基本的にデフォルトの値を使いたいので、 `"singleQuote"` のみ `true` にしています。 [Options · Prettier](https://prettier.io/docs/en/options.html) に設定可能な項目がリストアップされているので、これを参考に適宜調整してください。

### `.prettierignore`

`.prettierignore` の内容は、次のようにします。

```none title=".prettierignore"
node_modules
.next
yarn.lock
public
posts
```

これで、リストアップしたファイルやディレクトリ内のファイルはフォーマットされません。

これで Prettier の設定は完了です。

## Prettier を使う

### `prettier --write`

Prettier を使うには、次のコマンドを実行します。

```shell title="Terminal"
yarn prettier --write .
```

これでフォーマット対象のファイルがすべてフォーマットされます。

### `prettier --check`

次のように `--check` オプションを使うと、フォーマットされているかどうかをチェックできます。このとき、ファイルは上書きされません。

```shell title="Terminal"
yarn prettier --check .
```

すべてフォーマット済みであれば次のように表示されます。

```shell title="Terminal"
All matched files use Prettier code style!
```

### `package.json` に script を追加する

Prettier を実行するときに `yarn prettier --write .` と入力するのは手間なので、 `package.json` に script を追加しましょう。

```json title="package.json" {6}
"scripts": {
 "dev": "next dev",
 "build": "next build",
 "start": "next start",
 "lint": "next lint",
 "format": "prettier --write ."
},
```

こうすることで `yarn format` と実行するだけで、フォーマット対象のファイルがすべてフォーマットされます。

さらに、エディターの設定を行うと、ファイル保存時に自動フォーマットされてとても便利です。なので、その設定も行っていきましょう。

## Visual Studio Code の設定

今回は Visual Studio Code での設定方法を解説します。

まずは、 [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) から拡張機能をインストールし、有効化します。

次に、デフォルトのフォーマッターとして Prettier を使うために、 Visual Studio Code の `settings.json` に次の項目を追加します。併せて `"editor.formatOnSave"` を `true` にしています。

```json title="settings.json"
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

これでファイル保存時に自動的にフォーマットされます。

## さいごに

前回 ESLint を設定し、今回は Prettier を設定したので、ようやく環境が整いました。

次は、 Tailwind CSS を使ってスタイリングを行っていく予定です。

---

参考

- [Basic Features: ESLint | Next.js](https://nextjs.org/docs/basic-features/eslint#prettier)
- [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.](https://github.com/prettier/eslint-config-prettier#cli-helper-tool)
- [Install · Prettier](https://prettier.io/docs/en/install.html)
- [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
