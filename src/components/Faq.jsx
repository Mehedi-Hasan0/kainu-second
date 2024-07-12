import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-32">
      <div className="main-container flex flex-col justify-center items-center gap-6 md:gap-8 xl:gap-10 xl:max-w-[800px]">
        <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
          <p className="uppercase mini-text text-center">Learn more</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-berlin uppercase text-center">
            Frequently asked <br />
            <span className="text-csPrimary">questions</span>
          </h1>
        </div>

        {/* accordions */}
        <FaqAccordion />
      </div>
    </section>
  );
};

export default Faq;
