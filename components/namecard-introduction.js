'use client';

import { useState } from 'react';
import TypeAnimationItem from './type-animation-item';

const contents = [
  { id: 1, contents: '大島翔吾と申します。', delay: 500 },
  {
    id: 2,
    contents: '株式会社キテレツのフロントエンドエンジニアです。',
    delay: 500,
  },
  {
    id: 3,
    contents:
      '下に質問リストを用意しているので、\nなにか気になるものがあればタップしてみてください！',
    delay: 500,
  },
];

const NamecardIntroduction = () => {
  const [renderStep, setRenderStep] = useState(1);

  return (
    <>
      {contents.map(
        ({ id, contents, delay }) =>
          renderStep >= id && (
            <TypeAnimationItem
              key={id}
              contents={contents}
              delay={delay}
              callback={() => setRenderStep((prevId) => prevId + 1)}
            />
          ),
      )}
    </>
  );
};

export default NamecardIntroduction;
