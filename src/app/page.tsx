import ChronoSlide from "@/components/ChronoSlide";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 antialiased">
        <ChronoSlide />
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
