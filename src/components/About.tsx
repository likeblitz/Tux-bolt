import { useState } from "react";

const AboutSection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xf1a2294206d7a45f620707ab956f718be2202dbe";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="about" className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-12 sm:mb-20 text-primary">ABOUT TUX</h2>

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Who is Tux</h3>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-400/40 rounded-2xl p-6 shadow-lg relative z-10">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground mb-4">
                Before <span className="font-bold text-orange-400">crypto</span>, before <span className="font-bold text-orange-400">blockchains</span> — there was <span className="font-bold text-orange-400 text-2xl">Tux</span>.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground">
                Born in the early days of the internet, Tux became the face of <span className="font-bold text-orange-400">Linux</span> — the <span className="font-bold text-orange-400">open-source revolution</span> that changed everything.
              </p>
              <a href="https://portal.abs.xyz/login" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-[0_4px_0_#ea580c] border-2 border-orange-600">
                Buy Tux
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src="/assets/a.gif" alt="Tux gif" className="relative z-10 w-full max-w-md rounded-lg shadow-2xl" />
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="flex justify-center">
            <img src="/assets/b2.png" alt="Why penguin" className="relative z-10 w-full max-w-md rounded-lg shadow-2xl" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Why a penguin?</h3>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-400/40 rounded-2xl p-6 shadow-lg relative z-10">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground mb-4">
                The idea came from Linus Torvalds, creator of Linux. He once joked he liked penguins and was even bitten by one — giving the mascot its <span className="font-bold text-orange-400">humorous</span> and <span className="font-bold text-orange-400">lovable</span> nature.
              </p>
              <div className="p-3 bg-black/10 rounded-xl border border-orange-400/30">
                <span className="font-bold text-orange-400">Contract Address:</span>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
                  <code className="block font-mono text-xs sm:text-sm md:text-base text-foreground bg-white/20 p-2 rounded border border-orange-400/40 break-all">
                    {contractAddress}
                  </code>
                  <button onClick={copyToClipboard} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl border-2 border-orange-600">
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
