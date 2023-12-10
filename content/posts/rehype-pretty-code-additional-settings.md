---
title: 'Rehype Pretty Code で、コードブロックに行番号を付け、特定の行をハイライトする'
date: '2023-01-19'
---

[前回](./introducing-rehype-pretty-code)は、 Rehype Pretty Code (`rehype-pretty-code`) を使ってシンタックスハイライトを適用し、テーマを変更するところまで行いました。

今回は、さらに踏み込んで、行番号を付けたり、コードブロック内の特定の行をハイライトする方法を紹介します。

Rehype Pretty Code では、シンタックスハイライトされるコードブロックの設定を、 meta string を通して行えます。

例えば、次のようにマークダウンを書きます。 Meta string とは `showLineNumbers title="multiply.js" {3}` の部分を指します。

````none title="sample-post.md" {1}
```js showLineNumbers title="add.js" {3}
const add = (a, b) => a + b

multiply(2, 3) // 5
```
````

上のマークダウンは、次のように表示されます。

```js showLineNumbers title="add.js" {3}
const add = (a, b) => a + b;

add(2, 3); // 5
```

ただし、 Rehype Pretty Code は、スタイリング部分は提供してくれないので、別途 CSS を書く必要があります。また、 meta string を書くだけでは機能しないところもあります。

なので、以下では、その設定とスタイリングの方法を紹介します。

本記事の CSS は、 Tailwind CSS の `@apply` を使用しています。また、[以前紹介した](./prettier-plugin-tailwindcss) `@tailwindcss/typography` のスタイルが適用されている前提で進めていきます。

## 今回の設定で得られる結果

実際の作業に入る前に、今回の設定で得られる結果として、コードブロックがどのように表示されるかをお見せします。

![スタイリング適用後のコードブロックのサンプル](/assets/blog/rehype-pretty-code-additional-settings/image1.png)

このようにコードブロック用のタイトルがあるときは、エディターのタブのような見た目になるようにスタイリングしています。

それでは、実際の作業に入っていきましょう。まずは CSS を適用するための準備から。

## Rehype Pretty Code に CSS を適用する準備

はじめに、CSS を記述するためのファイル（`styles/syntax-highlighting.css`）を作成します。

```shell title="Terminal"
touch styles/syntax-highlighting.css
```

そして、このファイルを `styles/global.css` から読み込みます。

```css title="styles/global.css" {5}
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './syntax-highlighting.css';
```

これで CSS を適用する準備が整ったので、 CSS の中身を書いていきましょう。

## コードブロック全体のスタイリング

Rehype Pretty Code を適用後は、コードブロックをラップする `div` 要素に `data-rehype-pretty-code-fragment` という data attribute が付きます。なので、次のようにコードブロック全体をスタイリングできます。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment] {
  /* ... */
}
```

今回は、次のようにスタイリングしています。併せて、子要素の `pre` にもスタイルを適用しています。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment] {
  @apply my-5 overflow-hidden rounded-lg border border-gray-600 bg-gray-900;
}

div[data-rehype-pretty-code-fragment] > pre {
  @apply m-0 rounded-lg bg-gray-900 px-0;
}
```

適用後は次のような見た目になります。

![コードブロック全体のスタイリング後の状態](/assets/blog/rehype-pretty-code-additional-settings/image2.png)

`px-0` で横側の `padding` を `0` にしているのは、行のハイライトをコードブロック全体に行き渡らせるためです。次の工程で行ごとに `padding` を当てていきます。

では、次にコードブロックの行をスタイリングしていきます。

## 行のスタイリング

Rehype Pretty Code では、コードブロック内の各行に対して `line` というクラス名が追加されます。なので、行のスタイリングは、 `line` に対して行っていきます。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment] .line {
  @apply border-l-[3px] border-transparent px-4;
}
```

ここで、透明の `border` を適用しているのは、ハイライト時に色を付けるためです。

現状では、次のような見た目になります。

![行のスタイリング後の状態](/assets/blog/rehype-pretty-code-additional-settings/image3.png)

それでは次に、ハイライト表示するための設定とそのスタイリングを行っていきます。

## 特定行のハイライト

### マークダウンでのハイライト指定

Rehype Pretty Code で行をハイライトするには、マークダウンのコードブロックで `{3}` のように記述します。

範囲を指定する場合は `{1-3}` 、複数行を指定する場合は `{1,3}` のように書きます。

````none title="sample-post.md" {1}
```js title="add.js" {3}
const add = (a, b) => a + b

add(2, 3) // 5
```
````

しかし、デフォルトでは、上のコードのように書いても何も変わりません。ハイライト用のクラス名を HTML に追加するためには、 Rehype Pretty Code のオプションを変更します。

### Rehype Pretty Code のオプションを追記

[公式ドキュメント](https://rehype-pretty-code.netlify.app/)にあるように、次の記述を Rehype Pretty Code 使用時のオプションとして指定します。

```js title="lib/posts.js" {3-6}
.use(rehypePrettyCode, {
 theme: 'one-dark-pro',
 onVisitHighlightedLine(node) {
  node.properties.className.push('highlighted');
 },
})
```

これで、マークダウンのコードブロックで `{3}` と書いた場合に、3行目に `highlighted` というクラス名が追加されます。

### ハイライト部分のスタイリング

`highlighted` に対してスタイリングを行います。 `border-color` と `background-color` を指定します。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment] .line.highlighted {
  @apply border-teal-400 bg-teal-700/30;
}
```

ただ、これだと下図のようにハイライトがコードブロックの幅いっぱいになりません。

