import MenuCard from './MenuCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { menuItems } from '@/lib/data';

const PopularDishes = () => {
  // Show first 8 active dishes
  const dishes = menuItems.filter(item => item.status === 'Active').slice(0, 8);

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-restaurant-brown mb-2">
              Popular Dishes
            </h2>
            <p className="text-muted-foreground">
              Discover our most loved dishes, crafted with care and passion
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-restaurant-warm hover:bg-restaurant-warm hover:text-white">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-restaurant-warm hover:bg-restaurant-warm hover:text-white">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <MenuCard key={dish.id} {...dish} />
          ))}
        </div>
        
        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white px-8 py-3">
            View Full Menu ({menuItems.length} items)
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          <Button variant="outline" size="icon" className="rounded-full border-restaurant-warm hover:bg-restaurant-warm hover:text-white">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-restaurant-warm hover:bg-restaurant-warm hover:text-white">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;