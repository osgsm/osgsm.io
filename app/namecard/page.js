import Image from 'next/image';

import NamecardIntroduction from '../../components/namecard-introduction';
import NamecardContent from '../../components/namecard-content';

export const metadata = {
  title: '自己紹介',
  openGraph: {
    title: "自己紹介 — osgsm's personal website",
    url: 'https://osgsm.io/namecard',
    images: '/assets/osgsm-banner.png',
    type: 'website',
  },
  twitter: {
    title: "自己紹介 — osgsm's personal website",
    card: 'summary',
  },
};

const NameCard = () => {
  return (
    <>
      <section className="min-h-svh px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="sr-only text-3xl font-semibold text-muted-foreground">
            自己紹介
          </h1>
          <div className="mt-8 grid gap-4 text-base/relaxed font-semibold">
            <div className="flex items-start gap-4">
              <Image
                src="/assets/profile-photo.webp"
                alt=""
                className="rounded-full border"
                width={32}
                height={32}
              />
              <div className="grid gap-4 pt-1">
                <NamecardIntroduction />
              </div>
            </div>
            <div className="grid gap-4">
              <NamecardContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NameCard;
