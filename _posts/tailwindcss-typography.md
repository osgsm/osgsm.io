---
title: "@tailwindcss/typography を使ってタイポグラフィを一括設定する"
date: "2022-12-28"
---

Tailwind CSS には、[`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin) という公式プラグインがあります。このプラグインを使うことで 、美しく読みやすいタイポグラフィを一括で設定できます。

現状（2022年12月27日）このブログは、下図のような非常に読みにくい状態です。

![タイポグラフィ設定前の状態](/assets/blog/tailwindcss-typography/image1.png)

なので、`@tailwindcss/typography` を使って、読みやすくしていきます。

## プラグインのインストールと設定

まずはインストールから。

```shell title="Terminal"
yarn add -D @tailwindcss/typography
```

次に `tailwind.config.js` ファイルにプラグインを追加します。

```js title="tailwind.config.js" {6}
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

これで準備は完了です。

## 基本的な使い方

基本的には、タイポグラフィのスタイルを設定したい要素に `prose` クラスを付与するだけです。

このブログでは、 `Post` コンポーネントが投稿内容にあたるので、その `article` に `"prose"` を追加します。

```jsx {5}
const Post = ({ postData }) => {
  return (
    <Layout>
      {/* ... */}
      <article className="prose">
        {/* ... */}
      </article>
    </Layout>
  );
};
```

このようにタイポグラフィを設定したい要素に `"prose"` class を追加するだけで、簡単に一括設定が可能です。

`"prose"` 適用後は下図のようになります。

![タイポグラフィ設定後の状態](/assets/blog/tailwindcss-typography/image2.png)

適用前に比べて、かなり読みやすくなりましたね。

## `prose` 関連のスタイルの調整

このプラグインの便利なところは、 modifier class を使って、スタイルを適宜調整できることです。

例えば、グレースケールやタイプスケールなどが変更可能です。

### グレースケールの変更

グレースケールは、次の5つの中からプロジェクトに合うものを選べます。デフォルトでは `prose-gray` が適用されています。

- `prose-gray`  *(default)*
- `prose-slate`
- `prose-zinc`
- `prose-neutral`
- `prose-stone`

ちなみに、それぞれがどのような配色かは [Customizing Colors - Tailwind CSS](https://tailwindcss.com/docs/customizing-colors) で確認できます。

デフォルトでは、やや青みがかったグレースケールが適用されているので、完全に無彩色にしたい場合は、次のように `prose-neutral` class を使用します。

```jsx {1}
<article className="prose prose-neutral">
  {/* ... */}
</article>
```

このように、 modifier class を追加するときは、 `prose` class も必要なので要注意です。

### タイプスケールの変更

Size modifiers を使えば、全体的なタイプスケールを変更できます。使用できるクラスは次の通りで、併記しているのは body のフォントサイズです。

- `prose-sm`  0.875rem *(14px)*
- `prose-base` *(default)*  1rem *(16px)*
- `prose-lg`  1.125rem *(18px)*
- `prose-xl`  1.25rem *(20px)*
- `prose-2xl`  1.5rem *(24px)*

```jsx {1}
<article className="prose prose-sm">
  {/* ... */}
</article>
```

Breakpoint modifier と組み合わせて使えば、ビューポートサイズによって異なるタイプスケールを使用できます。

```jsx {1}
<article className="prose md:prose-lg lg:prose-xl">
  {/* ... */}
</article>
```

### その他の変更

他にも、要素ごとにスタイルを変更するための element modifiers などもあります。

例えば、画像を角丸にし、ボーダーを追加したい場合は次のように記述します。

```jsx {1}
<article className="prose prose-img:border prose-img:rounded-md">
  {/* ... */}
</article>
```

詳しくは、 [@tailwindcss/typography - Tailwind CSS](https://tailwindcss.com/docs/typography-plugin#element-modifiers) を参照してください。

---

このように、 `@tailwindcss/typography` を使えば、簡単にタイポグラフィを設定できます。設定の変更が柔軟に行える点も素晴らしいですね。

とは言え、欧文のタイポグラフィ設定が、和文に適さない部分もあるかと思います。なので、その辺は適宜調整していく必要がありそうですね。

---

参考

- [@tailwindcss/typography - Tailwind CSS](https://tailwindcss.com/docs/typography-plugin#changing-the-default-class-name)
