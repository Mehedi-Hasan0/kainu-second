import Image from "next/image";
import pl1 from "../../public/assets/images/platform/pl-1.png";
import pl2 from "../../public/assets/images/platform/pl-2.png";
import pl3 from "../../public/assets/images/platform/pl-3.png";
import pl4 from "../../public/assets/images/platform/pl-4.png";
import pl5 from "../../public/assets/images/platform/pl-5.png";
import pl6 from "../../public/assets/images/platform/pl-6.png";
import Example from "./PlatFormContent";

const GamingPlatform = () => {
  return (
    <section className="section-padding">
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
        <Image
          src={pl1}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
        <Image
          src={pl2}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
        <Image
          src={pl3}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
        <Image
          src={pl4}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
        <Image
          src={pl5}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
        <Image
          src={pl6}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          placeholder="blur"
          //   className="2xl:w-[250px]"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default GamingPlatform;
