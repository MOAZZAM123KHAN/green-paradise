import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash, 
  Users, 
  DollarSign, 
  ShoppingBag, 
  Calendar,
  ArrowLeft,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { menuItems, reservationsData, restaurantInfo } from '@/lib/data';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Using imported data from central store
  const totalMenuItems = menuItems.length;
  const totalReservations = reservationsData.length;
  const totalRevenue = menuItems.reduce((sum, item) => sum + item.price, 0) * 45; // Simulated daily revenue

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-restaurant-warm hover:bg-restaurant-warm/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-restaurant-brown">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage your restaurant operations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-restaurant-warm to-restaurant-orange rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="menu">Menu ({totalMenuItems})</TabsTrigger>
            <TabsTrigger value="reservations">Reservations ({totalReservations})</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-restaurant-warm" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-restaurant-brown">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-restaurant-orange" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-restaurant-brown">+{Math.floor(totalRevenue / 10)}</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                  <Users className="h-4 w-4 text-restaurant-warm" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-restaurant-brown">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reservations</CardTitle>
                  <Calendar className="h-4 w-4 text-restaurant-orange" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-restaurant-brown">+{totalReservations * 15}</div>
                  <p className="text-xs text-muted-foreground">+{totalReservations} today</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order #000{order}</p>
                          <p className="text-sm text-muted-foreground">Customer {order}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${(order * 25).toFixed(2)}</p>
                          <p className="text-sm text-restaurant-warm">Pending</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Reservations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reservationsData.slice(0, 3).map((reservation) => (
                      <div key={reservation.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{reservation.name}</p>
                          <p className="text-sm text-muted-foreground">{reservation.time} - {reservation.guests} guests</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            reservation.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {reservation.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Menu Tab */}
          <TabsContent value="menu" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-restaurant-brown">Menu Management</h2>
              <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add New Item
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-restaurant-brown">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-restaurant-warm">${item.price}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" title="View Details">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" title="Edit Item">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" title="Delete Item">
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reservations Tab */}
          <TabsContent value="reservations" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-restaurant-brown">Reservations</h2>
              <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Reservation
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {reservationsData.map((reservation) => (
                    <div key={reservation.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-restaurant-brown">{reservation.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {reservation.date} at {reservation.time} • {reservation.guests} guests
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          reservation.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {reservation.status}
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-restaurant-brown">Order Management</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-restaurant-brown mb-2">No Orders Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Orders will appear here once customers start placing them
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="border-restaurant-warm text-restaurant-warm hover:bg-restaurant-warm hover:text-white"
                  >
                    View Restaurant Site
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-restaurant-brown">Restaurant Settings</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Restaurant Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Restaurant Name</label>
                    <Input defaultValue={restaurantInfo.name} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea defaultValue={restaurantInfo.description} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input defaultValue={restaurantInfo.contact.phone} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue={restaurantInfo.contact.email} />
                  </div>
                  <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Location & Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Street Address</label>
                    <Input defaultValue={restaurantInfo.address.street} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">City</label>
                      <Input defaultValue={restaurantInfo.address.city} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">State</label>
                      <Input defaultValue={restaurantInfo.address.state} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Zip Code</label>
                      <Input defaultValue={restaurantInfo.address.zipCode} />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Country</label>
                      <Input defaultValue={restaurantInfo.address.country} />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-restaurant-warm to-restaurant-orange hover:opacity-90 text-white">
                    Update Location
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;