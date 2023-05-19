---
title: "ブログを Next.js App Router に移行する"
date: "2023-05-19"
---

Next.js 13.4 から App Router が stable になりました。

App Router を使うと、 React Server Components の恩恵でパフォーマンスがよくなったり、複雑な routing を簡単に実現できたり、データフェッチをシンプルに書けたり、諸々とメリットがあります。

というわけで、このブログ自体を App Router に移行し、その過程で行ったことを紹介しつつ、ざっくりとした移行の流れを共有できればと思います。

このブログはシンプルな作りで、主に、ホーム、アバウト、記事ページ（動的）の3つのパートに分かれています。移行前の route 関連の構造は次の通りです。

```none
pages
├─ posts
│   └─ [id].js
├─ 404.js
├─ _app.js
├─ _document.js
├─ about.js
└─ index.js
```

移行後の構造は次のようになります。

```none
app
├─ about
│   └─ page.js
├─ posts
│   └─ [id]
│       └─ page.js
├─ not-found.js
├─ layout.js
└─ page.js
```

---

## `pages` と `app` の違いについての概要

移行作業に移る前に、まず `app` Router (directory) 移行に伴う主な変更点の概要をリストアップします。

- `app` directory は、 routes や layouts をネストすることができる。
- ネストされたフォルダは、 routes を定義するために使われる。
- `page.js` というファイルは、該当の route をパブリックにアクセス可能にする。例えば `app/about/page.js` というファイルを用意すると `example.com/about` にアクセスできるようになる。
- `layout.js` というファイルは、複数の routes にまたがって共有する UI を定義する。
- `getStaticProps` や `getServerSideProps` のような fetching function は、別の API に置き換えられた。
- `getStaticPaths` は `generateStaticParams` に置き換えられた。
- `pages/_app.js` と `pages/_document.js` は、`app/layout.js` に置き換えられた。
- `pages/404.js` は、 `not-found.js` に置き換えられた。

また、`pages` と `app` directory では、デフォルトのコンポーネントの種類が異なります。`pages` のコンポーネントは Client Components となり、 `app` は Server Components となるので要注意です。

これらのコンポーネントの違いは、 [React Essentials > When to use Server and Client Components? | Next.js](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components) にまとまっています。

簡単に紹介すると、 Server Components はサーバー上でレンダリングされ、 Client Components はクライアント側でレンダリングされます。なので、Server Components を使うと、クライアント側に送るバンドルサイズを減らせたり、バックエンドのリソースに直接アクセスできます。その一方で、イベントリスナーや React state、ブラウザ API などは使えないので、それらを使う必要がある場合は、Client Components を使います。

