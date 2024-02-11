import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ id, name, description, price }) {
  const imagePath = `/images/${id === '1' ? 'nirvana1' : 'vaseazul1'}.jpg`;

  return (
    <Link href={`/product/${id}`}>
      <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={imagePath}
            alt={name}
            className="object-cover object-center w-full h-full"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          <p className="text-gray-900 font-semibold">{price}</p>
        </div>
      </div>
    </Link>
  );
}
