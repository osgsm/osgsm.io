---
title: "@tailwindcss/typography 使用時のインラインコードのバッククォートを除去する"
date: "2023-01-13"
---

[以前紹介](./tailwindcss-typography)した `@tailwindcss/typography` を使うと、タイポグラフィが一括で設定されて、瞬時に読みやすいスタイリングを適用できます。

ただ、個人的に気になるのが、インラインコードの前後に挿入されるバッククォート（バックティック）。わかりやすいっちゃわかりやすいんですが、下図のようにダブルクォートで囲ったりすると 、なんか煩わしさがあります。

![バッククォート除去前のスクリーンショット](/assets/blog/tailwindcss-typography-remove-backticks/image1.png)

なので、今回はこのバッククォートを除去し、インラインコード部分には薄く背景色を敷くように変更していきます。

## バッククォートはどこから来たのか？

そもそもこのバッククォートはどこで設定されているのでしょうか？

答えは、 [tailwindcss-typography/styles.js](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js)  にあります。ここには`@tailwindcss/typography` のデフォルトスタイルが定義されています。

このコードを見てみると、次のような記述があります。

```js
module.exports = {
 DEFAULT: {
  css: [
   {
    // ...
    'code::before': {
     content: '"`"',
    },
    'code::after': {
     content: '"`"',
    },
```

これを上書きすれば、バッククォートを除去することができます。上書きするためには、 `tailwind.config.js` に設定項目を追記していきます。

## tailwind.config.js に追記する

[@tailwindcss/typography > Customizing the CSS](https://tailwindcss.com/docs/typography-plugin#customizing-the-css) に書かれているように、 `@tailwindcss/typography` から生成される CSS をカスタマイズするには、`tailwind.config.js` に追記する必要があります。

`tailwind.config.js` の `theme` セクションに次のように追記します。

```js title="tailwind.config.js" showLineNumbers
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.slate.100'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingTop: theme('spacing.[0.5]'),
              paddingBottom: theme('spacing.[0.5]'),
              paddingLeft: theme('spacing.[1.5]'),
              paddingRight: theme('spacing.[1.5]'),
              fontWeight: 'normal',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

ここでは、Tailwind CSS の設定値にアクセスするため `theme` ヘルパー関数を使用しています。 `theme` を使う場合は `typography` キーを関数として定義する必要があります。

今回はバッククォート除去の他に、追加のスタイリングとして、角丸設定やパディングの追加、フォントウェイトの変更も行っています。

これで、下図のようにバッククォートが除去され、背景色が追加されます。

![バッククォート除去後のスクリーンショット](/assets/blog/tailwindcss-typography-remove-backticks/image2.png)

スッキリしていい感じです！

## さいごに

今回のように、設定内容を簡単にカスタマイズできるので、 `@tailwindcss/typography` プラグインは、かゆいところに手が届きます。

`theme` 関数を使って、既存の設定値を使ってカスタマイズできるのもいいですね。

Tailwind CSS を使う前は、柔軟性がなくて不便そうなんて思っていましたが、決してそんなことはなく、むしろかなり柔軟で扱いやすいです。

Tailwind CSS、素晴らしいですね。

---

参考

- [@tailwindcss/typography - Tailwind CSS](https://tailwindcss.com/docs/typography-plugin#customizing-the-css)
- [tailwindcss-typography/styles.js at master · tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js)
