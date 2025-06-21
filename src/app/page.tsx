import ChronoSlide from "@/components/ChronoSlide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 antialiased">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline tracking-tight">
          ChronoSlide
        </h1>
        <p className="text-muted-foreground mt-2">A modern digital clock with sliding digits</p>
      </div>
      <ChronoSlide />
    </main>
  );
}
