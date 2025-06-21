"use client";

import { useState } from "react";
import ChronoSlide from "@/components/ChronoSlide";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [is24Hour, setIs24Hour] = useState(true);

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="time-format"
            className={cn(
              "text-sm",
              !is24Hour ? "font-medium text-foreground" : "text-muted-foreground"
            )}
          >
            12H
          </Label>
          <Switch
            id="time-format"
            checked={is24Hour}
            onCheckedChange={setIs24Hour}
            aria-label="Toggle time format"
          />
          <Label
            htmlFor="time-format"
            className={cn(
              "text-sm",
              is24Hour ? "font-medium text-foreground" : "text-muted-foreground"
            )}
          >
            24H
          </Label>
        </div>
        <ThemeToggle />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 antialiased">
        <ChronoSlide is24Hour={is24Hour} />
      </main>
      <div className="absolute bottom-4 left-4 z-50">
        <a
          href="https://www.linkedin.com/in/dattatray-patil-7237901a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Linkedin className="h-4 w-4" />
          <span>Dattatray Patil</span>
        </a>
      </div>
    </div>
  );
}
