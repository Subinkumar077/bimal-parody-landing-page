import React from 'react';
import { TEXTS, PRODUCT_DATA } from '../constants';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <section id="products" className="relative bg-brand-cream w-full -mt-20 pt-24 pb-20 px-4 md:px-8 rounded-t-[3rem] z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {TEXTS.PRODUCT_SECTION_TITLE}
          </h2>
          <p className="text-brand-dark text-base md:text-lg max-w-2xl mx-auto">
            {TEXTS.PRODUCT_SECTION_SUBTITLE}
          </p>
        </div>

        <div className="space-y-6">
          {PRODUCT_DATA.map((product) => (
            <ProductCard 
              key={product.id}
              brand={product.brand}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;