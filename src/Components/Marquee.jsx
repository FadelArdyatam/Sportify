export function Marquee({ className }) {
    return (
      <div className={`mt-10 overflow-hidden  flex bg-primary dark:bg-white dark:text-black text-black font-sans text-6xl font-bold font ${className}`}>
        <span className="relative shrink-0 flex justify-around min-w-full animate-marquee">
            SWEAT NOW, SHINE LATER                             YOUR JOURNEY STARTS HERE!
        </span>
      </div>
    );
  }
  