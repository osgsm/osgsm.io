---
title: '既存の Next.js プロジェクトに Tailwind CSS を導入する'
date: '2022-12-27'
---

このブログは Next.js 公式チュートリアルに沿って作っただけなので、最低限の CSS しか適用されていません。なので、もう少しスタイリングしていく必要があります。

スタイリングには Tailwind CSS を使っていくので、今回はそのインストールを行っていきます。

## Tailwind CSS のインストール

まずは必要なパッケージをインストールします。

```shell
yarn add -D tailwindcss postcss autoprefixer
```

次に `tailwind.config.js` を作成するために `tailwindcss init` を実行します。 `postcss.config.js` も一緒に作成するために `-p` オプションも付けています。

```shell
yarn tailwindcss init -p
```

## Tailwind class name を使用するファイルのパスを設定

Tailwind class name を使用するファイルを `tailwind.config.js` の `content` セクションに追加します。

今回は、 `./pages/` 以下と `./components/` 以下の `js`, `ts`, `jsx`, `tsx` ファイルを追加しています。

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Tailwind directive を CSS ファイルに追加

次に、グローバル CSS ファイル （e.g. `./styles/global.css`）に Tailwind directive を追加します。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

これで、 Tailwind CSS の `base`, `components`, `utilities` style を `global.css` に挿入できます。

ちなみにグローバル CSS ファイルは、`pages/_app.js` から読み込みます。

```jsx
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
```

## Tailwind utility class を追加してみる

Tailwind utility class を追加する前に、開発サーバーを起動します。

```shell
yarn dev
```

これで、 Tailwind utility class が使用できるようになるので、実際に使用してみます。

ここでは `Post` コンポーネントの `h1` に `text-5xl` という class を追加しています。

```jsx
const Post = ({ postData }) => {
  return (
    <Layout>
      {/* ... */}
        <h1 className="text-4xl">{postData.title}</h1>
      {/* ... */}
    </Layout>
  );
};
```

これで、下図のように、 `h1` に Tailwind utility class が適用されます。

![Tailwind utility class を適用した結果](/assets/blog/install-tailwind/image1.png)
