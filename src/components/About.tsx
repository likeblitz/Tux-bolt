const AboutSection = () => {
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
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Before crypto. Before blockchains. There was Tux.
            </p>
            <br />
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Born in the early days of the internet, Tux became the face of Linux – the open-source revolution that changed everything. No corporations. No gatekeepers. Just people building together with nothing but passion, code, and a vision for a freer world.
            </p>
          </div>
          
          {/* Right Side Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="/lovable-uploads/014a333e-7bb9-4809-a31f-79f8ef276c1b.png" 
              alt="Tux penguin at computer" 
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Layout Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/ded7aeae-a096-4b46-971d-935618435662.png" 
              alt="Tux logo symbol" 
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>
          
          {/* Right Side Copy */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Why a penguin?
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              The idea of using a penguin came from Linus Torvalds, the creator of Linux. He once joked that he liked penguins and even mentioned being bitten by one at a zoo – which gave the mascot its humorous and lovable nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;