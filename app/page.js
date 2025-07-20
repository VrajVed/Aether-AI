
export default function Home() {
  return (
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
        <button className="cursor-pointer p-3 border-neutral-100 border-2 rounded-md">Try Aether for Free</button>
        <button className="cursor-pointer p-3">See How it Works</button>
      </div>
    </div>
  );
}
