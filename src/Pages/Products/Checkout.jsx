import { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  const ProgressBar = () => (
    <div className="flex justify-between items-center mb-8">
      <div className={`flex-1 h-2 rounded-full ${step >= 1 ? 'bg-purple-600' : 'bg-gray-300'}`} />
      <div className={`flex-1 h-2 mx-2 rounded-full ${step >= 2 ? 'bg-purple-600' : 'bg-gray-300'}`} />
      <div className={`flex-1 h-2 rounded-full ${step >= 3 ? 'bg-purple-600' : 'bg-gray-300'}`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-400 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Order Summary */}
          <div className="w-full sm:w-1/2 bg-purple-50 p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Order Summary</h2>
            <div className="space-y-4 text-purple-700">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="w-full sm:w-1/2 bg-white p-6 text-black">
            <ProgressBar />
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <form>
              {step === 1 && (
                <div>
                  <label className="block text-sm font-bold mb-2">Shipping Address</label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              {step === 2 && (
                <div>
                  <label className="block text-sm font-bold mb-2">Payment Method</label>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              {step === 3 && (
                <div>
                  <label className="block text-sm font-bold mb-2">Review Your Order</label>
                  <p className="mb-4">Please ensure all information is correct before proceeding.</p>
                </div>
              )}
            </form>
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button onClick={prevStep} className="primary-btn">
                  Back
                </button>
              )}
              {step < 3 ? (
                <button onClick={nextStep} className="primary-btn">
                  Next
                </button>
              ) : (
                <button className="primary-btn">
                  Complete Purchase
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
