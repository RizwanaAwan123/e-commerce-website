import Navbar from '../components/Navbar';
import ProductCard from '../components/productCard';

export default function Home() {
  const products = [
    { id: 1, name: 'zinger Burger', price: '$7', image: '/burger.jpg' },
    { id: 2, name: 'Pizza', price: '$8', image: '/pizza.jpg' },
    { id: 3, name: 'fries',  price: '$5,', image: '/fries.jpg'},
    { id: 4, name:  'cold drink' , price:  '$3' , image: '/cold drink.jpg'}
    // Add more products
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
