const Marquee = () => {
  // Marquee content
  const marqueeItems = Array(12).fill(null).map((_, index) => (
    <div key={index} className="flex items-center whitespace-nowrap">
      <img 
        src="/assets/1.png"
        alt="TUX icon" 
        className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6 flex-shrink-0"
      />
      <span className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-wider">
        tux
      </span>
      <div className="w-12 md:w-16" /> {/* Spacing between items */}
    </div>
  ));

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-6 sm:py-8 md:py-12 w-full max-w-full">
      {/* Marquee container */}
      <div className="relative flex overflow-hidden w-full max-w-full">
        <div className="flex animate-marquee">
          {marqueeItems}
          {marqueeItems} {/* duplicate for seamless loop */}
        </div>
      </div>
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      
      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          min-width: 200%;
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Marquee;

