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
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-muted/50 rounded-xl border-2 border-border backdrop-blur-sm">
      <div className="flex flex-col items-center sm:items-start gap-1">
        <span className="text-sm font-medium text-muted-foreground">Contract Address</span>
        <span className="font-mono text-sm break-all sm:hidden">{formatAddress(address)}</span>
        <span className="font-mono text-sm hidden sm:block">{address}</span>
      </div>
      <Button
        onClick={handleCopy}
        variant="outline"
        size="sm"
        className="bg-background hover:bg-muted transition-colors border-2 font-semibold"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific overlay for extra emphasis */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* TUX Logo/Character */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/assets/tux-penguin.png"
                alt="TUX Penguin Mascot"
                className="w-64 h-36 object-contain animate-bounce"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-50 animate-pulse" />
            </div>
          </div>

          {/* TUX Title */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black text-primary mb-4 tracking-wider transform hover:scale-105 transition-transform duration-300">
              TUX
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
          </div>

          {/* CTA Section */}
          <div className="mb-12 flex flex-col items-center gap-8">
            <BuyButton href="https://portal.abs.xyz">
              BUY TUX
            </BuyButton>
          </div>

          {/* Contract Address */}
          <div className="max-w-2xl mx-auto">
            <ContractAddress address="0x0f6b51a508a2b33e6c3115a4e9f0f1a4ce8b5bd6" />
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent" />
    </section>
  );
};

export default HeroSection;