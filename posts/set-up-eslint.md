---
title: '既存の Next.js プロジェクトに ESLint を導入する'
date: '2023-01-05'
---

Next.js では、簡単に ESLint を導入し、設定することができます。

今回は、必要最低限のセットアップと、 Visual Studio Code で自動修正するための設定を行っていきます。

## ESLint のセットアップ

まずは、次のスクリプトを `package.json` に追加します。

```json
"scripts": {
  "lint": "next lint"
}
```

次に `yarn lint` もしくは `npm run lint` で実行します。

```shell
yarn lint
```

すると、次のように、どのように ESLint を設定するかが問われます。

```shell
? How would you like to configure ESLint? https://nextjs.org/docs/basic-features/eslint
❯  Strict (recommended)
   Base
   Cancel
```

この質問に Cancel 以外で答えると、 `eslint` と `eslint-config-next` が自動的にインストールされ、 `.eslintrc.json` が自動で作成されます。

ちなみに `eslint-config-next` というのは、 Next.js で ESLint を使うために適した設定が含まれているプラグインです。

`yarn lint` 実行時に表示される質問の選択肢には、次のような違いがあります。

- **Strict**: Next.js の基本設定に加えて、より厳しい Core Web Vitals のルールセットを含む ※公式推奨
- **Base**: Next.js の基本設定のみ
- **Cancel**: 自身で設定ファイルを作成したいときに選ぶ

これで、 ESLint を使うための最低限の設定は完了です。

## ESLint を使ってみる

`yarn lint` で ESLint を実行してみます。

```shell
% yarn lint
yarn run v1.22.19
$ next lint
✔ No ESLint warnings or errors
✨  Done in 1.91s.
```

問題がなければ、このように `✔ No ESLint warnings or errors` と表示されます。

次に、エラーや警告があるケースを試してみます。

次のようにコンポーネント内で `<img>` や `<a>` を使い、 ESLint を実行します。

```jsx
const Home = ({ allPostsData }) => {
 return (
  <Layout home>
   {/* ... */}
   <section>
    {/* ... */}
    <img src="" alt="" />
    <a href="/">home</a>
   </section>
  </Layout>
 );
};
```

```shell
% yarn lint
yarn run v1.22.19
$ next lint

./pages/index.js
36:5  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Use `<Image />` from `next/image` instead to utilize Image Optimization. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
37:5  Error: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages  @next/next/no-html-link-for-pages
```

ひとつめの警告では、 `<img>` じゃなくて `<Image />` を使いなさいと怒られます。ふたつめのエラーでは、 `/` へのリンクでは `<a>` ではなく `<Link />` を使いなさいと怒られます。

このように `yarn lint` と実行すると、改善箇所を教えてくれます。しかし、その都度コマンドを実行するのは面倒ですよね。

これを解決するためには、使用しているエディターの設定を変更する必要があります。

## Visual Studio Code の設定

今回は Visual Studio Code での設定方法を解説します。

まずは、 [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) から拡張機能をインストールし、有効化します。

すると下図のようにエディター内に警告などが表示されます。

![Visual Studio Code でのエラー表示](/assets/blog/set-up-eslint/image1.png)

これでも十分便利ですが、さらに自動修正可能なものはファイル保存時に修正されるように設定していきます。

ファイル保存時に自動修正したい場合は、Visual Studio Code の `settings.json` に次の内容を追加します。

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

これで、自動修正可能な ESLint エラーが、ファイル保存時に見つかった場合、自動的に修正されるようになります。

試しに、自動修正可能な ESLint エラーを追加してみます。 JSX 内のどこかで次のように `rel="noreferrer"` を書かずに `target="_blank"` を使ってみましょう。

```jsx
<a href="http://example.com" target="_blank">
 test
</a>
```

ファイルを保存すると、次のように自動的に `rel="noreferrer"` が付与されます。

```jsx
<a href="http://example.com" target="_blank" rel="noreferrer">
 test
</a>
```

ちなみに、このルールは [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) によるものですが、`eslint-plugin-react` は `eslint-config-next` 内で使用されているためエラーになります。

## さいごに

以上で、 ESLint のセットアップができました。

今回は最低限の設定しかしていませんが、一旦この状態で運用してみて、追加設定の必要を感じたらルールの追加などを行っていくつもりです。

ESLint の設定が完了したので、次は Prettier を導入する予定です。  
（2023/01/06 追記） Prettier の導入手順を書きました。→ [既存の Next.js プロジェクトに Prettier を導入する](./set-up-prettier)

---

参考

- [Basic Features: ESLint | Next.js](https://nextjs.org/docs/basic-features/eslint)
- [eslint-plugin-react - npm](https://www.npmjs.com/package/eslint-plugin-react)
- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
