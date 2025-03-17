import { BackgroundLines } from "@/components/ui/background-lines";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Navbar></Navbar>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Your Intelligent AI Assistant <br /> for <span className=" text-purple-600"> Everything </span>
    </h2>
    <p className="max-w-xl mx-auto  md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
    Experience the power of AI with our advanced assistant. 
    Get answers, create content, and solve problems instantly.
    </p>
  </BackgroundLines>
        </div>
  );
}
