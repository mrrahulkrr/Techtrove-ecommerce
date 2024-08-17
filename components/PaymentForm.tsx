import { useState } from 'react';

interface PaymentFormProps {
  onPaymentComplete: () => void;
}

export default function PaymentForm({ onPaymentComplete }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block mb-2 font-semibold">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="expiry" className="block mb-2 font-semibold">Expiry Date</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="cvc" className="block mb-2 font-semibold">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="123"
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className={`w-full p-3 text-white rounded text-lg font-semibold ${
          processing ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
        } transition-colors`}
        disabled={processing}
      >
        {processing ? 'Processing Payment...' : 'Pay Now'}
      </button>
    </form>
  );
}