'use client';

import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { twMerge } from 'tailwind-merge';

const TypeAnimationItem = ({
  contents,
  delay = 0,
  callback = () => {},
  onOutputStart,
  onOutputCompleted,
}) => {
  const [isActive, setIsActive] = useState(true);
  const ref = useRef(null);
  return (
    <>
      <div
        className={twMerge(
          '[&>span]:after:inline-block [&>span]:after:-translate-y-0.5 [&>span]:after:!content-["▮"]',
          isActive ? '[&>span]:after:inline' : '[&>span]:after:hidden',
        )}
      >
        <TypeAnimation
          ref={ref}
          style={{ whiteSpace: 'pre-line' }}
          sequence={[
            onOutputStart,
            () => {
              ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            },
            delay,
            contents,
            callback,
            () => {
              setIsActive(false);
            },
            onOutputCompleted,
          ]}
          speed={150}
          repeat={0}
        />
      </div>
    </>
  );
};

export default TypeAnimationItem;
