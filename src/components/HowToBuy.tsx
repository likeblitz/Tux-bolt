import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HowToBuy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      headline: "STEP 1",
      content: <>Create an Account On <span className="font-bold text-orange-400">Abstract</span>... (etc)</>
    },
    {
      headline: "STEP 2",
      content: <>Fund Your <span className="font-bold text-orange-400">Abstract Wallet</span>... (etc)</>
    },
    {
      headline: "STEP 3",
      content: <>Purchase <span className="font-bold text-orange-400">$TUX Token</span>... (etc)</>
    },
    {
      headline: "STEP 4",
      content: <>Already completed the steps? <span className="font-bold text-orange-400">Great!</span>... (etc)</>
    },
  ];

  const nextStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentStep((p) => (p + 1) % steps.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };
  const prevStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentStep((p) => (p - 1 + steps.length) % steps.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };
  const goToStep = (i: number) => {
    if (!isAnimating && i !== currentStep) {
      setIsAnimating(true);
      setCurrentStep(i);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (!isAnimating) nextStep();
    }, 8000);
    return () => clearInterval(t);
  }, [isAnimating]);

  return (
    <section id="how-to-buy" className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-3 sm:mb-4">
                Where can you buy TUX
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full" />
            </div>

            {/* Carousel */}
            <div className="relative z-10">
              {/* Arrows */}
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <button onClick={prevStep} disabled={isAnimating}
                  className="p-2 sm:p-3 rounded-xl bg-primary text-white font-bold text-xl sm:text-2xl border-2 border-primary shadow-md hover:bg-primary/90 hover:translate-y-1 transition disabled:opacity-50">
                  &lt;
                </button>
                <button onClick={nextStep} disabled={isAnimating}
                  className="p-2 sm:p-3 rounded-xl bg-primary text-white font-bold text-xl sm:text-2xl border-2 border-primary shadow-md hover:bg-primary/90 hover:translate-y-1 transition disabled:opacity-50">
                  &gt;
                </button>
              </div>

              {/* Step box */}
              <div className="relative bg-card/80 backdrop-blur-sm border-2 border-orange-400/40 rounded-2xl p-6 min-h-[240px] sm:min-h-[280px] shadow-lg">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">{steps[currentStep].headline}</h3>
                  <div className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground mb-6">
                    {steps[currentStep].content}
                  </div>

                  {currentStep === 3 && (
                    <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl shadow-md border-2 border-orange-600">
                      <a href="https://portal.abs.xyz/login" target="_blank" rel="noopener noreferrer">BUY</a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Styled Dot Indicators */}
              <div className="flex justify-center space-x-3 mt-6">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToStep(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "bg-primary scale-125 shadow-[0_3px_0_hsl(var(--primary-dark))]"
                        : "bg-primary/30 hover:bg-primary/50 border border-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image with Animation */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 -m-4 sm:-m-8 rounded-full bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 blur-xl animate-pulse" />

              {/* Wiggle + pulse animation */}
              <div className="relative z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                <img
                  src="/assets/HTB.svg"
                  alt="How to Buy TUX"
                  className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-2xl"
                  style={{ animation: "wiggle 4s ease-in-out infinite, pulse 2s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wiggle keyframes */}
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(1deg) scale(1.02); }
          50% { transform: rotate(-1deg) scale(1); }
          75% { transform: rotate(1deg) scale(0.98); }
        }
      `}</style>
    </section>
  );
};

export default HowToBuy;
