import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="rounded-full pointer-events-none z-0 bg-[#00FF443F]
                          sm:w-[408px] sm:h-[222px] sm:top-[-99px]
                          md:w-[675px] md:h-[368px] md:top-[-300px] md:right-[450px]
                          absolute blur-[160px]"
      ></div>
      <div className="justify-center flex text-white mt-40 items-center flex-col">
        <h1 className="font-bold font text-5xl ">Your AI, Visualized.</h1>
        <p className="p-3 font-thin">Real Time Training, Clear Metrics, Smart Results</p>
        <div className="h-30 w-150">
          <p className=" p-1 font-light font-mono text-center">
            Build, train, and monitor your machine learning models with precision.
            Aether makes your AI workflow simple, fast, and insightful.
          </p>
        </div>
        <div>
          <button className="cursor-pointer p-3 mr-25 border-neutral-100 border-1 rounded-md hover:bg-neutral-500/50">Try Aether for Free</button>
          <button className="cursor-pointer p-3 rounded-md text-neutral-950 bg-neutral-50 font-semibold">See How it Works</button>
        </div>
        <div className="bg-white p-20 mt-10 rounded-2xl">
          
        </div>
      </div>
    </>

  );
}
