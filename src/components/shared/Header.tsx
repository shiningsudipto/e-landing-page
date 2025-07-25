import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
import { navLinks } from "@/lib/constants/lists";

const Header: React.FC = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                to={"/"}
              >
                TechStore
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="cart"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-cart-bounce">
                    {state.itemCount}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
