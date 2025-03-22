import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Navbar } from "@/components/ui/Navbar";
import { projects } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight ">
          Your Intelligent AI Assistant <br /> for <span className=" text-white drop-shadow-2xl"> Everything </span>
        </h2>
        <p className="max-w-xl mx-auto  md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Experience the power of AI with our advanced assistant.
          Get answers, create content, and solve problems instantly.
        </p>
      </BackgroundLines>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  AI
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/ai-medicine-feat.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

      </div>

      <div className="bg-gray-950 pt-10">
        <h2 className="max-w-xl mx-auto md:text-4xl text-white text-center font-bold py-3 ">Powerful Features</h2>
        <p className="max-w-xl mx-auto  md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Our AI assistant comes packed with capabilities to help you be more
          <br /> productive and creative.
        </p>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div>
        <h2 className=" max-w-xl mx-auto md: text-4xl text-white text-center font-bold py-3 ">Simple, Transparent Pricing</h2>
      </div>


    </div>
  );
}
