


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chyavanprash from '../assets/images/chyavanprash.jpg';
import moringaPowder from '../assets/images/moringa_powder.jpg';
import coconutOil from '../assets/images/coconut-oil.png';
import handSoap from '../assets/images/hand-soap.png';
import shilajit from '../assets/images/shilajit.jpg';
import chiuriHoney from '../assets/images/native_chiuri_honey.jpg';
import multigrainSatu from '../assets/images/multigrain_satu.jpg';
import moringaTea from '../assets/images/moringa_leaves_tea.jpg';
import chiaSeeds from '../assets/images/chia_seeds.jpg';
import chamomile from '../assets/images/chamomile.jpg';
import beePollen from '../assets/images/bee_pollen.jpg';


interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching products (mock data for now)
    const fetchedProducts: Product[] = [
      { id: '1', name: 'Chyavanprash', price: 30, image: chyavanprash, description: 'A traditional herbal jam with numerous health benefits.' },
      { id: '2', name: 'Moringa Powder', price: 45, image: moringaPowder, description: 'Rich in nutrients and antioxidants.' },
      { id: '3', name: 'Coconut Oil', price: 10, image: coconutOil, description: 'Pure cold-pressed coconut oil for healthy skin and cooking.' },
      { id: '4', name: 'Hand Soap', price: 5, image: handSoap, description: 'Natural hand soap with herbal ingredients.' },
      { id: '5', name: 'Shilajit', price: 50, image: shilajit, description: 'Boosts energy, stamina and vitality.' },
      { id: '6', name: 'Chiuri Honey', price: 30, image: chiuriHoney, description: 'Raw, natural honey from Chiuri flowers.' },
      { id: '7', name: 'Multigrain Satu', price: 20, image: multigrainSatu, description: 'Healthy traditional multigrain drink mix.' },
      { id: '8', name: 'Moringa Tea Leaves', price: 10, image: moringaTea, description: 'Tea leaves packed with antioxidants and nutrients.' },
      { id: '9', name: 'Chia Seeds', price: 20, image: chiaSeeds, description: 'Organic chia seeds rich in omega-3 and fiber.' },
      { id: '10', name: 'Chamomile', price: 15, image: chamomile, description: 'Dried chamomile flowers for calming tea.' },
      { id: '11', name: 'Bee Pollen', price: 25, image: beePollen, description: 'Natural energy booster and immune support.' },
    ];

    setProducts(fetchedProducts);
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: Product) => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  
    // Animation Logic
    const img = document.getElementById(`product-img-${product.id}`);
    if (img) {
      const clone = img.cloneNode(true) as HTMLImageElement;
      const rect = img.getBoundingClientRect();
  
      clone.style.position = 'fixed';
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${img.offsetWidth}px`;
      clone.style.height = `${img.offsetHeight}px`;
      clone.style.zIndex = '1000';
      clone.classList.add('animate-flyToCart');
      document.body.appendChild(clone);
  
      clone.addEventListener('animationend', () => {
        clone.remove();
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md p-4 flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          >
            <img
              id={`product-img-${product.id}`} // Make sure to add the ID to trigger the animation
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                min="1"
                defaultValue="1"
                id={`quantity-${product.id}`}
                className="w-16 p-1 border rounded-md text-center"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const quantity = parseInt(
                    (document.getElementById(`quantity-${product.id}`) as HTMLInputElement)?.value || '1'
                  );
                  addToCart(product, quantity); // Pass quantity here
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
