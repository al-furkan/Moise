import { Bell, LogOut, MapPin, Package, User } from 'lucide-react';
import React, { useState } from 'react'

const DesktopSidebar = ({activeTab,setActiveTab }) => {

  const [userDetails, setUserDetails] = useState({
    firstName: 'Jan',
    lastName: 'de Vries',
    email: 'jan.devries@email.com',
    phone: '+31 6 12345678'
  });

  const [paymentMethods] = useState([
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', expiry: '12/25', isDefault: true },
    { id: 2, type: 'card', last4: '5555', brand: 'Mastercard', expiry: '09/24', isDefault: false }
  ]);

  const sidebarItems = [
    { id: 'Mijnbestellingen', label: 'Mijn bestellingen', icon: User },
    { id: 'Mijnaccount', label: 'Mijn account', icon: Package },
    { id: 'Mijnabonnement', label: 'Mijn abonnement', icon: MapPin },
  ];




  return (
    <div>
           <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-normal text-gray-900">Mijn Account</h2>
              <p className="text-sm text-gray-500 mt-1">{userDetails.email}</p>
            </div>
            
            {/* Navigation Items */}
            <nav className="p-4">
              <div className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === item.id
                          ? 'bg-orange-50 text-[#A95A21] font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors text-left">
                  <span>Uitloggen</span>   <LogOut size={20} />
                </button>
              </div>
            </nav>
          </aside>



    </div>
  )
}

export default DesktopSidebar