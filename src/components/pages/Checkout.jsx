import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('payNow');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState('Bashundhara RA, Road No.12, Dhaka - 6200');
  const [newAddress, setNewAddress] = useState(address);
  const [city, setCity] = useState('Dhaka');
  const [postalCode, setPostalCode] = useState('6200');

  const orderItems = [
    { id: 1, showDate: 'X1', product: '6A/6B/B7', price: 546 },
    { id: 2, showDate: 'X1', product: '6A/6B/B7', price: 546 }
  ];

  const summary = {
    deliveryFee: 100,
    tax: 10,
    discount: 90,
    total: 1012.89 // Calculated: (546*2) + 100 + 10 - 90 = 1012.89
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(newAddress);
    setShowAddressForm(false);
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully using ${paymentMethod === 'payNow' ? 'Pay Now' : 'Cash on Delivery'}!\nTotal: $${summary.total}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Address & Payment */}
          <div className="space-y-6">
            {/* Shipping Address Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
              <div className="space-y-4">
                {!showAddressForm ? (
                  <>
                    <div className="flex items-start space-x-3">
                      <input 
                        type="radio" 
                        id="address1" 
                        name="address" 
                        defaultChecked 
                        className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="address1" className="flex-1 cursor-pointer">
                        <span className="text-gray-700">{address}</span>
                      </label>
                    </div>
                    <button 
                      onClick={() => setShowAddressForm(true)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm border border-blue-600 hover:border-blue-800 rounded-lg px-4 py-2 transition-colors duration-200"
                    >
                      Change Address
                    </button>
                  </>
                ) : (
                  <form onSubmit={handleAddressChange} className="space-y-4">
                    <div>
                      <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Address
                      </label>
                      <textarea 
                        id="fullAddress" 
                        rows="3"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input 
                          type="text" 
                          id="city" 
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Postal Code
                        </label>
                        <input 
                          type="text" 
                          id="postalCode" 
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex-1"
                      >
                        Save Address
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          setShowAddressForm(false);
                          setNewAddress(address);
                          setCity('Dhaka');
                          setPostalCode('6200');
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="payNow" 
                    name="paymentMethod" 
                    value="payNow"
                    checked={paymentMethod === 'payNow'}
                    onChange={() => setPaymentMethod('payNow')}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <label 
                    htmlFor="payNow" 
                    className={`ml-3 p-4 border rounded-lg cursor-pointer flex-1 flex items-center space-x-3 transition-all duration-200 ${
                      paymentMethod === 'payNow' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-xl">💳</span>
                    <span className="font-medium text-gray-800">Pay Now</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="cashOnDelivery" 
                    name="paymentMethod" 
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={() => setPaymentMethod('cashOnDelivery')}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <label 
                    htmlFor="cashOnDelivery" 
                    className={`ml-3 p-4 border rounded-lg cursor-pointer flex-1 flex items-center space-x-3 transition-all duration-200 ${
                      paymentMethod === 'cashOnDelivery' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-xl">💰</span>
                    <span className="font-medium text-gray-800">Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Items & Summary */}
          <div className="space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Order</h2>
              <div className="space-y-6">
                {orderItems.map((item, index) => (
                  <div key={item.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-600">Show Date: {item.showDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800">Product: {item.product}</span>
                      <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${summary.deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${summary.tax}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-green-600">-${summary.discount}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total To Pay</span>
                    <span className="text-2xl font-bold text-blue-600">${summary.total}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition-colors duration-200"
              >
                Place Order
              </button>

              {/* Promotional Message */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-sm text-gray-500 italic">Buy your name company? Add Coupon</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm whitespace-nowrap">
                  Add Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;