---
title: "Rehype Pretty Code を使って、美しきシンタックスハイライトを手に入れる"
date: "2023-01-16"
---

技術系ブログを書くならシンタックスハイライトは必須ですよね。

というわけで、今回はシンタックスハイライトの導入を行っていきます。

パッケージとしては、Rehype Pretty Code という rehype プラグインを使います。このパッケージは、 [Shiki](https://shiki.matsu.io/) を使ってシンタックスハイライトを行います。

シンタックスハイライトといえば [Prism](https://prismjs.com) が有名ですが、今回は Shiki を使用したパッケージを採用しました。

## Prism よりも Shiki がよさそう

シンタックスハイライトの導入にあたり、ググってみたところ [Prism](https://prismjs.com) はハイライトの精度が完全でなく、崩れることもあるようでした。→ [syntax highlighter を shiki に切り替えた | blog.ojisan.io](https://blog.ojisan.io/use-shiki/) 参照。

ハイライトの精度では、Prism よりも [Shiki](https://shiki.matsu.io/) に軍配が上がるようで、しかも Shiki では、 Visual Studio Code のテーマが使えます。

ちなみに、今話題の [Astro](https://astro.build/) でも、 Shiki がデフォルトのシンタックスハイライトとして使われているようです。→ [Markdown & MDX 🚀 Astro Documentation](https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting) 参照。

そんなわけで、 Shiki を使うのがよかろうと結論しました。

で、 Shiki を使うために色々と調べているときに出会ったのが [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/) (`rehype-pretty-code`) という rehype プラグインです。

ちなみにこのプラグインは、 [Next.jsでブログをつくった | 神話募集中](https://www.haxibami.net/blog/posts/blog-renewal) という記事を見て知りました。筆者の方に感謝です。

## Rehype Pretty Code とは？

[Rehype Pretty Code](https://rehype-pretty-code.netlify.app/) は、MD/MDX ドキュメントに美しいコードブロックを提供する rehype プラグインです。

今回は詳しく書きませんが、特定の行のハイライトや行番号・ファイル名の表示なども行うことができます。例えば次のように表示させることができます。

```js showLineNumbers title="add.js" {3}
const add = (a, b) => a + b

add(2, 3) // 5
```

行のハイライトや行番号・ファイル名の表示については、後日改めて記事にする予定です。

## Rehype プラグインを使うための準備

このブログは Next.js の公式チュートリアルをもとに作っていて、マークダウンを HTML に変換するために `remark` と `remark-html` を使用しています。

`remark-html` は、 `.use(remarkRehype).use(rehypeStringify)` のショートカットにあたるプラグインですが、 rehype プラグインを使うためには `remark-rehype` と `remark-stringify` を別々で使用する必要があります。

なので、 `remark-html` を取り除き、

```shell title="Terminal"
yarn remove remark-html
```

`remark-rehype` と `rehype-stringify` をインストールしましょう。

```shell title="Terminal"
yarn add remark-rehype rehype-stringify
```

そしてそれらを使用するために `lib/posts.js` で、それらをインポートし、`remark-html` は削除します。

```diff title="lib/posts.js" {6-7}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
- import html from 'remark-html';
+ import remarkRehype from 'remark-rehype';
+ import rehypeStringify from 'rehype-stringify';
```

次に、それらを使用している `getPostData` を変更します。

```diff title="lib/posts.js" {9-10}
export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
-   .use(html)
+   .use(remarkRehype)
+   .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
```

今回追加した `.use(remarkRehype)` と `.use(rehypeStringify)` の間に記述することで rehype プラグインが使用できるようになるので、ここに `rehype-pretty-code` を追加していきます。

## Rehype Pretty Code の導入

Rehype プラグインを使用する準備ができたので、 `rehype-pretty-code` のセットアップを行っていきましょう。

まずは [公式ドキュメント](https://rehype-pretty-code.netlify.app/)に沿って、必要なパッケージをインストールします。

```shell title="Terminal"
yarn add rehype-pretty-code shiki
```

次に `lib/posts.js` で `rehype-pretty-code` をインポートします。

```jsx title="lib/posts.js" {6}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
```

そして、それを使用するために `getPostData` を変更します。 次のように `.use(rehypePrettyCode)` を追加します。

```jsx title="lib/posts.js" {9}
export const getPostData = async (id) => {
const fullPath = path.join(postsDirectory, `${id}.md`);
const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
```

これでシンタックスハイライトが効くようになります。

![デフォルトテーマを適用したシンタックスハイライトのスクリーンショット](/assets/blog/introducing-rehype-pretty-code/image1.png)

美しいですね！

## テーマを変更してみる

シンタックスハイライトのテーマは、個人的に One Dark Pro が好みなので、それに変更してみます。

テーマの変更は簡単で、プラグイン使用時にオプションとして指定するだけです。 Shiki に含まれるテーマであれば文字列を渡すだけで OK です。

次のコード例のように `theme: 'one-dark-pro'` を追加します。

併せて追記している `keepBackground: true` というのは、テーマに設定されている背景色を使うための指定です。自身で設定した背景色を使いたい場合は `false` にしてください。

```jsx {3-6}
const processedContent = await remark()
  .use(remarkRehype)
  .use(rehypePrettyCode, {
    theme: 'one-dark-pro',
    keepBackground: true,
  })
  .use(rehypeStringify)
  .process(matterResult.content);
```

!["One Dark Pro" を適用したシンタックスハイライトのスクリーンショット](/assets/blog/introducing-rehype-pretty-code/image2.png)

One Dark Pro、やっぱりいいですね。

もうひとつおまけに、他のテーマも見てみましょう。

```jsx {4}
const processedContent = await remark()
  .use(remarkRehype)
  .use(rehypePrettyCode, {
    theme: 'rose-pine-dawn',
    keepBackground: true,
  })
  .use(rehypeStringify)
  .process(matterResult.content);
```

!["Rosé Pine Dawn" を適用したシンタックスハイライトのスクリーンショット](/assets/blog/introducing-rehype-pretty-code/image3.png)

こちらは [Rosé Pine Dawn](https://vscodethemes.com/e/mvllow.rose-pine/rose-pine-dawn?language=javascript) というテーマ。レトロ感のある配色がかわいいですね。

ちなみに Shiki に含まれるテーマは [shiki/themes.md > All Themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes) から確認できます。

Shiki に含まれていないテーマでも、 JSON があればそれを読み込んで使用することもできます。詳しくは[ドキュメント](https://rehype-pretty-code.netlify.app/)をご参照あれ。

## さいごに

これで、ようやくこのブログにもシンタックスハイライトが適用されました。

Rehype Pretty Code には、他にも便利な機能があり、特定の行のハイライトや行番号を行うことも可能です。

この辺については、後日改めて記事を公開する予定ですのでお楽しみに！

---

参考

- [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/)
- [atomiks/rehype-pretty-code: Beautiful code blocks for your MD/MDX docs](https://github.com/atomiks/rehype-pretty-code)
- [shiki/themes.md at main · shikijs/shiki](https://github.com/shikijs/shiki/blob/main/docs/themes.md)
