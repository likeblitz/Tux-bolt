import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToBuy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      headline: "STEP 1",
      content: (
        <>
          Create an Account On <span className="font-bold text-primary">Abstract</span>.
          <br />
          Navigate to <span className="font-bold text-primary">abs.xyz</span>, click{" "}
          <span className="font-bold">LOGIN</span> or <span className="font-bold">GO TO APP</span>, 
          and choose a sign-up method (<span className="text-primary">Email</span>, <span className="text-primary">Google</span>, 
          <span className="text-primary"> Passkey</span>, or <span className="text-primary">Wallet</span>).
        </>
      ),
    },
    {
      headline: "STEP 2",
      content: (
        <>
          Fund Your <span className="font-bold text-primary">Abstract Wallet</span>.
          <br />
          After logging in, go to your <span className="font-bold">Wallet page</span>, click{" "}
          <span className="font-bold text-primary">FUND</span>, and select a method (
          <span className="text-primary">Bridge</span>, <span className="text-primary">Coinbase</span>, 
          <span className="text-primary"> Centralized Exchange</span>, or <span className="text-primary">Moonpay</span>).
        </>
      ),
    },
    {
      headline: "STEP 3",
      content: (
        <>
          Purchase <span className="font-bold text-primary">$TUX Token</span>.
          <br />
          Navigate to the <span className="font-bold">Trade section</span> on{" "}
          <span className="font-bold text-primary">abs.xyz</span>, select the{" "}
          <span className="font-bold text-primary">$TUX token</span>, enter the amount, and confirm the transaction.
        </>
      ),
    },
    {
      headline: "STEP 4",
      content: (
        <>
          Already completed the steps? <span className="font-bold text-primary">Great!</span>
          <br />
          Just hit the button below to go directly to <span className="font-bold text-primary">Abstract</span>.
        </>
      ),
    },
  ];

  const nextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToStep = (index: number) => {
    if (isAnimating || index === currentStep) return;
    setIsAnimating(true);
    setCurrentStep(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextStep();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Main Headline */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
                Where can you buy TUX
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full" />
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevStep}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 disabled:opacity-50 group"
                >
                  <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 disabled:opacity-50 group"
                >
                  <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Content Box */}
              <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 min-h-[280px] shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                
                <div className="relative z-10">
                  <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                      {steps[currentStep].headline}
                    </h3>
                    
                    <div className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
                      {steps[currentStep].content}
                    </div>

                    {/* Buy Button for Step 4 */}
                    {currentStep === 3 && (
                      <div className="mt-8">
                        <Button
                          asChild
                          size="lg"
                          className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-xl px-12 py-6 rounded-xl shadow-[var(--comic-shadow)] hover:shadow-[var(--comic-shadow-hover)] transform hover:translate-y-1 transition-all duration-200 border-2 border-primary-dark"
                        >
                          <a href="https://portal.abs.xyz/login" target="_blank" rel="noopener noreferrer">
                            BUY
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-3 mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    disabled={isAnimating}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-primary scale-125 shadow-lg'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Animated Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Glowing Gold Circular Effect */}
              <div className="absolute inset-0 -m-8">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 blur-xl animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-500/10 via-yellow-400/20 to-yellow-500/10 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Main Image with Wiggle Animation */}
              <div className="relative z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                <img
                  src="/assets/HTB.svg"
                  alt="How to Buy TUX"
                  className="w-80 h-80 md:w-96 md:h-96 object-contain filter drop-shadow-2xl animate-pulse"
                  style={{ 
                    animation: 'wiggle 4s ease-in-out infinite, pulse 2s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Additional Glow Effects */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for wiggle animation */}
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