// pages/product/[id].js
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Aqui você pode buscar os dados do produto com base no ID.
  // Por enquanto, vamos usar alguns dados de produto fictícios.
  const product = {
    id: '1',
    name: 'Acme Cup',
    description: 'This double-wall stainless tumbler with powder-coated exterior.',
    price: '$18.00',
    image: '/path/to/image1.jpg',
    colors: ['Black', 'White']
  };

  // Certifique-se de que o produto existe
  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <div className="flex">
      <img src={product.image} alt={product.name} className="w-1/2 h-auto" />
      <div className="p-8">
        <h1 className="text-2xl mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-900 mt-2">{product.price}</p>
        <p className="text-gray-700 mb-2">COLOR</p>
        <div className="flex space-x-2 mb-4">
          {product.colors.map((color) => (
            <button key={color} className="px-3 py-2 border border-gray-300 rounded">{color}</button>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}
