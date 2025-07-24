import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';
import restaurantHero from '@/assets/restaurant-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-r from-restaurant-warm/10 to-restaurant-orange/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-restaurant-cream border border-restaurant-warm/20 rounded-full px-4 py-2 text-sm text-restaurant-brown">
              <Star className="w-4 h-4 mr-2 text-restaurant-gold fill-current" />
              We Serve The Test You Love 😊
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-restaurant-brown leading-tight">
              Delicious Food <br />
              <span className="text-restaurant-warm">Delivered Fast</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience the finest cuisine with fresh ingredients, prepared by expert chefs. 
              Order now and enjoy restaurant-quality meals delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white"
              >
                Explore Food
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white"
              >
                Search
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-restaurant-warm" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-restaurant-warm" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-restaurant-gold fill-current" />
                <span>4.8+ Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={restaurantHero} 
                alt="Restaurant Kitchen" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-restaurant-brown">5000+ Happy Customers</p>
                  <p className="text-sm text-muted-foreground">Satisfied with our service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;