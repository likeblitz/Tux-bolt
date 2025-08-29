const CommunitySection = () => {
  return (
    <section 
      id="community"
      className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6 bg-cover bg-center bg-no-repeat overflow-x-hidden w-full max-w-full"
      style={{ backgroundImage: "url('/assets/com.png')" }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-end w-full max-w-full overflow-hidden">
        <div className="max-w-sm sm:max-w-md min-w-0 px-2 sm:px-4 w-full max-w-full overflow-hidden">
          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-black mb-8 sm:mb-12 break-words">
            Find Us
          </h2>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-6 w-full max-w-full overflow-hidden">
            {/* Telegram */}
            <a 
              href="https://t.me/tuxabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center shadow-[0_4px_0_#000000] hover:shadow-[0_2px_0_#000000] transform hover:translate-y-1 transition-all duration-200 border-2 border-black">
                <img 
                  src="/assets/telegram.svg" 
                  alt="Telegram" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-black break-words text-center">Telegram</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/tuxonabstract" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center shadow-[0_4px_0_#000000] hover:shadow-[0_2px_0_#000000] transform hover:translate-y-1 transition-all duration-200 border-2 border-black">
                <img 
                  src="/assets/x.png" 
                  alt="X (Twitter)" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-black break-words text-center">X</span>
            </a>

            {/* Dextools */}
            <a 
              href="https://www.dextools.io/app/en/token/tuxabstract?t=1755686418908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center shadow-[0_4px_0_#000000] hover:shadow-[0_2px_0_#000000] transform hover:translate-y-1 transition-all duration-200 border-2 border-black">
                <img 
                  src="/assets/dextools.svg" 
                  alt="Dextools" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-black break-words text-center">Dextools</span>
            </a>

            {/* Dexscreener */}
            <a 
              href="https://dexscreener.com/abstract/0xf1a2294206d7a45f620707ab956f718be2202dbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center shadow-[0_4px_0_#000000] hover:shadow-[0_2px_0_#000000] transform hover:translate-y-1 transition-all duration-200 border-2 border-black">
                <img 
                  src="/assets/dex-screener.png" 
                  alt="Dexscreener" 
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-black break-words text-center">Dexscreener</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
