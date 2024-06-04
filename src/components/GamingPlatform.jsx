import Image from "next/image";
import Example from "./PlatFormContent";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const GamingPlatform = () => {
  return (
    <section className="pt-8 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-24 2xl:pt-32 pb-8 sm:pb-10 md:pb-14 lg:pb-0">
      {/* <div className="r"> */}
      <div className="main-container flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-berlin uppercase">
          The new <span className="text-csPrimary">Gaming</span> Platform
        </h1>
        <p className="text-xs xl:text-sm font-poppins text-gray-400 text-center sm:max-w-[320px] md:max-w-full">
          We’ve set on the path to make a gamer’s{" "}
          <br className="block sm:hidden" /> dream come true by offering an{" "}
          advanced <br className="block sm:hidden" /> Social{" "}
          <br className="hidden md:block" /> Gaming Platform catering to both
          web2 <br className="block sm:hidden" /> and web3 users.
        </p>
      </div>

      {/* content */}
      <div className="hidden lg:block">
        <Example />
      </div>
      <div className="grid grid-cols-3 mt-8 lg:mt-14 xl:mt-16 mx-auto lg:hidden">
        {imgData?.map((url, idx) => (
          <Dialog key={idx}>
            <DialogTrigger>
              <Image
                src={url}
                alt=""
                width={450}
                height={250}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="hover:shadow-slate-100/30 hover:shadow-md all-transition hover:opacity-80"
              />
            </DialogTrigger>
            <DialogContent className="mx-auto">
              <Image
                src={url}
                alt=""
                width={450}
                height={250}
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default GamingPlatform;

const imgData = [
  "/assets/images/platform/pl-1.png",
  "/assets/images/platform/pl-2.png",
  "/assets/images/platform/pl-3.png",
  "/assets/images/platform/pl-4.png",
  "/assets/images/platform/pl-5.png",
  "/assets/images/platform/pl-6.png",
];
