import React from 'react';
import { IMAGES } from '../constants';
import { motion } from 'framer-motion';

interface ProductCardProps {
  brand: string;
  name: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ brand, name, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#FAE8D2] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Product Image Container */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative w-48 h-48 md:w-56 md:h-56 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
          {/* Using a placeholder image but styling it to look like a packet */}
          <img 
            src={IMAGES.PRODUCT_PACKET} 
            alt={`${brand} ${name}`}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-3 text-brand-dark">
          <span className="text-brand-orange">{brand}</span> {name}
        </h3>
        <p className="text-brand-dark/80 mb-6 text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-brand-orange text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-sm">
            Die Now
          </button>
          <button className="bg-white text-brand-dark border border-transparent px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            Die Later
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;