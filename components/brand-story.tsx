export function BrandStory() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent-gold text-sm tracking-[0.3em] mb-4 uppercase">OUR PHILOSOPHY</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 tracking-tight leading-tight">
              The Art of Bespoke Gifting
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-primary-foreground/90">
              Every gift tells a story. At Opulence, we believe in the power of personalization and the beauty of
              craftsmanship. Our curated collection spans from the finest Belgian chocolates to precious metals and
              gemstones, each element carefully selected to create something truly extraordinary.
            </p>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              With our innovative customization platform, you become the designer of your perfect gift. Choose your
              basket, select your treasures, and watch as we bring your vision to life with unparalleled attention to
              detail.
            </p>
          </div>
          <div className="relative aspect-square">
            <img
              src="/luxury-gift-workshop-artisan-crafting.jpg"
              alt="Artisan crafting luxury gifts"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
