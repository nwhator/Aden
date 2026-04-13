export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 text-onSurface">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">Page not found</p>
        <h1 className="mt-6 text-5xl font-serif">We could not find that page.</h1>
        <p className="mt-6 text-sm leading-relaxed text-stone-400">
          The page you are looking for may have been moved or no longer exists. Please return to the homepage or browse the collection.
        </p>
      </div>
    </main>
  );
}
