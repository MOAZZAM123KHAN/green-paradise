import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Plus } from 'lucide-react';

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const MenuCard = ({ name, description, price, image, rating }: MenuCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-b from-card to-restaurant-cream/30">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-restaurant-gold fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-restaurant-brown group-hover:text-restaurant-warm transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-restaurant-warm">
              ${price.toFixed(2)}
            </span>
          </div>
          
          <Button 
            size="sm"
            className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white rounded-full"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;