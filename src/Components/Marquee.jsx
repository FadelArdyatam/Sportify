export function Marquee({ className}) {
    return (
      <div className={`mt-10 overflow-hidden  flex bg-black dark:bg-white dark:text-black text-white font-sans text-6xl font-bold font ${className}`}>
        <span className="relative shrink-0 flex justify-around min-w-full animate-marquee">
            SWEAT NOW, SHINE LATER
        </span>
        <span className="relative shrink-0 flex justify-around min-w-full animate-marquee">
            YOUR JOURNEY STARTS HERE!
        </span>
      </div>
    );
  }
  