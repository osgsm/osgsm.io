---
title: "Tailwind CSS でクラス名を自動ソートする"
date: "2023-01-10"
---

Tailwind CSS には、公式の [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) がというプラグインがあります。

このプラグインは Tailwind CSS のクラスをスキャンし、推奨の順番に従ってクラス名をソートします。

これを使えば、手動でクラス名を並び替える手間が省け、クラス名の順番に頭を悩ませる必要がなくなります。

## プラグインのインストール

このプラグインは Prettier のプラグインのため、 Prettier が必要になります。以下は、 Prettier が導入済みであることが前提です。

まずは `prettier-plugin-tailwindcss` のインストール。

```shell
yarn add -D prettier-plugin-tailwindcss
```

Prettier 導入済みであれば、インストールするだけで動作します。例えば次のようにクラス名を設定し...

```jsx
<h1 className="sm:pt-6 pt-4 p-2">{postData.title}</h1>
```

`yarn prettier --write .` を実行すると、次のようにクラス名が自動ソートされます。

```jsx
<h1 className="p-2 pt-4 sm:pt-6">{postData.title}</h1>
```

テキストエディターで Prettier による自動フォーマットが設定されていれば、ファイル保存時に自動的にクラス名がソートされます。

ただし、 pnpm や Yarn PnP などのパッケージマネージャを使用している場合、プラグインを明示的に Prrettier の設定に追加する必要があるようです。

## ソート順について

このプラグインは、 base レイヤー → component レイヤー → utilitiy レイヤーの順でソートします。

下の例のように、ソート後は `container` というコンポーネントがはじめに来ます。

```jsx
<div class="container mx-auto px-6">
```

他のクラスをオーバーライドするクラスは、常にクラスリストの後方にソートされます。例えば、 `p-4` と `pt-2` を併用している場合、 `pt-2` は `p-4` をオーバーライドするものなので、ソート後は次のように `pt-2` が後に来ます。

```jsx
<div class="p-4 pt-2">
```

他のユーティリティクラス間の順番は、ボックスモデルを基にしており、レイアウトに大きく影響するユーティリティクラスがはじめの方に配置され、装飾的なものは後方に配置されます。また、関連のあるユーティリティクラスは一緒に配置されます。

例えば次のような並び順になります。

```jsx
<div class="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md">
```

`hover:` などのモディファイアは一緒にグルーピングされ、通常のユーティリティの後に配置されます。

```jsx
<div class="scale-125 opacity-50 hover:scale-150 hover:opacity-75">
```

`sm:` や `lg:` などのレスポンシブモディファイアは、一緒にグルーピングされ最後に配置されます。

```jsx
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
```

サードパーティライブラリ用に使われるカスタムクラスは、始めに配置されます。例えば `swiper` など。

```jsx
<div class="swiper p-3 shadow-xl">
```

## さいごに

`prettier-plugin-tailwindcss` は、インストールするだけで、クラス名を自動で並び替えてくれるのでめっちゃ便利ですね。

あと、書く人によってクラス名の順番がバラバラになってしまうことも防げるので、チームで開発する場合にもすごくよさそうです。

---

参考

- [Automatic Class Sorting with Prettier – Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
