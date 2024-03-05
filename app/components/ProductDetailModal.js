
export default function ProductDetailModal({ isOpen, product, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <span className="absolute top-0 right-0 p-4" onClick={onClose}>&times;</span>
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-900">{product.price}</p>
                {/* Add more product details here */}
            </div>
        </div>
    );
}
