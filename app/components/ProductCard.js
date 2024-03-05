
import { useState } from 'react';
import Image from 'next/image';
import ProductDetailModal from './ProductDetailModal'; // Ensure this path is correct

export default function ProductCard({ product }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="product-card-container">
      <div className="product-card" onClick={openModal}>
        <Image src={product.imagePath || '/default-image.jpg'} alt={product.name} width={250} height={250} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      {isModalOpen && (
        <ProductDetailModal
          isOpen={isModalOpen}
          product={product}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
