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
    <section className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-6xl md:text-8xl font-bold text-center mb-20 text-primary">
          ABOUT TUX
        </h2>

        {/* Layout Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side Copy */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Who is Tux
            </h3>

            <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-400/40 rounded-2xl p-8 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  Before <span className="font-bold text-orange-400">crypto</span>. 
                  Before <span className="font-bold text-orange-400">blockchains</span>. 
                  There was <span className="font-bold text-orange-400 text-2xl">Tux</span>.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  Born in the early days of the internet, Tux became the face of 
                  <span className="font-bold text-orange-400">Linux</span> – the 
                  <span className="font-bold text-orange-400">open-source revolution</span> that changed everything. 
                  No <span className="line-through text-muted-foreground">corporations</span>. 
                  No <span className="line-through text-muted-foreground">gatekeepers</span>. 
                  Just people building together with nothing but 
                  <span className="font-bold text-orange-400">passion</span>, 
                  <span className="font-bold text-orange-400">code</span>, and a vision for a 
                  <span className="font-bold text-orange-400">freer world</span>.
                </p>

                {/* Buy Button */}
                <a 
                  href="/buy" 
                  className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition duration-300"
                >
                  Buy Tux
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl rounded-lg animate-pulse" />
              <img 
                src="/lovable-uploads/014a333e-7bb9-4809-a31f-79f8ef276c1b.png" 
                alt="Tux penguin at computer" 
                className="relative z-10 w-full max-w-md h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Layout Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
              <img 
                src="/lovable-uploads/ded7aeae-a096-4b46-971d-935618435662.png" 
                alt="Tux logo symbol" 
                className="relative z-10 w-full max-w-md h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side Copy */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why a penguin?
            </h3>

            <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-400/40 rounded-2xl p-8 shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="relative z-10 space-y-4">
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  The idea of using a <span className="font-bold text-orange-400">penguin</span> came from Linus Torvalds, 
                  the creator of <span className="font-bold text-orange-400">Linux</span>. He once joked that he liked penguins and even mentioned being bitten by one – which gave the mascot its <span className="font-bold text-orange-400">humorous</span> and <span className="font-bold text-orange-400">lovable nature</span>.
                </p>

                {/* Contract Address */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-bold text-orange-400">Contract Address:</span>
                  <input
                    type="text"
                    readOnly
                    value={contractAddress}
                    className="border border-gray-300 rounded px-2 py-1 text-sm md:text-base w-full md:w-auto"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded transition duration-300 text-sm"
                  >
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
