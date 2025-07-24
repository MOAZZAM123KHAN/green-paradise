import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DhabaLogo from './DhabaLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <DhabaLogo className="w-12 h-8" />
            <span className="text-2xl font-bold text-restaurant-brown">DHABA GREEN PARADISE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-restaurant-warm transition-colors">Home</a>
            <a href="#menu" className="text-foreground hover:text-restaurant-warm transition-colors">Menu</a>
            <a href="#about" className="text-foreground hover:text-restaurant-warm transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-restaurant-warm transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-restaurant-warm transition-colors">Home</a>
              <a href="#menu" className="text-foreground hover:text-restaurant-warm transition-colors">Menu</a>
              <a href="#about" className="text-foreground hover:text-restaurant-warm transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-restaurant-warm transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;