import React, { useState } from 'react';
import { X, Eye, EyeOff, Check, User, Mail, Lock, CreditCard, Package, MapPin, Bell, LogOut } from 'lucide-react';
import MobileTopNavigation from './MobileTopNavigation';
import DesktopSidebar from './DesktopSidebar';
import AccountDetails from './AccountDetails';
import OrderDetails from './OrderDetails';
import SubscriptionManagement from './SubscriptionManagement';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('Mijnaccount');
  const [activeModal, setActiveModal] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    { id: 'Mijn bestellingen', label: 'Mijn bestellingen', icon: User },
    { id: 'Mijn account', label: 'Mijn account', icon: Package },
    { id: 'Mijn abonnement', label: 'Mijn abonnement', icon: MapPin },
    { id: 'Uitloggen', label: 'Uitloggen', icon: Bell },
  ];

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="min-h-auto bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Mobile Top Navigation */}
           <MobileTopNavigation  activeTab ={activeTab}  setActiveTab={setActiveTab}   />

          {/* Desktop Sidebar */}
          <DesktopSidebar  activeTab ={activeTab}  setActiveTab={setActiveTab} />

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-8">
            {activeTab === 'Mijnaccount' && (
               <AccountDetails activeModal={activeModal} setActiveModal ={setActiveModal}/>
            )}

            {activeTab === 'Mijnbestellingen' && (
              <OrderDetails/>
            )}

            {activeTab === 'Mijnabonnement' && (
              <SubscriptionManagement />
            )}
          </main>
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'details' && (
        <Modal title="Persoonlijke Gegevens Bewerken" onClose={closeModal}>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voornaam
                </label>
                <input
                  type="text"
                  defaultValue={userDetails.firstName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Achternaam
                </label>
                <input
                  type="text"
                  defaultValue={userDetails.lastName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefoonnummer
              </label>
              <input
                type="tel"
                defaultValue={userDetails.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-2 bg-[#A95A21] text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Opslaan
              </button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'email' && (
        <Modal title="E-mailadres Wijzigen" onClose={closeModal}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
               E-mailadres
              </label>
              <input
                type="email"
                value={userDetails.email}
                disabled
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
              />
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                Je ontvangt een verificatie-email op je nieuwe e-mailadres om de wijziging te bevestigen.
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-2 bg-[#A95A21] text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Opslaan
              </button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'password' && (
        <Modal title="Wachtwoord Wijzigen" onClose={closeModal}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
               Oud wachtwoord
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12 outline-none"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nieuw wachtwoord
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12 outline-none"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
               Bevestig nieuw wachtwoord
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12 outline-none"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-2">Wachtwoord vereisten:</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-green-600" />
                <span>Minimaal 8 karakters</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-green-600" />
                <span>Minimaal één hoofdletter</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-green-600" />
                <span>Minimaal één cijfer</span>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-2 bg-[#A95A21] text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Opslaan
              </button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'payment' && (
        <Modal title="Betaalmethode Toevoegen" onClose={closeModal}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kaartnummer
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vervaldatum
                </label>
                <input
                  type="text"
                  placeholder="MM/JJ"
                  maxLength={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Naam op kaart
              </label>
              <input
                type="text"
                placeholder="J. DE VRIES"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="defaultPayment"
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="defaultPayment" className="text-sm text-gray-700">
                Instellen als standaard betaalmethode
              </label>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-6 bg-gray-200 rounded flex items-center justify-center text-xs">🔒</div>
                <p className="text-sm font-medium text-gray-700">Veilig opslaan</p>
              </div>
              <p className="text-xs text-gray-600">
                Je betaalgegevens worden veilig versleuteld opgeslagen.
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-2 bg-[#A95A21] text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
               Opslaan
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-normal text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}