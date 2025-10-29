import React, { useState } from 'react'
import { Bell, LogOut, MapPin, Package, User } from 'lucide-react';
const MobileTopNavigation = ({activeTab,setActiveTab }) => {

    const [userDetails, setUserDetails] = useState({
       firstName: 'Jan',
       lastName: 'de Vries',
       email: 'jan.devries@email.com',
       phone: '+31 6 12345678'
     });

 const sidebarItems = [
    { id: 'Mijnbestellingen', label: 'Mijn bestellingen', icon: User },
    { id: 'Mijnaccount', label: 'Mijn account', icon: Package },
    { id: 'Mijnabonnement', label: 'Mijn abonnement', icon: MapPin },
  ];

  return (
    <div>
         {/* Mobile Top Navigation */}
          <div className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="px-4 py-4">
              <h2 className="text-lg font-normal text-gray-900">Mijn Account</h2>
              <p className="text-xs text-gray-500 mt-0.5">{userDetails.email}</p>
            </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
            
            {/* Horizontal Scroll Navigation */}
            <div className="overflow-x-auto scrollbar-hide px-4 pb-3">
              <div className="flex gap-2 min-w-max">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors whitespace-nowrap ${
                        activeTab === item.id
                          ? 'bg-[#A95A21] text-white font-medium'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors whitespace-nowrap">
                  <span className="text-sm">Uitloggen</span> <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MobileTopNavigation