import NamecardContent from '../../components/namecard-content';
import TypeAnimationGroup from '../../components/type-animation-group';

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

const introductionContents = [
  { id: 1, paragraph: '大島翔吾と申します。', delay: 500 },
  {
    id: 2,
    paragraph: '株式会社キテレツのフロントエンドエンジニアです。',
    delay: 500,
  },
  {
    id: 3,
    paragraph:
      '下に質問リストを用意しているので、\nなにか気になるものがあればタップしてみてください！',
    delay: 500,
  },
];

const NameCard = () => {
  return (
    <div className="min-h-dvh px-4 py-36 pb-48 md:px-6 md:pb-60">
      <div className="mx-auto max-w-3xl">
        <h1 className="sr-only text-3xl font-semibold text-muted-foreground">
          自己紹介
        </h1>
        <div className="mt-8 grid gap-4 text-base/relaxed font-semibold">
          <TypeAnimationGroup
            contents={introductionContents}
            className="flex items-start gap-4 pb-20"
          />
          <NamecardContent />
        </div>
      </div>
    </div>
  );
};

export default NameCard;
