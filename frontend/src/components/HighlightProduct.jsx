import React from 'react';

import { useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import butterflyCake from '../assets/images/butterfly_cake.jpg';
import loveCake from '../assets/images/love_cake.jpg';
import valentineCake from '../assets/images/valentine_cake.jpg';
import whiteCake from '../assets/images/white_cake.jpg';




// Passing props to ProductCard
const ProductCard = ({ image, price, title, description }) => (

 

  // Product Card
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative h-64 bg-gray-200">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <span className="absolute bottom-2 right-2 bg-white px-2 py-1 text-gray-800 font-bold text-sm">
      ₱{price}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <button className="mt-4 w-full bg-rose-400 text-white font-semibold py-2 rounded-lg hover:bg-rose-600">
        <a href="/login">Add to Bag</a>
      </button>
    </div>
  </div>

);

// Store the product information here 
const HiglightProduct = () => {
  const products = [
    { image: valentineCake, price: 240, title: 'Happy Valentine Cake', description: 'Suprise your Loved at Valentine!' },
    { image: loveCake, price: 250, title: 'Lovelots Cake', description: 'Send love with this treat!' },
    { image: butterflyCake, price: 310, title: 'Butterfly Cake', description: 'Beauty outside sweet inside!' },
    { image: whiteCake, price: 310, title: 'Gold Marble Cake', description: 'Luxurious taste with mallow fillings!' },
  ];

  // Animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);

  return (
    <div id="products" data-aos="fade-up" className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-4xl font-montserrat font-bold mb-4 mt-7 text-rose-600">Checkout our Best Sellers!</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HiglightProduct;
