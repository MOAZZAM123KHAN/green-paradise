import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-gradient-to-br from-restaurant-cream to-restaurant-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-restaurant-brown mb-4">
            Visit Our Restaurant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of {restaurantInfo.address.city}, we're easy to find and always ready to serve you exceptional cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-restaurant-brown mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zipCode}<br />
                      {restaurantInfo.address.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-restaurant-brown mb-2">Contact</h3>
                    <p className="text-muted-foreground mb-1">Phone: {restaurantInfo.contact.phone}</p>
                    <p className="text-muted-foreground">Email: {restaurantInfo.contact.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-restaurant-brown mb-3">Opening Hours</h3>
                    <div className="space-y-2">
                      {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{day}:</span>
                          <span className="font-medium text-restaurant-brown">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-semibold text-restaurant-brown mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-restaurant-orange text-restaurant-orange hover:bg-restaurant-orange hover:text-white"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-8">
            <Card className="overflow-hidden h-[500px] lg:h-[600px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-restaurant-cream to-restaurant-light flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-restaurant-warm mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-restaurant-brown mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground mb-6 max-w-sm">
                      Easily find our location with GPS navigation and nearby parking information.
                    </p>
                    <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Parking & Transport Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="font-semibold text-restaurant-brown mb-2">Free Parking</h3>
              <p className="text-sm text-muted-foreground">Complimentary valet parking available for all guests during dinner hours.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🚇</span>
              </div>
              <h3 className="font-semibold text-restaurant-brown mb-2">Metro Access</h3>
              <p className="text-sm text-muted-foreground">Just 2 minutes walk from Downtown Metro Station, Line 1 & 3.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🚗</span>
              </div>
              <h3 className="font-semibold text-restaurant-brown mb-2">Easy Access</h3>
              <p className="text-sm text-muted-foreground">Located on main boulevard with easy highway access and taxi availability.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;