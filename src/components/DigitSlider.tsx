"use client";

import { useMemo } from 'react';
import { cn } from "@/lib/utils";

const DigitSlider = ({ digit, className }: { digit: number; className?: string }) => {
  const numbers = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);

  return (
    <div className={cn(
      "relative h-16 w-10 overflow-hidden rounded-lg bg-background/50 shadow-[0_0_20px_-5px_hsl(var(--accent))] sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl",
      className
    )}>
      <div
        className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            className="flex h-16 w-10 items-center justify-center text-4xl font-bold text-foreground font-headline sm:h-20 sm:w-14 sm:text-5xl md:h-28 md:w-20 md:text-7xl"
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
