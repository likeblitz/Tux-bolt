const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6 overflow-x-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto w-full max-w-full overflow-hidden">
        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-12 sm:mb-20 text-primary break-words">
          TOKENOMIC
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center overflow-hidden w-full max-w-full">
          {/* Tax Information and Image Container */}
          <div className="relative flex items-center justify-center mb-8 sm:mb-12 w-full max-w-4xl min-w-0 overflow-hidden">
            {/* Left Side - Sell Tax */}
            <div className="absolute left-1 sm:left-2 md:left-8 lg:left-16 flex flex-col items-center">
              <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 break-words text-center">Sell Tax:</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-primary">0</span>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img 
                src="/assets/tok.png" 
                alt="TUX Token" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain max-w-full"
              />
            </div>

            {/* Right Side - Buy Tax */}
            <div className="absolute right-1 sm:right-2 md:right-8 lg:right-16 flex flex-col items-center">
              <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 break-words text-center">Buy Tax:</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-primary">0</span>
            </div>
          </div>

          {/* Supply Information */}
          <div className="text-center mb-8 sm:mb-12 w-full max-w-full overflow-hidden">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 block break-words">Supply:</span>
            <span className="text-2xl sm:text-4xl md:text-5xl font-black text-primary break-words">1,000,000,000</span>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-full overflow-hidden">
            {/* Telegram */}
            <a 
              href="https://t.me/tuxabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_hsl(var(--primary-dark))] hover:shadow-[0_2px_0_hsl(var(--primary-dark))] transform hover:translate-y-1 transition-all duration-200 border-2 border-primary group-hover:bg-primary/90">
                <img 
                  src="/assets/telegram.svg" 
                  alt="Telegram" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-primary break-words text-center">Telegram</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/tuxonabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_hsl(var(--primary-dark))] hover:shadow-[0_2px_0_hsl(var(--primary-dark))] transform hover:translate-y-1 transition-all duration-200 border-2 border-primary group-hover:bg-primary/90">
                <img 
                  src="/assets/x.png" 
                  alt="X (Twitter)" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-primary break-words text-center">X</span>
            </a>

            {/* Dextools */}
            <a 
              href="https://www.dextools.io/app/en/token/tuxabstract?t=1755686418908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_hsl(var(--primary-dark))] hover:shadow-[0_2px_0_hsl(var(--primary-dark))] transform hover:translate-y-1 transition-all duration-200 border-2 border-primary group-hover:bg-primary/90">
                <img 
                  src="/assets/dextools.svg" 
                  alt="Dextools" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-primary break-words text-center">Dextools</span>
            </a>

            {/* Dexscreener */}
            <a 
              href="https://dexscreener.com/abstract/0xf1a2294206d7a45f620707ab956f718be2202dbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_0_hsl(var(--primary-dark))] hover:shadow-[0_2px_0_hsl(var(--primary-dark))] transform hover:translate-y-1 transition-all duration-200 border-2 border-primary group-hover:bg-primary/90">
                <img 
                  src="/assets/dex-screener.png" 
                  alt="Dexscreener" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-primary break-words text-center">Dexscreener</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;