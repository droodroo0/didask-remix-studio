import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Produits",
      children: ["Plateforme LMS", "IA Pédagogique", "Analytics", "Intégrations"]
    },
    {
      name: "Solutions", 
      children: ["Entreprises", "Établissements", "Formations", "Certification"]
    },
    { name: "Tarifs" },
    {
      name: "Ressources",
      children: ["Blog", "Guides", "Webinaires", "Support"]
    }
  ];

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    if (item.children) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
            {item.name}
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background border border-border shadow-medium">
            {item.children.map((child) => (
              <DropdownMenuItem key={child} className="hover:bg-secondary cursor-pointer">
                {child}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a href="#" className="text-foreground hover:text-primary transition-colors">
        {item.name}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="LearnSmart" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LearnSmart
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Se connecter
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-medium transition-all">
              Démo gratuite
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    {item.children && (
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <a key={child} href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    Se connecter
                  </Button>
                  <Button className="w-full bg-gradient-primary">
                    Démo gratuite
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;