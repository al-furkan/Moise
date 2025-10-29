import React, { useState } from 'react';
import { ArrowLeft, RotateCw } from 'lucide-react';

export default function OrderDetails() {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'detail'
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 'FA234VUE34Q6D',
      date: '12 Nov 2023',
      orderDate: '11/12/2025',
      items: [
        {
          name: 'Mouse Luiers',
          price: 11.95,
          quantity: 1,
          size: '1 | 3-5kg',
          type: 'Single packaging',
          image: '/Products/p2.png'
        },
        {
          name: 'Moise Luierdoekjes',
          price: 2.95,
          quantity: 1,
          image: '/Products/p2.png'
        }
      ],
      subtotal: 412.90,
      shipping: 0,
      tax: 412.90,
      total: 815.90,
      status: 'Voltooid',
      shippingStatus: 'In behandeling',
      delivery: {
        name: 'Carla Bailano',
        address: 'Tulpenstraat 27',
        city: '1013 AB Amsterdam',
        country: 'Netherlands',
        phone: '+31 20 123 4567'
      },
      payment: {
        method: 'Visa',
        last4: '3421'
      }
    },
    {
      id: 'FA234VUE34Q6D',
      date: '12 Nov 2023',
      orderDate: '11/12/2025',
      items: [
        {
          name: 'Moise Luiers',
          price: 11.95,
          quantity: 4,
          size: '1 | 3-5kg',
          type: 'Single packaging',
          image: '/Products/p1.png'
        }
      ],
      subtotal: 120.00,
      shipping: 0,
      tax: 120.00,
      total: 120.00,
      status: 'Voltooid',
      shippingStatus: 'In behandeling',
      delivery: {
        name: 'Carla Bailano',
        address: 'Tulpenstraat 27',
        city: '1013 AB Amsterdam',
        country: 'Netherlands',
        phone: '+31 20 123 4567'
      },
      payment: {
        method: 'Visa',
        last4: '3421'
      }
    }
  ];

  const viewOrderDetail = (order) => {
    setSelectedOrder(order);
    setCurrentView('detail');
  };

  const backToList = () => {
    setCurrentView('list');
    setSelectedOrder(null);
  };

  // Order List View (Mobile & Desktop)
  if (currentView === 'list') {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
            Mijn bestellingen
          </h1>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {orders.map((order, index) => (
              <OrderCard key={index} order={order} onView={() => viewOrderDetail(order)} />
            ))}
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-4">
            {orders.map((order, index) => (
              <OrderCard key={index} order={order} onView={() => viewOrderDetail(order)} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Order Detail View
  return (
    <div className="min-h-auto bg-gray-50">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <button onClick={backToList} className="flex items-center gap-2 text-gray-900">
            <ArrowLeft size={20} />
            <span className="font-medium">Terug</span>
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="bg-white rounded-xl p-4">
            <h2 className="text-lg font-normal mb-1">
              Order {selectedOrder.id} from {selectedOrder.date}
            </h2>
          </div>

          {/* Order Items */}
          {selectedOrder.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4">
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Image</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-2">{item.name}</h3>
                  <p className="text-base font-medium mb-2">€{item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">Hoeveelheid: <span className="text-gray-900">{item.quantity}</span></p>
                  {item.size && <p className="text-sm text-gray-600">Maat: <span className="text-gray-900">{item.size}</span></p>}
                  {item.type && <p className="text-sm text-gray-600">Type: <span className="text-gray-900">{item.type}</span></p>}
                </div>
              </div>
            </div>
          ))}

          {/* Price Summary */}
          <div className="bg-white rounded-xl p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${selectedOrder.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Verzending</span>
              <span className="font-medium">{selectedOrder.shipping === 0 ? 'Free' : `$${selectedOrder.shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${selectedOrder.tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between">
              <span className="font-medium">Total</span>
              <span className="font-bold text-lg">${selectedOrder.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-medium text-lg mb-4">Order Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Bestelnummer</span>
                <span className="font-medium">{selectedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date Ordered:</span>
                <span className="font-medium">{selectedOrder.orderDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Betaling:</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {selectedOrder.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Verzending</span>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    {selectedOrder.shippingStatus}
                  </span>
                  <span className="text-xs font-medium">🚚 Trunkrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-medium text-lg mb-4">Payment</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Betaalmethode</span>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs font-medium text-blue-600">VISA</span>
                <span className="text-sm">**** **** **** {selectedOrder.payment.last4}</span>
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-medium text-lg mb-4">Delivery</h3>
            <div className="text-sm space-y-1">
              <p className="font-medium">{selectedOrder.delivery.name}</p>
              <p className="text-gray-600">{selectedOrder.delivery.address}</p>
              <p className="text-gray-600">{selectedOrder.delivery.city}</p>
              <p className="text-gray-600">{selectedOrder.delivery.country}</p>
              <p className="text-gray-600 mt-2">{selectedOrder.delivery.phone}</p>
            </div>
          </div>

          {/* Reorder Button */}
          <button className="w-full bg-white border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <RotateCw size={20} />
            REORDER
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <button onClick={backToList} className="flex items-center gap-2 text-gray-900 hover:text-gray-700">
              <ArrowLeft size={20} />
              <span className="font-medium">Terug</span>
            </button>
            <button className="bg-white border-2 border-[#A95A21] text-[#A95A21] px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-orange-50 transition-colors">
              <RotateCw size={20} />
              OPNIEUW BESTELLEN
            </button>
          </div>

          <h1 className="text-3xl font-normal text-gray-900 mb-8">
            Order {selectedOrder.id} from {selectedOrder.date}
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - Products */}
            <div className="space-y-6">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex gap-6">
                    <div className="w-40 h-40 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-sm text-gray-400"><img src={item.image} alt="" /></span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-3">{item.name}</h3>
                      <p className="text-lg font-medium mb-3">€{item.price.toFixed(2)}</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-600">Hoeveelheid: <span className="text-gray-900">{item.quantity}</span></p>
                        {item.size && <p className="text-gray-600">Maat: <span className="text-gray-900">{item.size}</span></p>}
                        {item.type && <p className="text-gray-600">Type: <span className="text-gray-900">{item.type}</span></p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Price Summary */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${selectedOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{selectedOrder.shipping === 0 ? 'Free' : `$${selectedOrder.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${selectedOrder.tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-medium text-lg">Total</span>
                  <span className="font-bold text-xl">${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Order Details */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-medium text-xl mb-4">Order Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Bestelnummer</span>
                    <span className="font-medium">{selectedOrder.id}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Date Ordered:</span>
                    <span className="font-medium">{selectedOrder.orderDate}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Betaling:</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {selectedOrder.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Verzending:</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        {selectedOrder.shippingStatus}
                      </span>
                      <span className="text-sm font-medium">🚚 Trunkrs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-medium text-xl mb-4">Payment</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Betaalmethode</span>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm font-medium text-blue-600">VISA</span>
                    <span>**** **** **** {selectedOrder.payment.last4}</span>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-medium text-xl mb-4">Delivery</h3>
                <div className="space-y-1">
                  <p className="font-medium text-lg">{selectedOrder.delivery.name}</p>
                  <p className="text-gray-600">{selectedOrder.delivery.address}</p>
                  <p className="text-gray-600">{selectedOrder.delivery.city}</p>
                  <p className="text-gray-600">{selectedOrder.delivery.country}</p>
                  <p className="text-gray-600 mt-3">{selectedOrder.delivery.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderCard({ order, onView }) {
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const displayItems = order.items.length > 2 ? order.items.slice(0, 2) : order.items;
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={onView}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">{order.date}</span>
        <button className="text-sm font-medium text-gray-900 hover:text-[#A95A21]">
          Bekijk bestelling
        </button>
      </div>

      <div className="flex gap-3 mb-4">
        {displayItems.map((item, idx) => (
          <div key={idx} className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
            <span className="text-xs text-gray-400"><img src={item.image} alt="" /></span>
          </div>
        ))}
        {order.items.length === 1 && (
          <div className="flex-1">
            <h3 className="font-medium text-base">{order.items[0].name}</h3>
          </div>
        )}
      </div>

      {order.items.length > 1 && (
        <p className="font-medium mb-3">{order.items.length} ITEMS</p>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Bestelnummer</span>
          <span className="font-medium">{order.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Besteldatum</span>
          <span className="font-medium">{order.orderDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Betaling:</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {order.status}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Verzending:</span>
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
            {order.shippingStatus}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Verzonden naar</span>
          <span className="font-medium text-right">{order.delivery.address}<br/>{order.delivery.city}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <span className="font-medium">Totaal aantal items</span>
        <span className="font-medium">Totaalbedrag</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{itemCount}</span>
        <span className="text-2xl font-bold">€{order.total.toFixed(2)}</span>
      </div>
    </div>
  );
}