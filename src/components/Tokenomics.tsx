const TokenomicsSection = () => {
  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-20 text-primary">
          TOKENOMIC
        </h2>

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center">
          {/* Tax Information and Image Container */}
          <div className="relative flex items-center justify-center mb-12 w-full max-w-4xl">
            {/* Left Side - Sell Tax */}
            <div className="absolute left-0 md:left-8 lg:left-16 flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-primary mb-2">Sell Tax:</span>
              <span className="text-4xl md:text-5xl font-black text-primary">0</span>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/tok.png" 
                alt="TUX Token" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>

            {/* Right Side - Buy Tax */}
            <div className="absolute right-0 md:right-8 lg:right-16 flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-primary mb-2">Buy Tax:</span>
              <span className="text-4xl md:text-5xl font-black text-primary">0</span>
            </div>
          </div>

          {/* Supply Information */}
          <div className="text-center mb-12">
            <span className="text-2xl md:text-3xl font-bold text-primary mb-2 block">Supply:</span>
            <span className="text-4xl md:text-5xl font-black text-primary">1,000,000,000</span>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Telegram */}
            <a 
              href="https://t.me/tuxabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <img 
                  src="/src/assets/telegram.svg" 
                  alt="Telegram" 
                  className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-primary">Telegram</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/tuxonabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <img 
                  src="/src/assets/x.png" 
                  alt="X (Twitter)" 
                  className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-primary">X</span>
            </a>

            {/* Dextools */}
            <a 
              href="https://www.dextools.io/app/en/token/tuxabstract?t=1755686418908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <img 
                  src="/src/assets/dextools.svg" 
                  alt="Dextools" 
                  className="w-8 h-8 md:w-10 md:h-10 filter brightness-0 invert"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-primary">Dextools</span>
            </a>

            {/* Dexscreener */}
            <a 
              href="https://dexscreener.com/abstract/0xf1a2294206d7a45f620707ab956f718be2202dbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <img 
                  src="/src/assets/dex-screener.png" 
                  alt="Dexscreener" 
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-primary">Dexscreener</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;