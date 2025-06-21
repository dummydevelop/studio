"use client";

import { useMemo } from 'react';

const DigitSlider = ({ digit }: { digit: number }) => {
  const numbers = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);

  return (
    <div className="relative h-20 w-14 overflow-hidden rounded-xl bg-background/50 shadow-[0_0_20px_-5px_hsl(var(--accent))] md:h-28 md:w-20">
      <div
        className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            className="flex h-20 w-14 items-center justify-center text-5xl font-bold text-foreground font-headline md:h-28 md:w-20 md:text-7xl"
            aria-hidden="true"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitSlider;