App Router で Client Components を使うには、 `"use client"` ディレクティブを使いますが、今回の記事内ではこれに触れませんので、詳しく知りたい方は [React Essentials > Client Components | Next.js](https://nextjs.org/docs/getting-started/react-essentials#client-components) をご覧ください。

それでは、実際の作業の流れをみていきましょう。

---

## パッケージ等のアップグレード

App Router を使用するためには、 Node.js を v16.8 以上にし、 Next.js と ESLint（使っている場合）を最新のものにアップグレードする必要があります。

Node.js はすでに v16.8 以上のものを使用しているとして、まず `next`, `react`, `react-dom` をアップグレードします。

```shell title="Terminal"
yarn add next@latest react@latest react-dom@latest
```

次に、 `eslint`, `eslint-config-next` をアップデートします。

```shell title="Terminal"
yarn add -D eslint eslint-config-next@latest
```

---

## `app` directory を作成する

まずは、 `app` directory をプロジェクトルートに作成します。

```shell title="Terminal"
mkdir app/
```

---

## ルートレイアウトを作成する

`app/layout.js` を作成します。このファイルは、ルートレイアウトであり、 `app` 内のすべての routes に適用されます。

`pages` directory では、 `pages/_app.js` と `pages/_document.js` を使って、 `<body>` に `className` を与えたりしていましたが、 `app` directory ではそれらのファイルは不要なので削除しておきましょう。

`app/layout.js` は、次のような構造になります。

```jsx title="app/layout.js"
const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
```

- ルートレイアウトは、 `app` directory に必須のものです。
- ルートレイアウトでは、 `<html>`, `<body>` を定義する必要があります。

すでに、ルートレイアウト用に `components/layout.js` のようなファイルを用意している場合は、その内容を `app/layout.js` に移してください。

このブログでは、 `app/layout.js` の内容は次のようになります。※見やすいように `className` は省いています。

```jsx title="app/layout.js"
import Image from 'next/image';

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <div>
          <header>
            <>
              <Image
                {/* ... */}
              />
              <h1>osgsm</h1>
            </>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
```

`title` や `meta` などを管理したい場合は、 App Router で新たに追加された Metadata API を使います。詳しくは後述します。

---

## Tailwind CSS の設定

このブログは、 Tailwind CSS を使ってスタイリングしています。なので、その設定を行っていきます。

まずは、`tailwind.config.js` を修正し、 `app` directory 以下のファイルへのパスも追加します。

```js title="tailwind.config.js" {4}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ...
    },
  },
};
```

次に、ルートレイアウト `app/layout.js` から、 Tailwind CSS directives が書かれたグローバルスタイルシートをインポートします。このブログでは `/styles/global.css` が該当のファイルになります。

```jsx title="app/layout.js" {1}
import '../styles/global.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
```

これで、 `app` directory 以下のファイルで Tailwind CSS が使えるようになります。

---

## `next/head` を移行する

`pages` directory では、 `<head>` を管理するために `next/head` コンポーネントを使用していました。しかし、 `app` directory では、 Metadata API が追加されたので、これに置き換える必要があります。

このブログでは、 App Router 移行前では、 `components/layout.js` をレイアウトコンポーネントとして使用していました。このファイルで `next/head` を使用している部分は次のようになっています。※説明のため簡略化しています。

```jsx title="components/layout.js"
import Head from 'next/head';
// ...

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>"osgsm's personal website"</title>
        <meta
          property="og:image"
          content="/assets/osgsm-banner.png"
        />
        <meta name="og:title" content="osgsm's personal website" key="og-title" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </div>
    {/* ... */}
  );
};
```

この記述を、新たに作成した `app/layout.js` に適用するためには、次のように書きます。

```jsx
export const metadata = {
  title: {
    default: "osgsm's personal website",
    template: "%s | osgsm's personal website",
  },
  openGraph: {
    title: "osgsm's personal website",
    images: '/assets/osgsm-banner.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }) => {
  return (
    // ...
  );
};
```

このように `metadata` object をエクスポートすることで、 `title` などを設定することが可能になります。

`title` は文字列として定義することも可能ですが、今回のように template オブジェクトを使うと便利です。 `title.default` はフォールバックとして使われるもので、 child route segments において `title` が定義されない場合に使用されます。 `title.template` は prefix や suffix を title に追加するためのもので、 child route segments において `title` が指定されている場合に `%s` の部分がその `title` に置き換わります。

例えば、アバウトページのメタデータを次のように設定したとします。

```jsx title="app/about/page.js" {2}
export const metadata = {
  title: 'About',
};
```

すると、アバウトページの実際の `title` は、 `About | osgsm's personal website` となります。

詳細については [Functions: generateMetadata | Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph) をご確認ください。

ただし、動的にメタデータを設定したい場合（記事ページなど）は、この書き方では行えません。動的にメタデータを設定する方法は後述します。

次は、それぞれのページを移行していきましょう。

---

## ホーム（トップ）ページを移行する

移行前は、 `pages/index.js` にホーム（トップ）ページの内容を記述していました。

`app` directory では、 ホーム（`/`）に値するページは `app/page.js` に記述します。なので、このファイルの中に `pages/index.js` の内容をコピーします。そして、 `pages/index.js` は削除します。

しかし、このブログのホーム（トップ）ページでは、 `getStaticProps` を使っているので、開発サーバーを起動すると、 "Failed to compile" とエラーが出ます。

App Router では `getStaticProps` を使えないので、修正が必要です。

### `getStaticProps` を書き換える

このブログでは、記事の内容をプロジェクト内にマークダウンファイルとして保存し、ファイルシステム経由で取得して表示しています。修正前の該当部分のコードは次の通りです。

```jsx title="pages/index.js"
// ...
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }) => {
 return (
   {/* ... */}
  );
}
```

`getStaticProps` 内の `getSortedPostsData` からは、ソート済みのマークダウンファイルオブジェクトのリストを取得し、それを `props` オブジェクトとして返しています。そしてそれを `Home` コンポーネントの prop として受け取っています。

しかし、App Router では、もっとシンプルに書けます。 `Home` コンポーネントから直接 `getSortedPostData` を実行し、それから得られた値を使用することができます。

```jsx title="app/page.js" {3}
// ...
const Home = () => {
  const allPostsData = getSortedPostsData();
  return (
   {/* ... */}
  );
};

export default Home;
```

データの取得部分については、以上で OK ですが、`Home` コンポーネント には、まだ要修正箇所があります。

### 旧 Layout コンポーネントを削除する

App Router 移行前のこのブログでは、`/components/layout` というルートレイアウト用のコンポーネントを使っていましたが、 App Router では `app/layout.js` をルートレイアウトとして使用します。なので、 旧 `Layout` コンポーネントのインポートを削除し、 JSX 内で使用している `<Layout></Layout>` を `<></>` に置き換えます。

```diff
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
- import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

const Home = () => {
 const allPostsData = getSortedPostsData();
  return (
-    <Layout>
+    <>
      {/* ... */}
-    </Layout>
+    </>
  );
};
```

### `next/head` を削除

`app/layout.js` にて `metadata` を設定しているので、 `next/head` も不要になります。なので、該当箇所を削除します。

```diff
- import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

const Home = () => {
 const allPostsData = getSortedPostsData();
  return (
    <>
-      <Head>
-        <title>osgsm's personal website</title>
-      </Head>
      {/* ... */}
    </>
  );
};
```

これで、ホーム（トップ）ページは完了です。

---

## アバウトページを移行する

App Router 移行前は、 `pages/about.js` にアバウトページの内容を書いています。

これを `app` directory に移行するには、 `app/about/page.js` ファイルを作成します。そして、 `pages/about.js` の内容を `app/about/page.js` に移します。

`app/about/page.js` の内容については、ホーム（トップ）ページと同じように変更していくだけなので、割愛します。

`app/about/page.js` の作成が完了したら、 `pages/about.js` ファイル不要になるので、忘れずに削除しておきましょう。

---

## 記事ページを移行する

App Router 移行前は、記事ページ用の記述は `pages/posts/[id].js` に書いていましたが、 `app` directory では、 `app/posts/[id]/page.js` に書く必要があります。

しかし、 `pages/posts/[id].js` では、それぞれの記事のパスを `getStaticPaths` を使って取得し、記事のデータを `getStaticProps` を使って取得しています。

App Router では、これらを書き換える必要があります。

### `getStaticPaths` を書き換える

`getStaticPaths` の代わりに使うのは `generateStaticParams` という関数です。 これは、 `getStaticPaths` と同様の挙動ですが、よりシンプルになっています。

大きな違いは、それらが返す値の形です。

`getStaticPaths` が返す値は、次のような形になります。（参考: [Functions: getStaticPaths | Next.js](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths)）

```js
{
  paths: [
    { params: { id: 'post-1' } },
    { params: { id: 'post-2' } },
  ]
}
```

一方、 `generateStaticParams` が返す値は、次のようにシンプルな形になります。

```js
[
  { id: 'post-1' },
  { id: 'post-2' },
]
```

このことを踏まえて変更していきます。

App Router 移行前では、本ブログの `getStaticPaths` は次のようになっています。

```jsx title="pages/posts/[id].js"
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
```

ここで使用している `getAllPostIds` は、 `lib/posts.js` という別ファイルに定義していて、内容は次のようになっています。

```js
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};
```

この関数は、ファイルシステムを使って、ブログ記事用のマークダウンファイル名のリストを取得し、そのリストの各ファイル名から拡張子を省いたものを `params.id` の値としたオブジェクトの配列を返します。

App Router 移行後は、 `generateStaticParams` を使用するため、先に述べたように、 `getAllPostIds` が返す値は `[{ id: 'post-1' }, { id: 'post-2' }]` のようなシンプルな形にする必要があります。

したがって、 `getAllPostIds` を次のように変更します。

```js {5-7}
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  });
};
```

そして、この関数が返す値を、そのまま `generateStaticParams` で返すことで機能します。

```jsx title="app/posts/[id]/page.js"
export const generateStaticParams = async () => {
  return getAllPostIds();
};
```

加えて、移行前に `getStaticPaths` から返していた `fallback` も置き換える必要があります。

`app` directory では、 `dynamicParams` というオプションが用意されており、この変数を特定の route segment からエクスポートすることにより、その route segment の挙動を設定することができます。

```jsx title="app/posts/[id]/page.js" {1}
export const dynamicParams = false;

export const generateStaticParams = async () => {
  return getAllPostIds();
};
```

`false` は、 dynamic segments が `generateStaticParams` に含まれていない場合は、 404 を返すことを意味します。

詳しくは [Route Segment Config > dynamicParams | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams) をご確認ください。

次に、 `getStaticProps` も書き換えていきましょう。

### 記事ページの `getStaticProps` を書き換える

`getStaticProps` は、ホーム（トップ）ページ移行時にも変更したので、それと同じように変更できます。

App Router 移行前の `pages/posts/[id].js` ファイルの該当箇所は次のようになっています。

```jsx title="pages/posts/[id].js"
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
  // ...
  );
};

export default Post;
```

移行後の `app/posts/[id]/page.js` の該当箇所は次のようになります。

```jsx title="app/posts/[id]/page.js"
const Post = async ({ params }) => {
  const postData = await getPostData(params.id);
  return (
   // ...
  );
};

export default Post;
```

`getStaticProps` が不要になり、 `Post` コンポーネントで直接記事のデータを取得できるので、よりシンプルに書くことができます。

### 動的にメタデータを設定する

静的にメタデータを設定する方法は上述しましたが、ブログの記事ページでは、動的にメタデータを設定する必要があります。これを実現するためには `generateMetadata` 関数を使用します。

```jsx
export const generateMetadata = async ({ params }) => {
  const postData = await getPostData(params.id);
  const { id, title } = postData;

  return {
    title,
    openGraph: {
      title,
      images: '/assets/osgsm-banner.png',
      url: `http://osgsm.io/posts/${id}`,
      type: 'article',
    },
    twitter: {
      title,
      card: 'summary_large_image',
    },
  };
};
```

`generateMetadata` は、 `params` パラメータとして dynamic route parameters を受け取れます。例えば、このブログの `/posts/post-1` にアクセスした場合、 dynamic route parameter は、 `{ id: 'post-1' }` になります。

この `id` の値を使って `getPostData` をコールし、その結果を `postData` にアサインします。ここでは、その中から `postData.id` と `postData.title` を使いたいので、それらを分割代入しています。

そして、それらの値を Metadata オブジェクトの該当部分で使用し、このオブジェクトを返します。

これで、動的にメタデータを設定することが可能になります。

---

## 404 ページを移行する

`pages` directory では、 `pages/404.js` で 404 ページを表していましたが、 `app` directory では、 `app/not-found.js` というファイルを使って表します。

```jsx title="app/not-found.js"
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <p>リクエストされたページが見つかりません</p>
      <Link href="/">ホームにもどる</Link>
    </>
  );
};

