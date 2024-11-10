import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Normally, fetch product details by id
  const product = { id, name: 'Burger', price: '$5', image: '/burger.jpg', description: 'Delicious burger' };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </>
  );
}
