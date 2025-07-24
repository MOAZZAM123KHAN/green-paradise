import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PopularDishes from '@/components/PopularDishes';
import LocationSection from '@/components/LocationSection';
import ReservationSection from '@/components/ReservationSection';
import { restaurantInfo } from '@/lib/data';
import DhabaLogo from '@/components/DhabaLogo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PopularDishes />
      <LocationSection />
      <ReservationSection />
      
      {/* Footer */}
      <footer className="bg-restaurant-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <DhabaLogo className="w-10 h-6" />
                <span className="text-xl font-bold">DHABA GREEN PARADISE</span>
              </div>
              <p className="text-white/80 text-sm">
                Experience the finest cuisine with fresh ingredients, prepared by expert chefs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>Home</p>
                <p>Menu</p>
                <p>About</p>
                <p>Contact</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Info</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>{restaurantInfo.address.street}</p>
                <p>{restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zipCode}</p>
                <p>Phone: {restaurantInfo.contact.phone}</p>
                <p>Email: {restaurantInfo.contact.email}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Hours</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>Mon-Thu: {restaurantInfo.hours.Monday}</p>
                <p>Fri-Sat: {restaurantInfo.hours.Friday}</p>
                <p>Sunday: {restaurantInfo.hours.Sunday}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 DHABA GREEN PARADISE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
