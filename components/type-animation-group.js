'use client';

import Image from 'next/image';
import { useState } from 'react';
import TypeAnimationItem from './type-animation-item';

const TypeAnimationGroup = ({
  contents,
  onOutputStart,
  onOutputCompleted,
  className,
}) => {
  const [renderStep, setRenderStep] = useState(1);
  return (
    <div className={className}>
      <Image
        src="/assets/profile-photo.webp"
        alt=""
        className="rounded-full border"
        width={32}
        height={32}
      />
      <div className="grid gap-4 pt-1">
        {contents.map(
          ({ id, paragraphs, delay }) =>
            renderStep >= id && (
              <TypeAnimationItem
                key={id}
                paragraphs={paragraphs}
                delay={delay}
                callback={() => setRenderStep((prevId) => prevId + 1)}
                onOutputStart={onOutputStart}
                onOutputCompleted={onOutputCompleted}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default TypeAnimationGroup;
