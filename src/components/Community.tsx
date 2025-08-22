const CommunitySection = () => {
  return (
    <section 
      className="relative min-h-screen py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/com.png')" }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-end">
        <div className="max-w-md">
          {/* Headline */}
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-12">
            Find Us
          </h2>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-start gap-6 md:gap-8">
            {/* Telegram */}
            <a 
              href="https://t.me/tuxabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <img 
                  src="/src/assets/telegram.svg" 
                  alt="Telegram" 
                  className="w-6 h-6 md:w-7 md:h-7 filter brightness-0 invert"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-black">Telegram</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/tuxonabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <img 
                  src="/src/assets/x.png" 
                  alt="X (Twitter)" 
                  className="w-6 h-6 md:w-7 md:h-7 filter brightness-0 invert"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-black">X</span>
            </a>

            {/* Dextools */}
            <a 
              href="https://www.dextools.io/app/en/token/tuxabstract?t=1755686418908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <img 
                  src="/src/assets/dextools.svg" 
                  alt="Dextools" 
                  className="w-6 h-6 md:w-7 md:h-7 filter brightness-0 invert"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-black">Dextools</span>
            </a>

            {/* Dexscreener */}
            <a 
              href="https://dexscreener.com/abstract/0xf1a2294206d7a45f620707ab956f718be2202dbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <img 
                  src="/src/assets/dex-screener.png" 
                  alt="Dexscreener" 
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-black">Dexscreener</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