![ハイライト部分のスタイリング後の状態](/assets/blog/rehype-pretty-code-additional-settings/image4.png)

これを解決するためには、`code` 要素を `display: grid` にします。 `auto-rows-fr` を使用しているのは、空行の高さを保持するためです。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment] code {
  @apply grid auto-rows-fr;
}
```

これで次のような見た目になります。いい感じですね！

![ハイライト部分のスタイリング後に調整を加えた状態](/assets/blog/rehype-pretty-code-additional-settings/image5.png)

次はコードブロック用のタイトル部分の設定です。

## コードブロック用タイトル

### マークダウンでのタイトル指定

タイトルを設定するには、マークダウンのコードブロックに `title="..."` を使用します。

````none title="sample-post.md" {1}
```js {3} title="add.js"
const add = (a, b) => a + b

add(2, 3) // 5
```
````

`title="..."` を使うと、 次のような要素が HTML に挿入されます。 `data-rehype-pretty-code-title` という data attribute を持つ `div` 内に、 `title="..."` の値（ここでは `add.js`）が入っています。

```html
<div data-rehype-pretty-code-title="" data-language="js" data-theme="default">
  add.js
</div>
```

それでは、この要素に対してスタイリングしていきましょう。

### タイトル関連のスタイリング

ここでは、タイトル部分に加えて、タイトルに隣接する `pre` 要素にもスタイルを適用しています。

```css title="styles/syntax-highlighting.css"
div[data-rehype-pretty-code-fragment]
  > div[data-rehype-pretty-code-title]
  + pre {
  @apply -mt-[1px] rounded-t-none border-t border-gray-600;
}

div[data-rehype-pretty-code-title] {
  @apply relative z-10 mx-2 mt-2 block w-fit
    rounded-t border-x border-t border-gray-600
    bg-inherit px-2 py-1.5 text-sm leading-none text-gray-400;
}
```

タイトルがある場合には、 `pre` の上側の `border-radius` をなくして `border` を追加しています。 `margin-top` を `-1px` にしているのは、エディターのタブっぽい見た目にするためです。

適用後は次のようになります。

![タイトル関連のスタイリング後の状態](/assets/blog/rehype-pretty-code-additional-settings/image6.png)

最後に、行番号を追加し、スタイリングしていきます。

## 行番号

### マークダウンでの行番号表示指定

行番号を表示するには、マークダウンのコードブロックに `showLineNumbers` を追記します。

````none title="sample-post.md" {1}
```js {3} title="add.js" showLineNumbers
const add = (a, b) => a + b

add(2, 3) // 5
```
````

しかし、このようにしても、 `code` に `data-line-numbers` という data attribute が付与されるだけで、行番号は表示されません。

### 行番号表示のための CSS

行番号を表示するためには CSS カウンターを使用します。

まず、カウンターをリセットします。ここでは `lineNumber` というカウンター名を使用します。

```css title="styles/syntax-highlighting.css"
code[data-line-numbers] {
  @apply [counter-reset:lineNumber];
}
```

次に、 `lineNumber` をインクリメントするための記述と、 `lineNumber` の表示を行います。ついでに他のスタイリングも行います。

```css title="styles/syntax-highlighting.css"
code[data-line-numbers] > .line::before {
  @apply mr-3 inline-block w-4 text-right text-gray-600
    content-[counter(lineNumber)]
    [counter-increment:lineNumber];
}
```

これで、行番号が表示されます。

![行番号表示設定完了後の状態](/assets/blog/rehype-pretty-code-additional-settings/image7.png)

クールですね！

## さいごに

Rehype Pretty Code を使って、適宜 CSS を用意すれば、美しく、かつわかりやすいシンタックスハイライトを導入できます。

CSS については、デフォルトで用意されているものがないので、自身で用意する必要がありますが、デフォルトのスタイリングがない分、自由にできるのがありがたいですね。

スタイリングが面倒だという方は、今回紹介した CSS の内容を下にまとめて掲載しておきますので、よければお使いください。※Tailwind CSS を使っています。

```css title="styles/syntax-highlighting.css" showLineNumbers
div[data-rehype-pretty-code-fragment] {
  @apply my-5 rounded-lg border border-gray-600 bg-gray-900;
}

div[data-rehype-pretty-code-fragment] code {
  @apply grid auto-rows-fr;
}

div[data-rehype-pretty-code-fragment] > pre {
  @apply m-0 rounded-lg bg-gray-900 px-0;
}

div[data-rehype-pretty-code-fragment] .line {
  @apply border-l-[3px] border-transparent px-4;
}

div[data-rehype-pretty-code-fragment] .line.highlighted {
  @apply border-teal-400 bg-teal-700/30;
}

div[data-rehype-pretty-code-fragment]
  > div[data-rehype-pretty-code-title]
  + pre {
  @apply -mt-[1px] rounded-t-none border-t border-gray-600;
}

div[data-rehype-pretty-code-title] {
  @apply relative z-10 mx-2 mt-2 block w-fit
    rounded-t border-x border-t border-gray-600
    bg-inherit px-2 py-1.5 text-sm leading-none text-gray-400;
}

code[data-line-numbers] {
  @apply [counter-reset:lineNumber];
}

code[data-line-numbers] > .line::before {
  @apply mr-3 inline-block w-4 text-right text-gray-600
    content-[counter(lineNumber)]
    [counter-increment:lineNumber];
}
```

---

参考

- [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/)
- [Build-Time Syntax Highlighting: Zero Client-Side JS, Support for 100+ Languages and Any VSCode Theme | delba.dev](https://delba.dev/blog/next-blog-build-time-syntax-highlighting)
