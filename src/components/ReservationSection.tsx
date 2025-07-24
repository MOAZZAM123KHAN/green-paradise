import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Users } from 'lucide-react';

const ReservationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-restaurant-cream to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-restaurant-brown">
                Do You Have Any Dinner Plan Today?
              </h2>
              <h3 className="text-2xl font-semibold text-restaurant-warm">
                Reserve Your Table
              </h3>
            </div>
            
            <p className="text-muted-foreground max-w-lg">
              Book your table in advance to ensure the best dining experience. 
              Our restaurant offers a cozy atmosphere perfect for any occasion.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-restaurant-warm/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-restaurant-warm" />
                </div>
                <span>Choose your preferred date</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-restaurant-warm/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-restaurant-warm" />
                </div>
                <span>Select your dining time</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-restaurant-warm/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-restaurant-warm" />
                </div>
                <span>Specify number of guests</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white"
            >
              Make Reservation
            </Button>
          </div>

          {/* Reservation Form */}
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-restaurant-brown">Quick Reservation</h3>
                <p className="text-sm text-muted-foreground">Book your table now</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-restaurant-brown">Date</label>
                    <Input type="date" className="border-restaurant-warm/20 focus:border-restaurant-warm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-restaurant-brown">Time</label>
                    <Input type="time" className="border-restaurant-warm/20 focus:border-restaurant-warm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-restaurant-brown">Number of Guests</label>
                  <Input 
                    type="number" 
                    placeholder="How many people?"
                    className="border-restaurant-warm/20 focus:border-restaurant-warm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-restaurant-brown">Name</label>
                  <Input 
                    placeholder="Your full name"
                    className="border-restaurant-warm/20 focus:border-restaurant-warm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-restaurant-brown">Phone</label>
                  <Input 
                    placeholder="Your phone number"
                    className="border-restaurant-warm/20 focus:border-restaurant-warm"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white"
                  size="lg"
                >
                  Book Table Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;