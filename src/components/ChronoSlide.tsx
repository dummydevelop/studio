"use client";

import { useState, useEffect } from "react";
import DigitSlider from "@/components/DigitSlider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

const TimeSeparator = () => (
  <div className="flex h-20 w-4 items-center justify-center md:h-28 md:w-8">
    <span className="text-5xl font-bold text-foreground/30 md:text-7xl">:</span>
  </div>
);

const ClockSkeleton = () => (
  <div className="flex items-center justify-center">
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl" />
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl ml-2" />
    <div className="h-20 w-4 md:h-28 md:w-8" />
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl" />
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl ml-2" />
    <div className="h-20 w-4 md:h-28 md:w-8" />
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl" />
    <Skeleton className="h-20 w-14 md:h-28 md:w-20 rounded-xl ml-2" />
  </div>
);

export default function ChronoSlide() {
  const [time, setTime] = useState<Date | null>(null);
  const [is24Hour, setIs24Hour] = useState(true);

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
        <Skeleton className="h-7 w-40" />
      </div>
    );
  }

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  let hours = time.getHours();
  
  const ampm = hours >= 12 ? "PM" : "AM";

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

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center justify-center" aria-label={`Current time is ${hours}:${minutes}:${seconds}`}>
        <DigitSlider digit={timeDigits.h1} />
        <DigitSlider digit={timeDigits.h2} />
        <TimeSeparator />
        <DigitSlider digit={timeDigits.m1} />
        <DigitSlider digit={timeDigits.m2} />
        <TimeSeparator />
        <DigitSlider digit={timeDigits.s1} />
        <DigitSlider digit={timeDigits.s2} />
      </div>

      {!is24Hour && (
        <div className="text-2xl font-semibold text-foreground/80 font-headline" aria-live="polite">
          {ampm}
        </div>
      )}

      <div className="flex items-center space-x-3 mt-4">
        <Label htmlFor="time-format" className="text-muted-foreground">12-Hour</Label>
        <Switch
          id="time-format"
          checked={is24Hour}
          onCheckedChange={setIs24Hour}
          aria-label="Toggle time format"
        />
        <Label htmlFor="time-format" className="font-medium">24-Hour</Label>
      </div>
    </div>
  );
}
