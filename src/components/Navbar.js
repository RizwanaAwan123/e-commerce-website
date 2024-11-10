import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Fast Food</h1>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
