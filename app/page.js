
// app/page.js
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import React from 'react';

export default function Home() {
  const products = [
    {
      id: '1',
      name: 'Nirvana Plate',
      description: 'Este é a Nirvana Plate',
      price: '€20.00',
      image: '/images/nirvana1.jpg', // Substitua pelo caminho real da imagem
    },
    {
      id: '2',
      name: 'Vase Azul',
      description: 'Este é o Vase Azul',
      price: '€120.00',
      image: '/images/vaseazul1.jpg', // Substitua pelo caminho real da imagem
    },
    // ...add more products as needed
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
