export default function Page() {
  return (
    <div className="lg:mx-auto lg:max-w-7xl">
      <main className="my-[121px] md:my-40 lg:my-60">
        <div className="flex flex-col items-center gap-12 md:gap-24 lg:gap-52">
          <h1 className="text-4xl font-semibold text-primary-base md:text-6xl lg:text-8xl">
            About Us
          </h1>
          <div className="max-w-96 md:max-w-103 lg:max-w-120">
            <p className="px-10 text-center text-sm/8 md:text-base/8">
              Naromm is a company that stands at the forefront of innovation and
              luxury. Dedicated to transforming skin care routines into
              extraordinary experiences, we combine cutting-edge science with
              the finest ingredients to create products that solve your skin
              concern.
            </p>
            <p className="mt-12 px-10 pt-3 text-center text-sm/8 md:mt-28 md:text-base/8 lg:mt-36">
              Our commitment to excellence extends beyond formulation. We
              prioritize sustainability, using responsibly sourced ingredients
              and eco-friendly packaging wherever possible. Our products are
              cruelty-free and undergo thorough testing to ensure both safety
              and efficacy.
            </p>
          </div>
        </div>

        <div className="mt-28 flex flex-col items-center gap-12 md:mt-64 md:gap-24 lg:mt-100 lg:gap-52">
          <h1 className="text-4xl font-semibold text-primary-base md:text-6xl lg:text-8xl">
            Our Mission
          </h1>
          <div className="max-w-96 md:max-w-103 lg:max-w-120">
            <p className="px-10 text-center text-sm/8 tracking-wide md:text-base/8">
              We believe in the transformative power of self-care. Our mission
              is not only to enhance your skin&apos;s health and beauty but also
              to inspire confidence and empower you to embrace your natural
              glow. Whether you&apos;re embarking on your skincare journey or
              seeking to elevate your current routine, our comprehensive range
              offers solutions to meet your unique needs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
