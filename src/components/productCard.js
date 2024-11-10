import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <Link href={'/product/${product.id}'}>
        <button className="bg-yellow-500 text-white mt-2 px-4 py-2 rounded">View</button>
      </Link>
    </div>
  );
};

