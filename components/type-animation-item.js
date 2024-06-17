'use client';

import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { twMerge } from 'tailwind-merge';

const TypeAnimationItem = ({
  paragraph,
  delay = 300,
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
          '[&>span]:after:inline-block [&>span]:after:h-4 [&>span]:after:min-w-2 [&>span]:after:translate-y-1 [&>span]:after:bg-foreground [&>span]:after:content-["▮"]',
          isActive ? '[&>span]:after:inline' : '[&>span]:after:hidden',
        )}
      >
        <TypeAnimation
          ref={ref}
          cursor={true}
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
            paragraph,
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
