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
      className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold text-xl px-8 py-6 rounded-xl shadow-[var(--comic-shadow)] hover:shadow-[var(--comic-shadow-hover)] transform hover:translate-y-1 transition-all duration-200 hover:glow-[var(--glow-primary)] border-2 border-primary-dark"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
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
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-sm font-medium text-white/80">Contract Address</span>
        <span className="font-mono text-sm break-all sm:hidden text-white">{formatAddress(address)}</span>
        <span className="font-mono text-sm hidden sm:block text-white">{address}</span>
      </div>
      <Button
        onClick={handleCopy}
        variant="outline"
        size="sm"
        className="bg-white/10 hover:bg-white/20 transition-colors border border-white/30 font-semibold text-white hover:text-white"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/h.png')" }}
    >
      {/* Main Content - Right Side */}
      <div className="flex-1 flex items-center justify-end px-6 md:px-12 lg:px-20">
        <div className="text-right max-w-lg">
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-wider">
            Tux
          </h1>
          
          {/* Subline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            the legendary penguin who shaped the internet
          </p>
          
          {/* Buy Button */}
          <div className="flex justify-end">
            <BuyButton href="https://portal.abs.xyz/login">
              BUY TUX
            </BuyButton>
          </div>
        </div>
      </div>

      {/* Contract Address - Bottom Center */}
      <div className="flex justify-center pb-8 px-6">
        <div className="max-w-2xl w-full">
          <ContractAddress address="0x0f6b51a508a2b33e6c3115a4e9f0f1a4ce8b5bd6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
