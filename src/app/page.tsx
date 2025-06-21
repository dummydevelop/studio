import ChronoSlide from "@/components/ChronoSlide";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 antialiased">
        <ChronoSlide />
      </main>
    </div>
  );
}