export default NotFound;
```

詳細は [File Conventions: not-found.js | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) をご確認ください。

以上で、移行完了です！

---

## さいごに

実際に移行作業を行いながら、頭の中を整理するために記事を書いたのですが、思った以上に長くなってしまいました。

移行作業をしてみて、 App Router は、開発の際にも恩恵があると感じました。特に、以前は `getStaticProps` を使ってデータの取得を行っていた部分が、シンプルに直接行えるのがいいですね。あと、メタデータも簡単に設定できるのもよいです。

今回は触れませんでしたが、 App Router には、 Parallel Routes や Parallel Routes のような複雑な routing を簡単に実現する仕組みも用意されていたりして、この辺りもとても魅力的です。

とは言え、 App Router は新しいものなので、不具合もあります。例えば、 `not-found.js` に、ホームにもどるためのリンクを配置しても、それが機能しません。ただ、この挙動の修正は現在行われているようです。→ [Reset not-found and error boundary when navigating by timneutkens · Pull Request #49855 · vercel/next.js](https://github.com/vercel/next.js/pull/49855) 参照。このように不具合があっても、すぐに対応されるのがすごいですね。

今後は、App Router をより理解していくために、このブログを使って、いろいろと実験していきたいと思います。

ちなみに、今回の移行で実際に行った変更は、 [Merge pull request #15 from osgsm/app-router](https://github.com/osgsm/osgsm.io/commit/f4a86e0567c4da2dd89c85091dfce0f0ba54f9a0) からご確認いただけますので興味のある方はどうぞ。

---

参考

- [Upgrading: From Pages to App | Next.js](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration)
- [Getting Started: React Essentials | Next.js](https://nextjs.org/docs/getting-started/react-essentials)
- [Functions: generateMetadata | Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Functions: getStaticPaths | Next.js](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths)
- [File Conventions: Route Segment Config | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
- [File Conventions: not-found.js | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
