import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="px-4 md:px-6">
        <h1 className="mt-12 text-3xl">Not Found</h1>
        <p className="mt-4">リクエストされたページが見つかりません</p>
        <div className="mt-6">
          <Link
            className="inline-block rounded-md border border-gray-300
            bg-gray-100 p-3 text-sm text-gray-700
            hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800"
            href="/"
          >
            ホームにもどる
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
