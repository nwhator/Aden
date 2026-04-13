export default function CheckoutPage() {
  return (
    <main className="pt-28 bg-surface text-onSurface">
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-12">
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Checkout</p>
        <h1 className="mt-6 text-4xl font-serif">Checkout</h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-stone-300">
          Your cart is ready. For now, this demo shows the cart summary and quantity controls. Implementation of payment and order submission is available as the next step.
        </p>
      </section>
    </main>
  );
}
