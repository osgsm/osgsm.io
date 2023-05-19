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
