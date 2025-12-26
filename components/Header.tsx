import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-brand-yellow">
      <div className="text-2xl font-bold text-brand-orange tracking-tight">
        bimal
      </div>
      <div className="flex items-center gap-6">
        <a href="#products" className="text-brand-dark font-medium hover:opacity-80 transition-opacity hidden sm:block">
          Products
        </a>
        <button className="bg-brand-orange text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-orange-700 transition-colors shadow-sm">
          Die Now
        </button>
      </div>
    </nav>
  );
};

export default Header;