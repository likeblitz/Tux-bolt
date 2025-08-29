import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface BuyButtonProps {
  href: string;
  children: React.ReactNode;
}

const BuyButton = ({ href, children }: BuyButtonProps) => {
  return (
    <Button
      variant="default"
      size="lg"
      asChild
      className="relative z-20 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-8 py-6 rounded-xl shadow-[0_4px_0_#ea580c] hover:shadow-[0_2px_0_#ea580c] transform hover:translate-y-1 transition-all duration-200 border-2 border-orange-600"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

interface SocialIconProps {
  href: string;
  icon: string;
  alt: string;
  label: string;
}

const SocialIcon = ({ href, icon, alt, label }: SocialIconProps) => {
  return (
    <Button
      variant="default"
      size="icon"
      asChild
      className="relative z-20 bg-orange-500 hover:bg-orange-600 text-white font-bold w-14 h-14 rounded-xl shadow-[0_4px_0_#ea580c] hover:shadow-[0_2px_0_#ea580c] transform hover:translate-y-1 transition-all duration-200 border-2 border-orange-600 group"
      title={label}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <img
          src={icon}
          alt={alt}
          className="w-7 h-7 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
        />
      </a>
    </Button>
  );
};

interface ContractAddressProps {
  address: string;
}

const ContractAddress = ({ address }: ContractAddressProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the address manually",
        variant: "destructive",
      });
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="mt-6 w-fit max-w-full flex flex-col sm:flex-row items-center gap-3 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-md relative z-20">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-sm font-medium text-white/80">Contract Address</span>
        <span className="font-mono text-sm break-all sm:hidden text-white">
          {formatAddress(address)}
        </span>
        <span className="font-mono text-sm hidden sm:block text-white">
          {address}
        </span>
      </div>
      <Button
        onClick={handleCopy}
        variant="outline"
        size="sm"
        className="bg-white/10 hover:bg-white/20 border-2 border-white/30 font-semibold text-white hover:text-white shadow-[0_2px_0_rgba(255,255,255,0.2)] hover:shadow-[0_1px_0_rgba(255,255,255,0.2)] transform hover:translate-y-0.5 transition-all duration-200"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

const HeroSection = () => {
  const socialLinks = [
    { href: "https://t.me/tuxabstract", icon: "/assets/telegram.svg", alt: "Telegram", label: "Join our Telegram" },
    { href: "https://x.com/tuxonabstract", icon: "/assets/x.png", alt: "X (Twitter)", label: "Follow us on X" },
    { href: "https://www.dextools.io/app/en/token/tuxabstract?t=1755686418908", icon: "/assets/dextools.svg", alt: "Dextools", label: "View on Dextools" },
    { href: "https://dexscreener.com/abstract/0xf1a2294206d7a45f620707ab956f718be2202dbe", icon: "/assets/dex-screener.png", alt: "Dexscreener", label: "View on Dexscreener" }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat w-full max-w-full"
      style={{ backgroundImage: "url('/assets/bk.png')" }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-primary/65 z-0" />

      {/* Snowing Animation */}
      <div className="absolute inset-0 z-[5] pointer-events-none w-full max-w-full overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-white/80 rounded-full animate-snow" style={{ left: `${Math.random() * 100}%`, animationDuration: `${8 + Math.random() * 4}s` }} />
        ))}
        {[...Array(30)].map((_, i) => (
          <div key={`large-${i}`} className="absolute w-3 h-3 bg-white/60 rounded-full animate-snow" style={{ left: `${Math.random() * 100}%`, animationDuration: `${10 + Math.random() * 6}s` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={`small-${i}`} className="absolute w-1 h-1 bg-white/90 rounded-full animate-snow-fast" style={{ left: `${Math.random() * 100}%`, animationDuration: `${5 + Math.random() * 3}s` }} />
        ))}
      </div>

      {/* Content grid */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-20 w-full max-w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center w-full max-w-7xl mx-auto min-w-0">
          {/* Left: text, button, contract address */}
          <div className="text-left w-full max-w-full min-w-0 relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-wider break-words">
              TUX
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed break-words">
              the legendary penguin who shaped the internet
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-full relative z-10">
              <BuyButton href="https://portal.abs.xyz/login">BUY ABC</BuyButton>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} {...social} />
                ))}
              </div>
            </div>
            <ContractAddress address="0x0f6b51a508a2b33e6c3115a4e9f0f1a4ce8b5bd6" />
          </div>

          {/* Right: hero image */}
          <div className="relative h-full flex items-end justify-center lg:justify-end w-full max-w-full min-w-0">
            <img
              src="/assets/hero.png"
              alt="ABC Hero"
              className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
