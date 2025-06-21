"use client";

import { useState, useEffect } from "react";
import DigitSlider from "@/components/DigitSlider";
import { Skeleton } from "@/components/ui/skeleton";

const TimeSeparator = () => (
  <div className="flex h-16 w-3 items-center justify-center sm:h-20 sm:w-4 md:h-28 md:w-8">
    <span className="text-4xl font-bold text-foreground/30 sm:text-5xl md:text-7xl">:</span>
  </div>
);

const ClockSkeleton = () => (
  <div className="flex items-center justify-center">
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
    <div className="w-1 sm:w-2" />
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
    <div className="h-16 w-3 sm:h-20 sm:w-4 md:h-28 md:w-8" />
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
    <div className="w-1 sm:w-2" />
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
    <div className="h-16 w-3 sm:h-20 sm:w-4 md:h-28 md:w-8" />
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
    <div className="w-1 sm:w-2" />
    <Skeleton className="h-16 w-10 rounded-lg sm:h-20 sm:w-14 md:h-28 md:w-20 md:rounded-xl" />
  </div>
);

export default function ChronoSlide({ is24Hour }: { is24Hour: boolean }) {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on client to avoid hydration mismatch
    setTime(new Date());
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  if (!time) {
    return (
      <div className="flex flex-col items-center gap-6">
        <ClockSkeleton />
      </div>
    );
  }

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  let hours = time.getHours();

  if (!is24Hour) {
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
  }

  const timeDigits = {
    h1: Math.floor(hours / 10),
    h2: hours % 10,
    m1: Math.floor(minutes / 10),
    m2: minutes % 10,
    s1: Math.floor(seconds / 10),
    s2: seconds % 10,
  };

  const showHourLeadingDigit = is24Hour || hours >= 10;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center" aria-label={`Current time is ${hours}:${minutes}:${seconds}`}>
        {showHourLeadingDigit && (
          <>
            <DigitSlider digit={timeDigits.h1} />
            <div className="w-1 sm:w-2" />
          </>
        )}
        <DigitSlider digit={timeDigits.h2} />
        <TimeSeparator />
        <DigitSlider digit={timeDigits.m1} />
        <div className="w-1 sm:w-2" />
        <DigitSlider digit={timeDigits.m2} />
        <TimeSeparator />
        <DigitSlider digit={timeDigits.s1} />
        <div className="w-1 sm:w-2" />
        <DigitSlider digit={timeDigits.s2} />
      </div>
    </div>
  );
}
