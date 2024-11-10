import Navbar from '../components/Navbar';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Burger', price: '$5', quantity: 1 },
    // Add more items if needed
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};